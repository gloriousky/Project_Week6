"use strict";

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
  });
  $('.js-click').click(function (e) {
    e.preventDefault();

    if ($('.js-input').val() == '') {
      alert('請填寫您的E-mail');
      $('.js-input').addClass('is-invalid');
      $('.js-input').focus();
      $('.js-subscribeform').addClass('was-validated');
    } else {
      alert('感謝您的訂閱');
      $('.js-input').val('');
      $('.js-input').removeClass('is-invalid');
      $('.js-subscribeform').removeClass('was-validated');
    }
  });
  $('.js-login-click').click(function (e) {
    e.preventDefault();

    if ($('.js-account').val() == '' || $('.js-password').val() == '') {
      alert('請輸入您的帳號密碼');
      $('.js-password').addClass('is-invalid');
      $('.js-account').addClass('is-invalid');
      $('.js-login-form').addClass('was-validated');

      if ($('.js-account').val() == '') {
        $('.js-account').focus();
      } else {
        $('.js-password').focus();
      }
    } else {
      window.cell.href = 'https://gloriousky.github.io/Project_Week6/member.html';
      $('.js-password').removeClass('is-invalid');
      $('.js-account').val('');
      $('.js-password').val('');
      $('.js-account').removeClass('is-invalid');
      $('.js-login-form').removeClass('was-validated');
    }
  });
  $('.js-password-click').click(function (e) {
    e.preventDefault();

    if ($('.js-old').val() == '' || $('.js-new').val() == '' || $('.js-check').val() == '') {
      alert('請輸入原有密碼和欲更改的密碼');
      $('.js-old').addClass('is-invalid');
      $('.js-new').addClass('is-invalid');
      $('.js-check').addClass('is-invalid');
      $('.js-password-form').addClass('was-validated');

      if ($('.js-old').val() == '') {
        $('.js-old').focus();
      } else if ($('.js-old').val() != '' && $('.js-new').val() == '') {
        $('.js-new').focus();
      } else {
        $('.js-check').focus();
      }
    } else {
      alert('修改成功');
      $('.js-old').val('');
      $('.js-new').val('');
      $('.js-check').val('');
      $('.js-old').removeClass('is-invalid');
      $('.js-new').removeClass('is-invalid');
      $('.js-check').removeClass('is-invalid');
      $('.js-password-form').removeClass('was-validated');
    }
  });
});
// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//   end: "bottom 25%"
// });
// gsap.from(".js-banner", {
//   duration: 2,
//   filter: 'grayscale(100%) blur(10px)',
//   scrollTrigger: {
//     trigger: ".js-banner"
//   }
// });
// gsap.from(".js-banner-text", {
//   duration: 2,
//   opacity: 0,
//   y: 200,
//   scrollTrigger: {
//     trigger: ".js-banner"
//   }
// });
// gsap.from(".js-productFirst-text", {
//   duration: 2,
//   y: -150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productFirst-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productFirst-img", {
//   duration: 2,
//   y: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productFirst-text",
//     scrub: true,
//     start: "center bottom"
//   }
// });
// gsap.from(".js-productSecond-text", {
//   duration: 2,
//   y: -150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productSecond-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productSecond-img", {
//   duration: 2,
//   y: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productSecond-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productThird-text", {
//   duration: 2,
//   y: -150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productThird-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productThird-img", {
//   duration: 2,
//   y: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productThird-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productFouth-img", {
//   duration: 2,
//   y: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productFouth-text",
//     scrub: true
//   }
// });
// gsap.from(".js-productFouth-text", {
//   duration: 2,
//   y: -150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-productFouth-text",
//     scrub: true
//   }
// });
// gsap.from(".js-product-list1", {
//   duration: 1,
//   y: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-product-list1"
//   }
// });
// gsap.from(".js-product-list2", {
//   duration: 1,
//   y: 150,
//   opacity: 0,
//   delay: 0.2,
//   scrollTrigger: {
//     trigger: ".js-product-list1"
//   }
// });
// gsap.from(".js-product-list3", {
//   duration: 1,
//   y: 150,
//   opacity: 0,
//   delay: 0.4,
//   scrollTrigger: {
//     trigger: ".js-product-list1"
//   }
// });
// gsap.from(".js-left", {
//   duration: 1,
//   x: -150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-left"
//   }
// });
// gsap.from(".js-right", {
//   duration: 1,
//   x: 150,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".js-left"
//   }
// });
// gsap.from(".js-subscribe", {
//   duration: 2,
//   filter: 'grayscale(100%) blur(10px)',
//   scrollTrigger: {
//     trigger: ".js-subscribe"
//   }
// });
// gsap.from(".js-subscribe-text", {
//   duration: 2,
//   opacity: 0,
//   y: 200,
//   scrollTrigger: {
//     trigger: ".js-subscribe"
//   }
// });



$(window).scroll(function (e) {  
  if ($(window).scrollTop() <= 0) {
    $('.navbar').addClass('bg-white');
    $('.navbar').removeClass('bg-light');
  } else {
    $('.navbar').addClass('bg-light');
    $('.navbar').removeClass('bg-white');
  }
});

$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() <= 0)  {          /* 要滑動到選單的距離 */
       $('navbar').addClass('bg-white');   /* 幫選單加上固定效果 */
       $('navbar').removeClass('bg-light');   /* 幫選單加上固定效果 */
    } else {
      $('navbar').addClass('bg-light'); /* 移除選單固定效果 */
      $('navbar').removeClass('bg-white'); /* 移除選單固定效果 */
    }
  });
});

$(document).ready(function() {

});
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    console.log('cell:',data.results[0].cell);
    var cell = data.results[0].cell;
    $('.col-md-3 .ml-2').append(cell)
  }  
});
//# sourceMappingURL=all.js.map
