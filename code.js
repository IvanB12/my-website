
var presentations = document.querySelectorAll('.overlay')
var buttons = document.querySelectorAll('.button-projects-on')
var hamburger = document.querySelector('.hamburger');
var hamburgerMenu = document.querySelector('#mobile-menu')
var links = document.querySelectorAll('a')
var innerLinks = document.querySelectorAll('.smoothscroll')
links.forEach(item => item.target = '_blank')
innerLinks.forEach(item => item.target = '_self')
//var buttons2 = document.querySelectorAll('.button-projects-off')
//console.log(buttons)

//buttons.forEach(item => item.innerHTML = 'Show info')
buttons.forEach(item => {
    item.addEventListener('click', event => {
        var itemTarg = event.target.name
        buttons[itemTarg].innerHTML.includes('Show') ? buttons[itemTarg].innerHTML = 'Hide info' : buttons[itemTarg].innerHTML = 'Show info';
        presentations[itemTarg].classList.toggle("visible");
        console.log(buttons[itemTarg].innerHTML)
    })
})

hamburger.addEventListener('click', toggle)
// hamburger.className === "is-active" ? hamburgerMenu.style.display = 'none' : hamburgerMenu.style.display = 'inline-block'
function toggle() {
    hamburger.classList.toggle("is-active");
    if (hamburgerMenu.style.display === 'none') {
        console.log(hamburgerMenu.style.display)
        hamburgerMenu.style.display = 'inline-block'
        console.log(hamburgerMenu.style.display)
    }
    else {
        console.log(hamburgerMenu.style.display + ' from else block')
        hamburgerMenu.style.display = 'none'
        console.log(hamburgerMenu.style.display + ' from else block')
    }

}



//https:www.codewars.com/users/IvanB12






/* general settings
font bigger
especially on area where education and experience
on skills biger name of their
some animations for mobile version(icons, links, navbar, download). not hover.
everything is bigger/
/*
profile-pic
less-size
probably move a bit to the right
div with text put extra-brake
*/
/*icons on tope to center
animation of pop-ups of project to center and everything there bigger.
animation going out of the site and cause white strip on the right side.
pay attention if header is bigger (not nessesary if hamburger)*/

/*hamburger to header and probably */

/* 1) fixed changing button sign from "show info" to "hide info", on click
2) changed size of profile-pic for mobile devices*/
