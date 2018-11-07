// Dynamic background


var colors = ['#C9DDE5','#F9CB53', '#F4B266', '#CB8589', '#48B8D0', '#82968C'];

var elementExists = document.getElementById("hero-banner-content");

if (typeof(elementExists) != 'undefined' && elementExists != null){

  document.getElementById('hero-banner-content').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}

// Parallax Init

var parallax = new Parallax('.parallax', {})
parallax.on('image:loaded', function() {
  console.log(arguments)
})
parallax.on('images:loaded', function() {
  console.log(arguments)
})
parallax.init();


// Scroll section


$(document).ready(function(){
  $(".hero-down-arrow, .nav-link").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top - 94
        }, 1000,  function(){
        window.location.hash = hash;
      });
    }
  });
});


// Fixed Nav

$(window).bind('scroll', function () {
  var about_us = $('.about-us-wrapper').offset().top;

  if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed-navbar');
  } else {
      $('.navbar').removeClass('fixed-navbar');
  }

  if($(window).scrollTop() > about_us ){
    $('.navbar').addClass('fade');
  } else {
    $('.navbar').removeClass('fade');
  }
});



$("#myform").validate({
  success: function(label) {
      label
        .text('OK!').addClass('valid')
        .parent('.email-wrapper').addClass('success');
    },
  submitHandler: function(form) {
    $(form).submit();
  }
 });



$("#sayHello").validate({
  submitHandler: function(form) {
    $(form).submit();
  }
 });