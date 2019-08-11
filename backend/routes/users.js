const router = require('express').Router();
let User = require('../models/user.model');

// find all the user in the DB
router.route('/').get((req, res) => {
    User.find()
        .then(users => res, json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});


router.route('/add').post((req, res) => {
    // get the username from the frontend
    const username = req.body.username;

    // create a new instance of the user 
    const newUser = new User({ username });

    // save new user to the DB
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// export the routes
module.exports = router;