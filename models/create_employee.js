const db            = require('./db');

module.exports = {
	createuser: (euser,callback) => {
        var sql = `INSERT INTO employee ( ename,eemail,epass) VALUES (?,?,?)`;
        db.getResults(sql, [euser.ename, euser.eemail,euser.epass], (results) => {
            if(results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
}