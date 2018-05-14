var express = require('express');
var router = express.Router();
var Cloudant = require('@cloudant/cloudant');
var cloudant = Cloudant(process.env.CLOUDANT_DB_URL);
//create the document in the db if not available
cloudant.db.create(process.env.KAVERI_DB, function(err) {
        if (err) {
            console.log('Could not create new db: ' + process.env.KAVERI_DB + ', it might already exist.');
        }
		
});
//connect to Kaveri DB
var kaveri = cloudant.use(process.env.KAVERI_DB);
  
  //create index in db on ward no if not existing
  var ward = {name:'ward', type:'json', index:{fields:['wardNo']}};
	kaveri.index(ward, function(er, response) {
	  if (er) {
		console.log("Error creating index on ward no:"+ er);
	  }else{
		console.log('Index creation result on ward:'+ response.result);
	  }
	});
	
  //create index in db on PID if not existing
  var pid = {name:'pid', type:'json', index:{fields:['pid']}};
	kaveri.index(pid, function(er, response) {
	  if (er) {
		console.log("Error creating index on pid:"+ er);
	  }else{
		console.log('Index creation result on pid:'+ response.result);
	  }
	});
 //Create index in db on txn ID if not existing
 var txnid = {name:'txnid', type:'json', index:{fields:['txnid']}};
 kaveri.index(txnid, function(er, response){
    if (er) {
		console.log("Error creating index on txnid:"+ er);
    }else{
        console.log('Index creation result on txnid:'+ response.result);
    }
 });

/* POST API to create a new land record in Kaveri*/
router.post('/api/addLandRecordKaveri', (req, res) => {
  console.log('Inside Express api to add new land record kaveri');
  console.log("Received PID: " + req.body.txnid);
  var record = req.body;
  var id = req.body.txnid;
    kaveri.insert(record, id, function(err, doc) {
        if (err) {
            console.log("Error saving record to kaveri" +err);
            res.json({success:false, message: err.toString()});
        }else{
            console.log("success inserting record to kaveri");
            res.json({success : true, message : "Land record added successfully to kaveri"});
            }
										
    });	
});

/* POST API to update approved records in kaveri*/
router.post('/api/updateKaveriApprovedStatus', (req, res) => {
  console.log('Inside Express api to update new land record');
  var records = req.body; //Array of land records
  console.log("list of documents" + JSON.stringify(records));
  var documentIdsAdded = [];
  kaveri.find({selector:{wardNo:records[0].wardNo}}, function(er, result) {
	  if (er) {
		console.log("Error finding documents");
	  }
	  console.log('Found documents with wardNo '+ records[0].wardNo +":"+ result.docs.length);
	  for (var i = 0; i < result.docs.length; i++) {
		console.log('Doc id:'+ result.docs[i].id);
		records[i]["_id"] = result.docs[i]["_id"];
		records[i]["_rev"] = result.docs[i]["_rev"];
        documentIdsAdded.push(result.docs[i].pid);
		}
		  kaveri.bulk({docs : records}, function(err, doc) {
					if (err) {
						console.log("Error updating records to Kaveri" +err);
						res.json({success : false, message : err+""});
					} else{
						console.log("success saving records to Kaveri");
				       res.json({success : true, documentIdsAdded : documentIdsAdded});
					}				
				});	

	}); 
});


/* GET API to get land records from Kaveri using ward No*/
router.get('/api/getLandRecordsKaveriByWard/:id', (req, res) => {
  console.log('Inside Express api to get land records');
kaveri.find({selector:{wardNo:req.params.id}}, function(er, result) {
	  if (er) {
		console.log("Error finding documents");
		res.json({success : false,message:"Error finding documents",landRecords:null});
	  }
	  console.log('Found documents with wardNo count: '+ req.params.id +":"+ result.docs.length);
/* 	  for (var i = 0; i < result.docs.length; i++) {
		console.log('Doc:'+ JSON.stringify(result.docs[i]));
	  } */
	  res.json({success : true, message:"Found "+result.docs.length+" documents", landRecords:result.docs});
	});
});

/* GET API to get land records from Kaveri using PID*/
router.get('/api/getLandRecordsKaveriByPid/:id', (req, res) => {
  console.log('Inside Express api to get land records by Pid');
  kaveri.find({selector:{pid:Number(req.params.id)}}, function(er, result) {
	  if (er) {
		console.log("Error finding documents");
		res.json({success : false,message:"Error finding documents",landRecords:null});
	  }
	  console.log('Found documents with PID count:'+ req.params.id +":"+ result.docs.length);
/* 	  for (var i = 0; i < result.docs.length; i++) {
		console.log('Doc:'+ JSON.stringify(result.docs[i]));
	  } */
	  
	  res.json({success : true, message:"Found "+result.docs.length+" documents", landRecords:result.docs});
	});
});


module.exports = router;