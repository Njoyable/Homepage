// Define an array to store restaurant names
let restaurants = ["Katzentempel", "Vietal"];

// Define a function to add a new restaurant to the list
function addNewRestaurant() {
  let newRestaurantName = document.getElementById("new-restaurant-input").value;
  if (newRestaurantName !== "") {
    restaurants.push(newRestaurantName);
    document.getElementById("restaurant-list").innerHTML += "<li>" + newRestaurantName + "</li>";
    document.getElementById("new-restaurant-input").value = "";
  }
}

// Define a function to select a random restaurant from the list
function selectRandomRestaurant() {
  let numRestaurants = restaurants.length;
  if (numRestaurants > 0) {
    let randomIndex = Math.floor(Math.random() * numRestaurants);
    alert("You should try " + restaurants[randomIndex] + "!");
  } else {
    alert("You have no restaurants in your list.");
  }
}

// Define an array to store expense entries
let expenses = [];

// Define a function to add a new expense entry to the table
function addNewExpense() {
  let expenseName = document.getElementById("expense-name-input").value;
  let expenseMoney = document.getElementById("expense-money-input").value;
  let expenseDesc = document.getElementById("expense-desc-input").value;
  if (expenseName !== "" && expenseMoney !== "" && expenseDesc !== "") {
    let expenseEntry = {
      name: expenseName,
      money: expenseMoney,
      desc: expenseDesc
    };
    expenses.push(expenseEntry);
    let tableRow = "<tr><td>" + expenseName + "</td><td>" + expenseMoney + "</td><td>" + expenseDesc + "</td><td><button onclick=\"removeExpense(this)\">Remove</button></td></tr>";
    document.getElementById("expense-table-body").innerHTML += tableRow;
    document.getElementById("expense-name-input").value = "";
    document.getElementById
