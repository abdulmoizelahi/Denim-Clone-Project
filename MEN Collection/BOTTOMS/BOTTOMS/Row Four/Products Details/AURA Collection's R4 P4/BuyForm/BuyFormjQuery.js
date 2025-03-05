/* For Buy Form Jquery Begins */

/* For Add Appartment Begins */
$(".add-apart-btn").on("click", function () {
  $(".add-appaertment-wrap-main").addClass("removeappart");
  $(".for-apartment-etc-wrap-main-2").addClass("showappart");
});
/* For Add Appartment End */

/* For Different Billing Address Radio Begins */
$(".diff-wrap").on("click", function () {
  $(".diff-address-wrap-main").addClass("showbilling-card");
  $(".diff").addClass("diff-border");
  $(".same").addClass("same-border-remove");
});

$(".same-wrap").on("click", function () {
  $(".diff-address-wrap-main").removeClass("showbilling-card");
  $(".diff").removeClass("diff-border");
  $(".same").removeClass("same-border-remove");
});
/* For Different Billing Address Radio End */

/* For Buy Form Jquery End */

/* ==========<<<<<< ORDER SUMMARY SECTION ONLY DISPLAY IN 768PX BEGINS >>>>>>============= */

/* FOR ICON ROTATE JQUERY BEGINS */
$(".summaryrotate").on("click", function () {
  $(".summary-icon svg").toggleClass("rotate-summary");
});
/* FOR ICON ROTATE JQUERY BEGINS */

/* FOR ORDER SUMMARY SLIDE DOWN EFFECT BEGINS */
$(".summary-section-main").on("click", function () {
  $(".product-details-form-wrap-main").toggleClass("trigger-summary");
});
/* FOR ORDER SUMMARY SLIDE DOWN EFFECT END */

/* ==========<<<<<< ORDER SUMMARY SECTION ONLY DISPLAY IN 768PX END >>>>>>============= */
