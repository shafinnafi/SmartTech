const express 	= require('express');
const router 	= express.Router();
const userModel	= require.main.require('./models/userModel');

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});


router.post('/create', (req, res)=>{
	
	/*var user = [req.body.uname, req.body.password, req.body.email];
	var newlist = req.session.userlist;
	newlist.push(user);
	req.session.userlist = newlist;*/
	
	res.send('New user info:'+
				"<br> Username: "+req.body.username+
				"<br> Password: "+req.body.password+
				"<br> Email: "+req.body.email
			);
});

router.get('/edit', (req, res)=>{
		userModel.getById(req.cookies['uname'], function (result){
			res.render('user/edit', {
				user: result
			});
			// res.redirect('home/userprofile');
		});
	

});

router.post('/edit', (req, res)=>{
	var user = {
        username: req.body.username,
        email : req.body.useremail,
        password: req.body.password
        
	};

	userModel.updateProfile(user, function(status){
		if(status){
			res.redirect('/home');
		}else{

			res.redirect('/login');
			// res.send('Invalid');
            
		}
	});
});

// router.get('/delete/:id', (req, res)=>{
// 	var user = {username: 'alamin', password: '123', email: 'email@gmail.com'};
// 	res.render('user/delete', user);
// });

router.post('/delete/:id', (req, res)=>{
	res.redirect('/home/userlist');
});

module.exports = router;

