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
      window.location.href = 'https://gloriousky.github.io/Project_Week6/member.html';
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


var scroll_top = 0;
var goTop = document.querySelector('.goTop');

window.onscroll = function () {
  var scroll_top = window.scrollY;

  if (scroll_top > 80) {
    goTop.classList.remove('d-none');
  } else {
    goTop.classList.add('d-none');
  }
};
$(".goTop").click(function (event) {
  event.preventDefault();
  $("html,body").animate({
    scrollTop: 0
  }, 700)
})

//# sourceMappingURL=all.js.map
