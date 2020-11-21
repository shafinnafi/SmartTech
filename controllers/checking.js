const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('checking/checking');
});

router.post('/', (req, res)=>{


	if(req.body.code=="1234"){
	res.redirect('/esignup');}
	else{
		res.redirect('/checking');
	}
}); 

module.exports = router;