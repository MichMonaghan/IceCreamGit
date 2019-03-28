/* Navbar transparent to solid */

$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});


/* Close mobile Nav on Click - it will close the toggle navigation if open */
/*  */

$(document).ready(function() {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  })
})

/* Smooth scrolling to links, 800ms scroll speed */

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate( {
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    } //End if statement
  });
});

/* Bouncing down arrow, target the arrow class, want to change the css opacity */
/* as we scroll we want it to fade out altogether - at 250 pixels up the page */

$(document).ready(function() {
  $(window).scroll(function() {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});

/* Owl Carousel - js */

$(document).ready(function() {
  $("#team-slider").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      //576: {
      //  items: 2
      // }
      // 768: {
        // items: 3
      // }
    }
  }
);
});

/* Skills Counter */

$(document).ready(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1800
  });
});

/* Clients carousel js */

$(document).ready(function() {
  $("#clients-slider").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:1700,
    loop:true,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },

    }
  }
);
});


/* Top Scroll js */

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});

//Optional Refresh Page at top of document load instead of at # hash

$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 0);
});


//when you select the cart info button
//you want to see the cart
//we are using the classList property and the toggle method 
//everytime we are clicking the button we are adding this class of show-cart
//and once we click button again we remove the class of show-cart

document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});

// Multiple items on Bootstrap carousel - This is for details page customers who purchased this, also purchased this

$('#purchaseCarousel').carousel({
  interval: 3000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


