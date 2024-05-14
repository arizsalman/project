// var expense_html = document.getElementById('expense')
// var calculate_html = document.getElementById('calcualteExpense')
// var salary_html = document.getElementById('salary')

// var total_income = document.getElementById('total_income')
// var total_expense = document.getElementById('total_expense')
// var total_saving = document.getElementById('total_saving')

// var expense = 0
// var salary = 0
// var savings = 0;

// function calcualteExpense() {
//     expense = expense_html.value + expense;
//     savings = salary - expense

//     total_expense.innerText = expense
//     total_saving.innerText = savings
// }
// function salaryFunction() {
//     expense = expense_html.value + salary;
//     savings = salary - expense
//     expense.innertext = expense;

// }


var amoumt_js=document.getElementById("amount");
var income_js=document.getElementById("income");
var expense_js=document.getElementById("calExpense");
var totalIncome =150000;
var expense=0;
var saving=0;
var totalExpense=document.getElementById("totalExpense");
var totalSaving=document.getElementById("totalSaving");

function calExpense() {
    amoumt=amoumt_js.value+expense
    totalIncome=saving-expense;
    totalExpense.innerText=expense;
    totalSaving.innerText=saving;
    
}
function income(){
    amoumt=amoumt_js.value+expense
    totalIncome=saving-expense;
    expense.innerText=expense;
}