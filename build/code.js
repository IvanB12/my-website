
var presentations = Array.from(document.querySelectorAll('.overlay'))
var buttons = document.querySelectorAll('.button-projects-on')
//var buttons2 = document.querySelectorAll('.button-projects-off')
console.log(buttons)

buttons.forEach(item => {
    item.addEventListener('click', event => {
        var itemTarg = event.target.name
        //console.log(itemTarg)

        presentations[itemTarg].classList.toggle("visible");

    })
})


//https:www.codewars.com/users/IvanB12





/*
buttons2.forEach(item => {
    item.addEventListener('click', event => {
        var itemTarg = event.target.name
        // presentations[itemTarg].classList.toggle("visible", true);
        //presentations[itemTarg].classList.toggle("overlay");
        presentations[itemTarg].classList.toggle("visible");


    })
})
*/


/*var presentations = document.querySelectorAll('.overlay')
console.log(presentations)

var buttons = document.querySelectorAll('.button-projects-on');
var buttons2 = document.querySelectorAll('.button-projects-off')
buttons.forEach(item => item.addEventListener('click', function (event) {
    var targetItem = event.target.name;
    console.log(targetItem)
}))*/