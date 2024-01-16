"use strict";

var _wp = wp,
    apiFetch = _wp.apiFetch;
jQuery(function ($) {
  var gutenify_educationRedirectToKitPage = function gutenify_educationRedirectToKitPage(res) {
    // if( res?.status && 'active' === res.status ) {
    window.location = "".concat(window.gutenify_education.gutenify_kit_gallery); // }
  }; // Activate Gutenify.


  $(document).on('click', '.gutenify-education-activate-gutenify', function () {
    $(this).html('<span class="dashicons dashicons-update"></span> Loading...').addClass('gutenify-education-importing-gutenify');
    apiFetch({
      path: '/wp/v2/plugins/gutenify/gutenify',
      method: 'POST',
      data: {
        "status": "active"
      }
    }).then(function (res) {
      gutenify_educationRedirectToKitPage(res);
    })["catch"](function () {
      gutenify_educationRedirectToKitPage({});
    });
  });
  $(document).on('click', '.gutenify-education-install-gutenify', function () {
    $(this).html('<span class="dashicons dashicons-update"></span> Loading...').addClass('gutenify-education-importing-gutenify');
    apiFetch({
      path: '/wp/v2/plugins',
      method: 'POST',
      data: {
        "slug": "gutenify",
        "status": "active"
      }
    }).then(function (res) {
      gutenify_educationRedirectToKitPage(res);
    })["catch"](function () {
      gutenify_educationRedirectToKitPage({});
    });
  });
  $(document).on('click', '.gutenify-education-admin-notice .notice-dismiss', function () {
    console.log(ajaxurl + "?action=gutenify_education_hide_theme_info_noticebar");
    apiFetch({
      url: ajaxurl + "?action=gutenify_education_hide_theme_info_noticebar&gutenify_education-nonce-name=".concat(window.gutenify_education.gutenify_education_nonce),
      method: 'POST'
    }).then(function (res) {
      console.log(res);
    })["catch"](function (res) {
      console.log(res);
    });
  });
});