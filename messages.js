//PROJECT PLAN
const crossFit = {
  _workouts: {
    girls: [],
    lifts: [],
    movements: [],
  },
  //Defining getters within the crossfit library
  get girls() {
    return this._workouts.girls;
  },
  get lifts() {
    return this._workouts.lifts;
  },
  get movements() {
    return this._workouts.movements;
  },
  //Defining setters within the crossfit library
  set girls(girlsIn) {
    this._workouts.girls = girlsIn;
  },
  set lifts(liftsIn) {
    this._workouts.lifts = liftsIn;
  },
  set movements(movementsIn) {
    this._workouts.movements = movementsIn;
  },
  //retreiving all of the crossfit library
  get workouts() {
    return {
      girls: this.girls,
      lifts: this.lifts,
      movements: this.movements,
    };
  },

  //adding exercise to crossfit library (There is scope to add more information about each
  //workout here) (think about whether this can be detected automatically)
  addExercise(exerciseType, exerciseName) {
    const exercise = {
      name: exerciseName,
    };
    // this pushes the new exercise to the crossfit library and files it by the
    //exercise type (e.g. girls,lifts,movements )
    const type = this._workouts[exerciseType];
    if (type) {
      return type.push(exercise);
    } else {
      console.error("this type does not exist");
    }
  },

  //retrieve a random exercises from the crossfit library
  getRandomExerciseFromWorkouts(exerciseType) {
    const exercises = this._workouts[exerciseType];
    //randomise
    const randomIndex = Math.floor(Math.random() * (exercises.length + 1));
    return exercises[randomIndex];
  },

  generateRandomWorkout() {
    const girl = this.getRandomExerciseFromWorkouts("girls");
    const lift = this.getRandomExerciseFromWorkouts("lifts");
    const movement = this.getRandomExerciseFromWorkouts("movements");

    return `Your main workout will be to complete the girl WOD named '${girl}'. The olympic lift you will focus on today is '${lift}'. As part of your warmup, you will complete 100 reps of '${movement}'....GO SMASH IT!'`;
  },
};

crossFit.addExercise("girls", "Fran");
crossFit.addExercise("lifts", "Snatch");
crossFit.addExercise("movements", "Press-Ups");

console.log(crossFit.workouts);
