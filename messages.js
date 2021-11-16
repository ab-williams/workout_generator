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
    const randomIndex = Math.floor(Math.random() * exercises.length);
    return exercises[randomIndex];
  },

  generateRandomWorkout() {
    const girl = this.getRandomExerciseFromWorkouts("girls");
    const lift = this.getRandomExerciseFromWorkouts("lifts");
    const movement = this.getRandomExerciseFromWorkouts("movements");

    return `Your main workout will be to complete the girl WOD named '${girl.name}'. 
The olympic lift you will focus on today is '${lift.name}'. 
As part of your warmup, you will complete 100 reps of '${movement.name}'`;
  },
};

//Adding of girls, movements and lifts to workout randomiser
crossFit.addExercise("girls", "Fran");
crossFit.addExercise("girls", "Amanda");
crossFit.addExercise("girls", "Eva");
crossFit.addExercise("girls", "Kelly");
crossFit.addExercise("girls", "Angie");
crossFit.addExercise("girls", "Linda");
crossFit.addExercise("girls", "Annie");
crossFit.addExercise("girls", "Grace");
crossFit.addExercise("girls", "Lynne");
crossFit.addExercise("girls", "Barbara");
crossFit.addExercise("girls", "Gwen");
crossFit.addExercise("girls", "Maggie");
crossFit.addExercise("girls", "Candy");
crossFit.addExercise("girls", "Helen");
crossFit.addExercise("girls", "Marguerita");
crossFit.addExercise("girls", "Chelsea");
crossFit.addExercise("girls", "Hope");
crossFit.addExercise("girls", "Mary");
crossFit.addExercise("girls", "Cindy");
crossFit.addExercise("girls", "Isabel");
crossFit.addExercise("girls", "Megan");
crossFit.addExercise("girls", "Diane");
crossFit.addExercise("girls", "Jackie");
crossFit.addExercise("girls", "Nancy");
crossFit.addExercise("girls", "Elizabeth");
crossFit.addExercise("girls", "Karen");
crossFit.addExercise("girls", "Nicole");

crossFit.addExercise("lifts", "Power Clean");
crossFit.addExercise("lifts", "Front Squat");
crossFit.addExercise("lifts", "Squat Clean");
crossFit.addExercise("lifts", "Push Jerk");
crossFit.addExercise("lifts", "Power Snatch");
crossFit.addExercise("lifts", "Squat Snatch");

crossFit.addExercise("movements", "Push Ups");
crossFit.addExercise("movements", "Burpees");
crossFit.addExercise("movements", "Alternating Jumping Lunges");
crossFit.addExercise("movements", "Sit Ups");
crossFit.addExercise("movements", "Air Squats");
crossFit.addExercise("movements", "Pull Ups");
crossFit.addExercise("movements", "Muscle Ups");
crossFit.addExercise("movements", "Wall Balls");
crossFit.addExercise("movements", "GHD Sit Ups");
crossFit.addExercise("movements", "Man Makers");
crossFit.addExercise("movements", "Dumbell Snatches");
crossFit.addExercise("movements", "Toes-to-bar");
crossFit.addExercise("movements", "Chest-to-bar");
crossFit.addExercise("movements", "Kettlebell Swings");
crossFit.addExercise("movements", "Alternating Squat Thrusts");
crossFit.addExercise("movements", "Double Unders");
crossFit.addExercise("movements", "Calorie Row");
crossFit.addExercise("movements", "Calorie Assualt Bike");

//Print list of all workouts
//console.log(crossFit.workouts);

console.log(crossFit.generateRandomWorkout());
