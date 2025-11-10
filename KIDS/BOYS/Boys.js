window.onload = function () {
    slideMin();
    slideMax();
  };
  
  /* For Range Slider Begins */
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val"); // Should be ".max-val" instead of ".mix-val"
  const priceInputMin = document.querySelector(".min-input");
  const priceInputMax = document.querySelector(".max-input");
  const minGap = 0;
  const range = document.querySelector(".slider-track");
  const sliderMinValue = parseInt(minVal.min);
  const sliderMaxValue = parseInt(maxVal.max);
  
  function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
      minVal.value = parseInt(maxVal.value) - minGap;
    }
    priceInputMin.value = minVal.value;
    setArea();
  }
  // Add event listener for the "input" event to trigger slideMin() function when slider value changes
  minVal.addEventListener("input", slideMin);
  
  function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
      maxVal.value = parseInt(minVal.value) + minGap;
    }
    priceInputMax.value = maxVal.value;
    setArea();
  }
  
  function setArea() {
    range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
  }
  
  function setMinInput() {
    let minPrice = parseInt(priceInputMin.value);
    if (minPrice < sliderMinValue) {
      priceInputMin.value = sliderMinValue;
    }
    minVal.value = priceInputMin.value;
    slideMin();
  }
  
  function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value);
    if (maxPrice > sliderMaxValue) {
      priceInputMax.value = sliderMaxValue;
    }
    maxVal.value = priceInputMax.value;
    slideMax();
  }
  
  /* For Range Slider End */
  
  /* For Range Slider Div Float Adjustment For RWD Begins */
  /* function adjustSliderDiv() {
    var sliderDivs = document.getElementsByClassName("main-sidebar-div"); // Replace 'main-sidebar-div' with the actual class of your slider div
    for (var i = 0; i < sliderDivs.length; i++) {
      var sliderDiv = sliderDivs[i];
      if (window.innerWidth <= 1024) {
        sliderDiv.style.float = "none";
        sliderDiv.style.height = "250px";
      } else {
        // Reset styles if window width is greater than 1024 pixels
        sliderDiv.style.float = "left"; // Reset to default
        sliderDiv.style.height = "1000px"; // Reset to default
      }
    }
  } */
  
  /* // Call the function when the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", adjustSliderDiv);
  
  // Call the function when the window is resized
  window.onresize = adjustSliderDiv; */
  
  /* For Range Slider Div Float Adjustment For RWD End */
  
  // Function to filter product cards based on user input price range
  function filterProductCards(maxPrice) {
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(function (card) {
      const price = parseInt(card.getAttribute("data-price"));
      if (price <= maxPrice || maxPrice === 0) {
        // Show card if price is less than or equal to maxPrice or maxPrice is 0
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  // Initial display of all product cards
  filterProductCards(0); // Initially show all product cards
  
  // Event listener for range slider input
  const priceRangeFilter = document.getElementById("filter");
  
  priceRangeFilter.addEventListener("input", function () {
    const maxPrice = parseInt(this.value);
  
    filterProductCards(maxPrice);
  });
  
  //Debugging Code Begins
  
  window.addEventListener("scroll", function () {
    let sidebar = document.getElementById("mySidebar");
  
    if (window.scrollY > 0) {
      sidebar.style.marginTop = "0px";
    } else {
      sidebar.style.marginTop = "110px";
    }
  });
  