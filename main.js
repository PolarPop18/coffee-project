"use strict";



var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
    {id: theThing1, name: theThing2, roast: theThing3}
];



function displayCoffees() {
    var html = '';
    coffees.forEach(function (coffees) {
        html += "<div class='col-lg-5 d-inline flex pb-4 mr-2'><h3>" + coffees.name + "</h3><p>" + coffees.roast + "</p></div>";
    });
    document.getElementById('coffeeType').innerHTML = html;
}


displayCoffees();

var target = document.getElementById('roast-selection');
var coffeeName = document.getElementById('coffeeName');
var x = "";
var y = "";
var html = "";


target.addEventListener("change", function () {

    html = '';
    coffees.forEach(function (coffees) {
        x = document.getElementById("roast-selection").value;

        if (x === coffees.roast) {

            html += "<div class='col-lg-5 d-inline flex pb-4 mr-2'><h3>" + coffees.name + "</h3><p>" + coffees.roast + "</p></div>";
        }
        document.getElementById('coffeeType').innerHTML = html;
    })
});

coffeeName.addEventListener("input", function () {
    html = '';
    y = document.getElementById("coffeeName").value.toLowerCase();

    coffees.forEach(function (coffees) {
        if (coffees.name.toLowerCase().includes(y)) {
            if (x === coffees.roast) {

                localStorage.setItem("data", y);

                html += "<div class='col-lg-5 d-inline flex pb-4 mr-2'><h3>" + coffees.name + "</h3><p>" + coffees.roast + "</p></div>";
            }
        }
    });
    document.getElementById('coffeeType').innerHTML = html;
});

var addName= document.getElementById("addNew");

function addCoffee(){

    event.preventDefault();
    var coffeeName= document.getElementById("addName").value;
    var roastNew = document.getElementById('RoastAdd').value;
    var newCoffee= {id:coffees.length + 1 , name: coffeeName, roast: roastNew};

    coffees.push(newCoffee);
   displayCoffees();


}
addName.addEventListener('click',addCoffee);

document.getElementById("coffeeName").placeholder = thing;








