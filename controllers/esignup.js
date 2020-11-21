const express 	= require('express');
const userModel = require.main.require('./models/create_employee');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('esignup/esignup');
});



router.post('/', (req, res)=>{
	var euser = {
		ename: req.body.ename,
		epass: req.body.epass,
		eemail: req.body.eemail
	};
	userModel.createuser(euser, function(status){
		//console.log(status);
		
		res.redirect('/login');
		
	});
});






module.exports = router;