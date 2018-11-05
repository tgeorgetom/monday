// Dynamic background

var colors = ['#C9DDE5','#F9CB53', '#F4B266', '#CB8589', '#48B8D0', '#82968C'];

document.getElementById('hero-banner-content').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

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
  $(".hero-down-arrow").on('click', function(event) {

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

