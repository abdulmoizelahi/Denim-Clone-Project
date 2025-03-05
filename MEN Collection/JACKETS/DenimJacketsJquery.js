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
  
  /*For Supp Nab Begins*/
  
  $(function () {
    $(".sort-btn").on("click", function () {
      $(".sort-btn").toggleClass("active");
      $("#mySidebar").toggleClass("active");
    });
  });
  
  $(".filter-btn").on("click", function () {
    $(".filter-btn").toggleClass("rotate");
  });
  
  /*For Supp Nab End*/
  
  /*For Rotate Icons & Transform Begins*/
  
  $(".acc-side-bar").on("click", function () {
    $(".filter-icons").toggleClass("active");
    $("#panel").slideToggle("slow");
    /* $('#panel').toggleClass('show'); */
  });
  
  $(".acc-side-bar-2").on("click", function () {
    $(".filter-icons").toggleClass("active-2");
    $(".double-slider-box").slideToggle("slow");
    /* $('.double-slider-box').toggleClass('show-2') */
  });
  
  $(".acc-side-bar").on("click", function () {
    /*  $(".trigger-2").toggleClass("move"); */
  });
  
  /*For Rotate Icons & Transform Begins*/
  
  $(".filter-btn").on("click", function () {
    $(".main-sidebar-div").toggleClass("show-again");
  });
  
  /* Checking */
  
  /* Debugging Code Begins Here */
  
  $(".filter-btn").on("click", function () {
    $(".main-collection-wrapper").toggleClass("custom-filter-style");
  });
  
  $(".filter-btn").on("click", function () {
    $(".height-expand").toggleClass("show-n-hide-filter");
  });
  