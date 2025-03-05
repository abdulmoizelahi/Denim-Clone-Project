/*Off-Canvas Menu Begins*/

$(".open-nav").on("click", function () {
  $("#mySidenav").addClass("showsidebar");
  $("#mySidenav").removeClass("hidesiderbar");
});

$(".closebtn").on("click", function () {
  $("#mySidenav").addClass("hidesiderbar");
  $("#mySidenav").removeClass("showsidebar");
});

/*Off-Canvas Menu End*/

/* For Collection Submenu Begins */
$("#collection").on("click", function () {
  $(".collec-submenu").addClass("collec-submenu-show");
  $(".sidebar-wrapper").addClass("hide-sidebar-wrapper");
});

$("#back-23").on("click", function () {
  $(".collec-submenu").removeClass("collec-submenu-show");
  $(".sidebar-wrapper").removeClass("hide-sidebar-wrapper");
});

/* For Collection Submenu End */

/* For MEN Submenu Begins */
$("#men").on("click", function () {
  $(".men-submenu").addClass("men-submenu-show");
  $(".sidebar-wrapper").addClass("hide-sidebar-wrapper");
});

$("#back-men").on("click", function () {
  $(".men-submenu").removeClass("men-submenu-show");
  $(".sidebar-wrapper").removeClass("hide-sidebar-wrapper");
});

/* For MEN Submenu End */

/* For ACCESSORIES Submenu Begins */

$("#accessories").on("click", function () {
  $(".accessories-submenu").addClass("accessories-submenu-show");
  $(".sidebar-wrapper").addClass("hide-sidebar-wrapper");
});

$("#back-accessories").on("click", function () {
  $(".accessories-submenu").removeClass("accessories-submenu-show");
  $(".sidebar-wrapper").removeClass("hide-sidebar-wrapper");
});

/* For ACCESSORIES Submenu End */

/* For KIDS submenu Begins */

$("#kid").on("click", function () {
  $(".kid-submenu").addClass("kid-submenu-show");
  $(".sidebar-wrapper").addClass("hide-sidebar-wrapper");
});

$("#back-kid").on("click", function () {
  $(".kid-submenu").removeClass("kid-submenu-show");
  $(".sidebar-wrapper").removeClass("hide-sidebar-wrapper");
});

/* For KIDS submenu End */

/* For Quantity Dropdown & Icon Begins */

$(".quantity-wrapper").on("click", function () {
  $(".options-list").toggleClass("quantity-list-popout");
  $(".quantity-wrapper").toggleClass("rotate-quantity-icon");
  $(".qntity-item").addClass("border");
  $("#border").toggleClass("remove-border");
});

$(".qntity-item").on("click", function () {
  $(".options-list").removeClass("quantity-list-popout");
});

/* For Quantity Dropdown & Icon End */

/* For Products Size Begins */

/*   $('.radio__button input').on('click', e => {
    var type_value = $("input[type='radio'][name='type']:checked").val();
    $(".size").html(type_value);
    
    
    
    console.log(type_value)   
    console.log(e.target.value);
    }); */

/*  For Products Size End */

/* For Current Tab Begins */

$("#text-related").on("click", function () {
  $(".related span").addClass("current-tab");
  $(".tabs-text-recent").removeClass("current-tab");
});

$("#text-recent").on("click", function () {
  $(".recently span").addClass("current-tab");
  $(".tabs-text-related").removeClass("current-tab");
  $("").removeClass("");
});

/* For Current Tab End */

/* For Related & Recently Begins*/

/* For Recently */
$(".recently").on("click", function () {
  $(".main-short-card-wrapper").addClass("recently-show");
  $(".main-shirt-card-wrapper").addClass("related-hide");
  $(".main-shirt-card-wrapper").removeClass("related-show");
});

/* For Related */
$(".related").on("click", function () {
  $(".main-shirt-card-wrapper").addClass("related-show");
  $(".main-short-card-wrapper").addClass("recently-hide");
  $(".main-short-card-wrapper").removeClass("recently-show");
  $(".main-shirt-card-wrapper").removeClass("related-hide");
});

/* For Related & Recently End*/

/* For Buy Form Jquery Begins */

/* For Add Appartment Begins */
$(".add-apart-btn").on("click", function () {
  $(".add-appaertment-wrap-main").addClass("removeappart");
  $(".for-apartment-etc-wrap-main-2").addClass("showappart");
  $(".").removeClass("");
  $(".").removeClass(".");
});
/* For Add Appartment End */

/* For Different Billing Address Radio Begins */
$(".diff-wrap").on("click", function () {
  $(".diff-address-wrap-main").addClass("showbilling-card");
  $(".").addClass("");
  $(".").removeClass("");
  $(".").removeClass(".");
});

$(".same-wrap").on("click", function () {
  $(".diff-address-wrap-main").removeClass("showbilling-card");
  $(".").removeClass(".");
});
/* For Different Billing Address Radio End */

/* For Buy Form Jquery End */

// NewCode Start Here For ICART------------------>

/* Item Cart Note Plus & Minus Icon Code Begins Here */
$(document).ready(function () {
  $(".add-order").click(function () {
    $(".note-plus").toggle();
  });
  $(".add-order").click(function () {
    $(".note-minus").toggle();
  });
});
/* Item Cart Note Plus & Minus Icon Code End Here */

/* Item Cart Off-Canvas Transform:Translate Code Begins Here */
$(document).ready(function () {
  $(".addtocart-btn").click(function (event) {
    event.preventDefault(); // Prevents the default action (e.g., form submission or navigation)
    $(".icart-of-canvas").addClass("icart-show");
  });

  $(".btn-close-icart").click(function () {
    $(".icart-of-canvas").removeClass("icart-show");
  });
});
/* Item Cart Off-Canvas Transform:Translate Code End Here */

/* Products Size Value Upadte in Item Cart's Size Field  Code Begins Here*/
$(document).ready(function () {
  $(".addtocart-btn").on("click", (e) => {
    var type_value = $(".product-selector-wrapper input").val();
    $(".icart-size span").html(type_value);

    console.log(type_value);
    console.log(e.target.value);
  });
});
/* Products Size Value Upadte in Item Cart's Size Field  Code End Here*/
