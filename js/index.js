// SLIDER
var swiper = new Swiper('.swiper-container-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination-slider',   
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  // CLIENT SAY
  var swiper = new Swiper('.swiper-container-client', {
    loop: true,
    navigation: {
      nextEl: '.button-next-client',
      prevEl: '.button-prev-client',
    },
  });
  // BRAND
  var swiper = new Swiper('.swiper-container-brand', {
    slidesPerView: 3,
    // spaceBetween: 30,
    freeMode: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  });
  // COLLECTION
  var swiper = new Swiper('.slider-collection', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop:true,
    fadeEffect: {
      crossFade: false
    },
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.collection-button-next',
      prevEl: '.collection-button-prev',
    },
});
// CATEGORY
var swiper = new Swiper('.slider-categories', {
  slidesPerView: 4,
  spaceBetween: 50,
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    425:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
    },
    1024:{
      slidesPerView: 4,
    },
  }
});

 // RESIZE MENU
 $(window).resize(function () {
  var left = $(".navbar").offset().left;
  if ($(window).width() <= 1268) {
    $(".navbar-nav").css({ left: -left });
  } else {
    $(".navbar-nav").css({ left: "" });
  }
});


// OFFSET DROP DOWN MENU
// on load sau khi load xong html,css sẽ chạy js
$(window).on("load", function () {
  var left = $(".navbar").offset().left;
  if ($(window).width() <= 1268) {
    $(".navbar-nav").css({ left: -left });
  } else {
    $(".navbar-nav").css({ left: "" });
  }
});


$(document).ready(function() {

  // MASONRY
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  // SCROLL MENU TOP
  $(window).on("scroll", function () {
    var scroll_menu = $(window).scrollTop();
    if (scroll_menu > 500) {
      $("#main-header").addClass("fixed");
    }
    if (scroll_menu > 700) {
      $("#main-header").addClass("active");
    }
    else if (scroll_menu < 500) {
      $("#main-header").removeClass("fixed");
    }
    else {
      $("#main-header").removeClass("active");      
    }
    
    if (scroll_menu > 1200) {
      $(".back-to-top").addClass("show-menu");
    } else {
      $(".back-to-top").removeClass("show-menu");
    }
  });

  // BACK TO TOP
  $(".back-to-top").on("click",function () {
    $("html,body").animate({ scrollTop: 0 }, 1500);
  });

  // SHOW SEARCH
  function search() {
    $(".search-menu").on("click", function () {
      $(".main-search").show();
      $(".main-search").css({
        top: "0",
        transition: "1s",
        visibility: "visible",
      });
    });

    $("#close").on("click", function () {
      $(".main-search").css("top", "1200px");
    });
  }
  $(document).ready(function () {
    search();
  });

 // DROP DOWN MENU BARS
 $(".drop-down-menu").on("click",function () {
  $(this).parents("#main-header").find(".navbar-nav").slideToggle();
  $(this).toggleClass("active");
});

  // SLIDE UP, DOWN MENU
  $(".drop-down-all").on("click",function () {
    $(this).parents(".navbar-nav").find(">.nav-item").not($(this).parents(".nav-item")).find(".general-sub-menu").slideUp();
    $(this).parent().next().slideToggle();
    $(this).toggleClass("active");
  });

});

  // COUNT DOWN
  // var countDownDate = new Date("Jan 5, 2021 24:00:00").getTime();

  // var x = setInterval(function () {
  //   var now = new Date().getTime();
  
  //   var distance = countDownDate - now;
  
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //   // document.getElementById("countdown").innerHTML = hours + " "
  //   // + minutes + " " + seconds;
  //   document.getElementById("text-hours").innerHTML = hours;
  //   document.getElementById("text-minutes").innerHTML = minutes;
  //   document.getElementById("text-second").innerHTML = seconds;
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("text-hours").innerHTML = "EXPIRED";
  //     document.getElementById("text-minutes").innerHTML = "EXPIRED";
  //     document.getElementById("text-second").innerHTML = "EXPIRED";
  //     // document.getElementById("countdown").innerHTML = "EXPIRED";
  //   }
  // }, 1000);