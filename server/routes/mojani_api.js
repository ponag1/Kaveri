var requestify = require('requestify');
var express = require('express');
var router = express.Router();
var vcapServices = require("vcap_services");
var Cloudant = require('@cloudant/cloudant');
var credentials = {};
if(process.env.VCAP_SERVICES){ //for bluemix env
	credentials = vcapServices.getCredentials('cloudantNoSQLDB', null, 'cloudant_land_records'); //get the cloudant_land_records service instance credentials
	console.log("credentials",credentials);
}
var cloudant_url = process.env.CLOUDANT_DB_URL || credentials.url;
var cloudant = Cloudant(cloudant_url);
//create the document in the db if not available
var mojaniDBName = process.env.MOJANI_DB || "mojani";

cloudant.db.create(mojaniDBName, function(err) {
        if (err) {
            console.log('Could not create new db: ' + mojaniDBName+ ', it might already exist.');
        }
		
});
//connect to MOJANI DB
var mojani = cloudant.use(mojaniDBName);
  
  //create index in db on PID if not existing
  var pid = {name:'pid', type:'json', index:{fields:['pid']}};
	mojani.index(pid, function(er, response) {
	  if (er) {
		console.log("Error creating index on pid:"+ er);
	  }else{
		console.log('Index creation result on pid:'+ response.result);
	  }
	});

/* GET API to get land records from MOJANI using PID*/
router.get('/api/getLandRecordsMojaniByPid/:id', (req, res) => {
	let sketchURL;
	console.log('Inside Express api to get land records by Pid');
	if(!isNaN(req.params.id)){
		requestify.get('http://13.232.73.187:3000/api/org.bhoomi.landrecords.LandRecord/'+req.params.id).then(function(blockResponse) {
			if(blockResponse.code==200){
				mojani.find({selector:{pid:Number(req.params.id)}}, function(er, result) {
				if (er) {
				console.log("Error finding documents");
				res.json({success : false,message:"Error finding documents: "+er,landRecords:null});
				}
				console.log('Found documents with PID count:'+ req.params.id +":"+ result.docs.length);
	 
				if(result.docs.length > 0){
				console.log('Found documents with PID count:'+ req.params.id +":"+ result.docs.length);
				let doc = result.docs[0];
				let attachmentName;
				if(doc['_attachments'] !=null){
					attachmentName = Object.keys(doc['_attachments'])[0];
					sketchURL= cloudant_url + "/" + mojaniDBName + "/" + doc["_id"]+ "/" + attachmentName;
				}
				res.json({success : true, message:"Found "+result.docs.length+" documents", landRecords: doc, sketchURL : sketchURL});
				}
				else
					res.json({success : true, message:"No documents found", landRecords:null});
				});
			}else{
				res.json({success : false, message:"PID sent null in request", landRecords:null});
			}
		});
	}else {
		res.json({success : false, message:"PID sent null in request", landRecords:null});
	}
});

module.exports = router;
