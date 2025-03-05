/* Complete Off-Canvas Code Begins */

/* Off-Canvas Menu Open & Close Begins*/

$(".open-nav").on("click", function () {
  $("#mySidenav").addClass("showsidebar");
  $("#mySidenav").removeClass("hidesiderbar");
});

$(".closebtn").on("click", function () {
  $("#mySidenav").addClass("hidesiderbar");
  $("#mySidenav").removeClass("showsidebar");
});

/*Off-Canvas Menu Open & Close End*/

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

/* Complete Off-Canvas Code End */

/* For Search Bar on Navbar Begins */
$(".search-icon i").on("click", function () {
  $(".for-search-bar-wrap-main").addClass("show-search-bar");
  $(".mobile-header").addClass("mobile-header-hide");
  $(".for-search").addClass("for-search-hide");
  $(".header-logo-image").addClass("header-logo-image-hide");
  $(".header-mobile-right").addClass("header-mobile-right-hide");
});

$(".close-icon-bar i").on("click", function () {
  $(".for-search-bar-wrap-main").removeClass("show-search-bar");
  $(".mobile-header").removeClass("mobile-header-hide");
  $(".for-search").removeClass("for-search-hide");
  $(".header-logo-image").removeClass("header-logo-image-hide");
  $(".header-mobile-right").removeClass("header-mobile-right-hide");
});

/* For Search Bar End */

/* For SearchBar Filter Items & LoadingBar Animations Begins */

$(document).ready(function () {
  $("#mySearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var hasResults = false;

    $(".main-aura-card-wrapper").each(function () {
      var products = $(this).find(".aura-card-wrapper");
      var visibleProducts = products.filter(function () {
        return $(this).attr("data-name").toLowerCase().indexOf(value) > -1;
      });

      if (value === "") {
        // Reset styling if search is empty
        $(this).css("justify-content", "space-around");
        products.show();
      } else {
        // Show only matching products
        products.hide();
        visibleProducts.show();

        if (visibleProducts.length > 0) {
          $(this).css("justify-content", "flex-start");
          hasResults = true;
        }
      }
    });

    if (!hasResults && value !== "") {
      $(".search-results").html("<p>No products found</p>").fadeIn();
    } else {
      $(".search-results").fadeOut();
    }
  });
});

$(document).ready(function () {
  $("#mySearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $(".loading-bar").fadeIn(); // Show loading bar

    setTimeout(function () {
      $(".loading-bar").fadeOut(); // Hide after 1.5 seconds
    }, 1500);
  });
});
/* For SearchBar Filter Items & LoadingBar Animations End */

/* For Cart Off-Canvas Begins  */
$(".bag i").on("click", function () {
  $(".cart-of-canvas").addClass("cart-show");
});

$(".btn-close-cart i").on("click", function () {
  $(".cart-of-canvas").removeClass("cart-show");
});

/* For Cart Off-Canvas End  */

/* Product Details Form Like, Size, Quantity Add To Cart, And Buy Button Begins */
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
/* Product Details Form Like, Size, Quantity Add To Cart, And Buy Button End */

/* ICART Complete Off-Canvas Code Begins Here  */
/* Item Cart Note Plus & Minus Icon Code Begins Here */
// Note Plus/Minus Icon Toggle
$(document).ready(function () {
  // Default: note-minus ko hide karein
  $(".note-minus").hide();

  // Jab "add-order" (details element) open/close hota hai
  $(".add-order").on("toggle", function () {
    const isOpen = $(this).prop("open");
    $(".note-plus").toggle(!isOpen); // Agar details open hai, note-plus hide
    $(".note-minus").toggle(isOpen); // Agar details open hai, note-minus show
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

/* ICART Complete Off-Canvas Code End Here  */

/* Complete Related & Recently Viewed Tabs Begins */
/* For Related & Recently Begins*/

/* For Recently */
$(".recently").on("click", function () {
  $(".main-recent-card-wrapper").addClass("recently-show");
  $(".main-related-card-wrapper").addClass("related-hide");
  $(".main-related-card-wrapper").removeClass("related-show");
});

/* For Related */
$(".related").on("click", function () {
  $(".main-related-card-wrapper").addClass("related-show");
  $(".main-recent-card-wrapper").addClass("recently-hide");
  $(".main-recent-card-wrapper").removeClass("recently-show");
  $(".main-related-card-wrapper").removeClass("related-hide");
});
/* For Related & Recently End*/
/* Complete Related & Recently Viewed Tabs End */

/* WHEN ADD TO CART BUTTON CLICK PRODUCT PRICE UPDATED IN ICART-PPRICE BEGINS */
$(document).ready(function () {
  $(".addtocart-btn").on("click", function () {
    var price_value = $("#pprice").text(); // Yeh price pick karega

    $(".icart-pprice").html(price_value); // Yeh price update karega

    console.log("Selected Price:", price_value);
  });
});

/* WHEN ADD TO CART BUTTON CLICK PRODUCT PRICE UPDATED IN ICART-PPRICE BEGINS */
