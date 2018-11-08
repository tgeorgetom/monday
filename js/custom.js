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
          scrollTop: $(hash).offset().top
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


var regex = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
        '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );

$('.email-wrapper input').on('keyup', function(e) {
    $(this).parent().toggleClass('success', regex.test($(this).val()));
});


$("#topForm").validate({
  rules: {
      email: "required email",
  },

  submitHandler: function(form) {
    $(form).submit();
  }
  
 });

$("#sayHello").validate({
  rules: {
      firstname: "required",
      lastname: "required",
      email: "required email",
      telephone: {
            required: true,
            minlength: 10,
            maxlength: 10
        }
    },
    messages: {
      firstname: "Enter your firstname",
      lastname: "Enter your lastname",
      email: {
        required: "Enter your Email",
        email: "Please enter a valid email address.",
      },
      telephone: "Enter valid phone number",
      message: "Enter your message"
    },
  submitHandler: function(form) {
    $(form).submit();
  }
 });