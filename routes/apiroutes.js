const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});


// router.get("/api/workouts/range",

// )

// router.post("/api/workouts", (req, res)

// )


// router.put("/api/workouts/:id",

// )


module.exports = router;