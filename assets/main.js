document.addEventListener('DOMContentLoaded', () => {

    const navburg = document.querySelector('.navbar-burger');
    const menu = document.querySelector(".navbar-menu");
    navburg.addEventListener('click', () => {
	navburg.classList.toggle("is-active");
	menu.classList.toggle("is-active");
    });
 

    // Add a click event on each of them
//    $navbarBurgers.forEach( el => {
//      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
//        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
 //       el.classList.toggle('is-active');
  //      $target.classList.toggle('is-active');

   

});
