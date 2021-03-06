"use strict";

var localCount = 0;


    function retrieve() {
        var theCount = localStorage.getItem("count");

        for (var i = 0; i < theCount; i++) {
            for (var j = 0; j < 3; j++) {
            }
            var cofid = localStorage.getItem("item" + i);
            i++;
            var cofname = localStorage.getItem("item" + i);
            i++;
            var cofroast = localStorage.getItem("item" + i);

            var newCoffee = {id: cofid, name: cofname, roast: cofroast};

            coffees.push(newCoffee);
        }


    }
}

    function setLocal() {
        coffees.forEach(function () {
            var counter1 = localCount + 1;
            var counter2 = localCount + 2;

            localStorage.setItem("item" + localCount, coffees.id);
            localStorage.setItem("item" + counter1, coffees.name);
            localStorage.setItem("item" + counter2, coffees.roast);
            localCount++;


        });
        localStorage.setItem("count", localCount);
    }
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
    {id: 14, name: 'French', roast: 'dark'}
];


//the function that originally shows the list
function displayCoffees() {
    var html = '';
    coffees.forEach(function (coffees) {
        html += "<div class='col-lg-5 d-inline flex pb-4 mr-2'><h3>" + coffees.name + "</h3><p>" + coffees.roast + "</p></div>";
    });
    document.getElementById('coffeeType').innerHTML = html;
}

displayCoffees();

//Variable block
var addName= document.getElementById("addNew");
var target = document.getElementById('roast-selection');
var coffeeName = document.getElementById('coffeeName');
var x = "";
var y = "";
var html = "";
var newCoffee = "";

//the function that only shows the coffee based on the type in the selector
target.addEventListener("change", function () {
    html = '';
    coffees.forEach(function (coffees) {
        x = document.getElementById("roast-selection").value;

        if (x === 'all' || x === coffees.roast) {

            html += "<div class='col-lg-5 d-inline flex pb-4 mr-2'><h3>" + coffees.name + "</h3><p>" + coffees.roast + "</p></div>";
        }
        document.getElementById('coffeeType').innerHTML = html;
    })
});





//the function that is the small search engine
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



//the function that add coffees to the array and list
function addCoffee(){
    event.preventDefault();
    var coffeeName= document.getElementById("addName").value;
    var roastNew = document.getElementById('RoastAdd').value;
    var newCoffee= {id:coffees.length + 1 , name: coffeeName, roast: roastNew};

    coffees.push(newCoffee);
    displayCoffees();
    setlocal();
}
addName.addEventListener('click',addCoffee);




