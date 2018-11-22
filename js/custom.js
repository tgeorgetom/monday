// Dynamic background - Removed for now



// var colors = ['#C9DDE5','#F9CB53', '#F4B266', '#CB8589', '#48B8D0', '#82968C'];

// var elementExists = document.getElementById("hero-banner-content");
// if (typeof(elementExists) != 'undefined' && elementExists != null){

//   document.getElementById('hero-banner-content').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

// }


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
  $(".hero-down-arrow, .about-link").on('click', function(event) {

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

  if($("body").hasClass("Home-page")){

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
    // $(form).submit();
  }
  
 });

$("#sayHello").validate({
  rules: {
      firstname: "required",
      lastname: "required",
      email: "required email",
      telephone: {
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
    }
 });



$(document).ready(function () {
    // Read the cookie and if it's defined scroll to id
    var scroll = $.cookie('scroll');
    if(scroll){
        scrollToID(scroll, 1000);
        $.removeCookie('scroll');
    }

    // Handle event onclick, setting the cookie when the href != #
    $('.navbar a').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');
        var href = $(this).attr('href');
        if(href === '#'){
            scrollToID(id, 1000);
        }else{
            $.cookie('scroll', id);
            window.location.href = href;
        }
    });

    // scrollToID function
    function scrollToID(id, speed) {
        var offSet = 70;
        var obj = $('#' + id).offset();
        var targetOffset = obj.top - offSet;
        $('html,body').animate({ scrollTop: targetOffset }, speed);
    }

    $(".chat-us").click(function(){
      console.log('deed');
      $('#drift-widget').trigger("click");
    }); 

});


$("#sayHello").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        console.log("dwd");
    } else {
        // everything looks good!
        console.log("on");
        submitForm();
        event.preventDefault();
        
    }
});

$(".google-sprint-submit").on("click", function (event) {
  topSubmitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var fullname = fname + " " + lname;
    var email = $("#email").val();
    var telephone = $("#telephone").val();
    var message = $("#message").val();
    console.log(fname);
 
    $.ajax({
        type: "POST",
        url: "php/form-submit.php",
        data: "name=" + fullname + "&email=" + email + "&message=" + message + "&phone=" + telephone,
        success : function(text){
            console.log(text);

            if (text == "success"){
                $(".bottom-form-success").fadeIn();
                setTimeout(function(){
                    $('#fname, #lname, #email, #telephone, #message').val("");
                    $(".bottom-form-success").fadeOut();
                }, 3000);
            }
        }
    });
}

function topSubmitForm(){
    // Initiate Variables With Form Content
    var email = $("#email1").val();
    var checkbox = $(".form-check-input:checked").val();
    console.log(checkbox);
 
    $.ajax({
        type: "POST",
        url: "php/form-submit-top.php",
        data: "email=" + email + "&checkbox=" + checkbox,
        success : function(text){
            console.log(text);

            if (text == "success"){
                $(".google-sprint-submit").addClass('success');
                $(".bottom-form-success").fadeIn();
                setTimeout(function(){ 
                    $(".google-sprint-submit, .email-wrapper").removeClass('success');
                    $('#email1').val("");
                    $(".form-check-input").prop("checked", false);
                    $(".bottom-form-success").fadeOut();
                }, 3000);
            }
        }
    });
}


// PreLoader



(function() {
  function id(v) {
    return document.getElementById(v);
  }
  function loadbar() {
    var ovrl = id("overlay"),
      prog = id("progress"),
      stat = id("progstat"),
      img = document.images,
      c = 0;
    tot = img.length;

    function imgLoaded() {
      c += 1;
      var perc = (((100 / tot) * c) << 0) + "%";
      prog.style.width = perc;
      stat.innerHTML = "Loading " + perc;
      if (c === tot) return doneLoading();
    }
    function doneLoading() {
      // ovrl.style.opacity = 0;
      setTimeout(function() {
        ovrl.classList.add("hideOverlay");
        if($('div').hasClass('hero-banner-content')){
          $('.hero-banner-content').addClass("init-animate");  
        }
      }, 1200);
    }
    for (var i = 0; i < tot; i++) {
      var tImg = new Image();
      tImg.onload = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src = img[i].src;
    }
  }
  document.addEventListener("DOMContentLoaded", loadbar, false);
})();


