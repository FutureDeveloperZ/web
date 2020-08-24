// var typed = new Typed('#typed', {
//     // Waits 1000ms after typing "First"
//     strings: ['Barack Hussein Obama II', 'Barrack Obama', 'Obama',"Barry O'Bomber"],
//     smartBackspace: true,
//     shuffle: true,
//     loop: true,
//     typeSpeed: 30
//   });

//   (function() {
//     var burger = document.querySelector('.burger');
//     var menu = document.querySelector('#'+burger.dataset.target);
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navbarstart = $(".navbar-start");
    $nav.toggleClass('is-fixed-top', $(this).scrollTop() > $nav.height());
	});
});