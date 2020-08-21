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
  "Workout Tracker",
  "An application for tracking your daily workouts and fitness progress. Built using Express, MongoDB, and Mongoose.",
  workoutPic,
  "https://frozen-scrubland-57003.herokuapp.com/",
  "https://github.com/karpagasathya/workout_tracker"
);

const employeeDirCard = new ProjectCard(
  "Employee Directory",
  "An application for accessing employee information - built with React.",
  employeeDirPic,
  "https://immense-dusk-32798.herokuapp.com/",
  "https://github.com/karpagasathya/react_employee_directory"
);

const burgerCard = new ProjectCard(
  "Eat-Da-Burger",
  "This Application is a burger logger in which user can create their own new burgers to devour. Built with Node.js,Express,Handlebars,MySql, ORM(Object Relational Mapping) and MVC pattern.",
  burgerPic,
  "https://rocky-meadow-23943.herokuapp.com",
  "https://github.com/karpagasathya/MVC_Eat_Da_Burger"
);

const booksCard = new ProjectCard(
  "Buy the Book",
  "This Application is an online Bookstore to buy some books from six different genres. Built with Node.js,Express server,Handlebars,Sequelize and MVC pattern.",
  booksPic,
  "https://buy-the-book.herokuapp.com",
  "https://github.com/karpagasathya/buy_the_book"
);

const todoCard = new ProjectCard(
  "Inspire!",
  "This Application is a Inspirational Todo list which displays current Weather, date and time. Built with HTML5, CSS/Bootstrap, JavaScript/jQuery, and APIs. ",
  todoPic,
  "https://karpagasathya.github.io/Inspirational_todo/",
  "https://github.com/karpagasathya/Inspirational_todo"
);

const budgetCard = new ProjectCard(
  "PWA Budget Tracker",
  "A progressive web application that utilizes Service Workers, the Cache and IndexedDB to allow the user to track their budget transactions online and offline. ",
  pwaPic,
  "https://infinite-harbor-36022.herokuapp.com/",
  "https://github.com/karpagasathya/pwa_budget_tracker"
);

const weatherCard = new ProjectCard(
  "Weather Dashboard",
  "This Application is a Weather Dashboard which displays certain city's current weather and 5-day forecast. Built with HTML5, CSS/Bootstrap, JavaScript/jQuery, and APIs. ",
  weatherPic,
  "https://karpagasathya.github.io/weather_dashboard/",
  "https://github.com/karpagasathya/weather_dashboard"
);

const noteCard = new ProjectCard(
  "Note Taker",
  "A full-stack application that allows the user to track their daily workouts ",
  notePic,
  "https://peaceful-meadow-49323.herokuapp.com/",
  "https://github.com/karpagasathya/note_taker"
);





let portfolioData = [workoutCard, employeeDirCard, burgerCard, booksCard, todoCard, weatherCard,budgetCard,noteCard];

export default portfolioData;
