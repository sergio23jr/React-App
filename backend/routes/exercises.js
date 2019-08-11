const router = require('express').Router();
const Exercise = require('../models/exercise.model');

// Find all exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/add').post((req, res) => {

    // collect all data from the frontend
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    // create the new exersice
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    // Save new exercise to the DB
    newExercise.save()
        .then(() => res.json('Exercise Added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// find all information for that exercise
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Exercise.findById(req.params.id)
        .then(() => res.json('Exercise Deleted!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    // find the exercise by the 
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            // save the updated exercise
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));



});

module.exports = router;