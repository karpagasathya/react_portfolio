import burgerPic from "../assets/images/portfolio/burger.jpg";
import booksPic from "../assets/images/portfolio/books.jpg";
import workoutPic from "../assets/images/portfolio/fitness.jpg";
import employeeDirPic from "../assets/images/portfolio/employee.png";
import todoPic from "../assets/images/portfolio/todo-list.jpg";
import pwaPic from "../assets/images/portfolio/pwa.png";
import weatherPic from "../assets/images/portfolio/weather.jpg";
import notePic from "../assets/images/portfolio/note.png";

function ProjectCard(title, about, imgURL, siteURL, repoURL) {
  this.title = title;
  this.about = about;
  this.imgURL = imgURL;
  this.siteURL = siteURL;
  this.repoURL = repoURL;
}

const workoutCard = new ProjectCard(
  "Fitness Tracker",
  "An application that allows the user to track their daily workouts. ",
  workoutPic,
  "https://frozen-scrubland-57003.herokuapp.com/",
  "https://github.com/karpagasathya/workout_tracker"
);

const employeeDirCard = new ProjectCard(
  "Employee Directory",
  "An application, built with React, that allows the user to have quick and ",
  employeeDirPic,
  "https://immense-dusk-32798.herokuapp.com/",
  "https://github.com/karpagasathya/react_employee_directory"
);

const burgerCard = new ProjectCard(
  "Eat-Da-Burger",
  "A full-stack, restaurant application that allows the user to input",
  burgerPic,
  "https://rocky-meadow-23943.herokuapp.com",
  "https://github.com/karpagasathya/MVC_Eat_Da_Burger"
);

const booksCard = new ProjectCard(
  "Buy the Book",
  "A full-stack application that allows the user to track their daily workouts ",
  booksPic,
  "https://buy-the-book.herokuapp.com",
  "https://github.com/karpagasathya/buy_the_book"
);

const todoCard = new ProjectCard(
  "Inspire!",
  "A full-stack application that allows the user to track their daily workouts ",
  todoPic,
  "https://karpagasathya.github.io/Inspirational_todo/",
  "https://github.com/karpagasathya/Inspirational_todo"
);

const budgetCard = new ProjectCard(
  "PWA Budget Tracker",
  "A full-stack application that allows the user to track their daily workouts ",
  pwaPic,
  "https://infinite-harbor-36022.herokuapp.com/",
  "https://github.com/karpagasathya/pwa_budget_tracker"
);

const weatherCard = new ProjectCard(
  "Weather Dashboard",
  "A full-stack application that allows the user to track their daily workouts ",
  weatherPic,
  "https://karpagasathya.github.io/weather_dashboard/",
  "https://github.com/karpagasathya/weather_dashboard"
);

const noteCard = new ProjectCard(
  "Weather Dashboard",
  "A full-stack application that allows the user to track their daily workouts ",
  notePic,
  "https://peaceful-meadow-49323.herokuapp.com/",
  "https://github.com/karpagasathya/note_taker"
);

// const burgerCard = new ProjectCard(
//   "Eat-Da-Burger",
//   "A full-stack, restaurant application that allows the user to input, devour and delete tasty burgers from a MySQL database. Eat-Da-Burger built using MySQL, Node, Express, Handlebars and a homemade ORM.",
//   burgerPic,
//   "https://rocky-meadow-23943.herokuapp.com",
//   "https://github.com/karpagasathya/MVC_Eat_Da_Burger"
// );

// const fitnessCard = new ProjectCard(
//   "Fitness Tracker",
//   "A full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
//   fitnessPic,
//   "",
//   ""
// );

// const employeeDirCard = new ProjectCard(
//   "Employee Directory",
//   "An application, built with React, that allows the user to have quick and easy access to employee information. User may filter and search employees by name, and sort by name, email, DOB, and phone number.",
//   employeeDirPic,
//   "",
//   ""
// );

// const booksCard = new ProjectCard(
//   "Buy the Book",
//   "A full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
//   booksPic,
//   "",
//   ""
// );

// const todoCard = new ProjectCard(
//   "Buy the Book",
//   "A full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
//   booksPic,
//   "",
//   ""
// );

let portfolioData = [workoutCard, employeeDirCard, burgerCard, booksCard, todoCard, weatherCard,budgetCard,noteCard];

export default portfolioData;
