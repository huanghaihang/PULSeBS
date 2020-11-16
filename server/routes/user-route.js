// Import express
const express = require("express");

// Import books-controller
const userRoutes = require("./../controllers/user-controller");

// Create router
const router = express.Router();

router.get("/", userRoutes.get);
//login API
router.post('/login', function(req, res, next){
    var data = {
        username: req.body.username,
        password: req.body.password
    }
    module.connect(function(db){
        db.collection('user').find(data).toArray(function(err, docs){
            if(err){
                res.redirect('/login')
            }else{
                if(docs.length>0){
                    res.redirect('/')
                }else{
                    res.redirect('login')
                }
            }
        })
    })
 
})
// Export router
module.exports = router;

