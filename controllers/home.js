const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

var name1;
router.get('*',  (req, res, next)=>{
	name1 = req.cookies['uname'];
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: name1, id:'123'});
});


router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});

})

module.exports = router;