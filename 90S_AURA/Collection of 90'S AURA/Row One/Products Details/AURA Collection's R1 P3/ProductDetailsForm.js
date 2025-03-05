/* Complete Code Of Product Image Section Single Img Index Imgs Section Begins Here  */
document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("product-slide");
    const dots = document.getElementsByClassName("product-thumb-wrap");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    Array.from(slides).forEach((slide) => {
      slide.style.display = "none";
    });

    // Remove active class from thumbnails
    Array.from(dots).forEach((dot) => {
      dot.classList.remove("is-active");
    });

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Activate corresponding thumbnail
    dots[slideIndex - 1].classList.add("is-active");
  }

  // Event Listeners
  document
    .querySelector(".prev")
    .addEventListener("click", () => plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => plusSlides(1));

  // Thumbnail click handlers
  Array.from(document.querySelectorAll(".product-thumb-wrap")).forEach(
    (dot, index) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide(index + 1);
      });
    }
  );
});
/* Complete Code Of Product Image Section Single Img Index Imgs Section End Here  */

/* Product Details Form Like, Size, Quantity Add To Cart, And Buy Button Begins */
/* When a quantity is selected from the dropdown, update the counter and subtotal Begins */
window.onload = function () {
  const selectVal = document.querySelector(".select");
  const optionsVal = document.querySelectorAll(".option");

  optionsVal.forEach((option) => {
    option.addEventListener("click", () => {
      // Remove "selected" class from all options
      optionsVal.forEach((option) => {
        option.classList.remove("selected");
      });

      // Update the input value with the selected option's value
      selectVal.querySelector("input").value = option.innerHTML.trim();

      // Add the "selected" class to the clicked option
      option.classList.add("selected");

      // Update the quantity counter and subtotal
      const selectedQuantity = option.innerHTML.trim();
      updateQuantityCounter(selectedQuantity); // Update quantity counter
      updateSubtotal(selectedQuantity); // Update subtotal
    });
  });
  /* When a quantity is selected from the dropdown, update the counter and subtotal End Here */

  /* For Size JS Begins */

  const selectSize = document.querySelector(".size");
  const SizeOptions = document.querySelectorAll('input[name="type"]'); // Select all radio buttons with name "type"

  SizeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectSize.value = option.value; // Use value property to set the value
    });
  });
};
/* For Size JS End */

/* Quantity Counter & Update Subtotal Price Code Begins Here */

// Function to decrease the quantity and update subtotal
function decreaseQuantity(button) {
  var quantityCounter = button.closest(".cart__quantity-counter");
  var quantityField = quantityCounter.querySelector(".icart__quantity-field");
  var subtotalField = document.querySelector(".subtotal-price");

  var productPrice = parseInt(quantityCounter.getAttribute("data-price"));
  var currentValue = parseInt(quantityField.value);

  if (currentValue > 1) {
    quantityField.value = currentValue - 1;
    updateSubtotal(quantityField.value); // Update subtotal when quantity decreases
  }
}

// Function to increase the quantity and update subtotal
function increaseQuantity(button) {
  var quantityCounter = button.closest(".cart__quantity-counter");
  var quantityField = quantityCounter.querySelector(".icart__quantity-field");
  var subtotalField = document.querySelector(".subtotal-price");

  var productPrice = parseInt(quantityCounter.getAttribute("data-price"));
  var currentValue = parseInt(quantityField.value);

  quantityField.value = currentValue + 1;
  updateSubtotal(quantityField.value); // Update subtotal when quantity increases
}

// Function to update the quantity in the quantity-counter input field
function updateQuantityCounter(quantity) {
  var quantityField = document.querySelector(".icart__quantity-field");
  quantityField.value = quantity; // Update quantity field value to selected quantity
}

// Function to update the subtotal based on the quantity
function updateSubtotal(quantity) {
  var quantityField = document.querySelector(".icart__quantity-field");
  var subtotalField = document.querySelector(".subtotal-price");

  var productPrice = parseInt(
    document.querySelector(".cart__quantity-counter").getAttribute("data-price")
  );
  var newSubtotal = quantity * productPrice; // Calculate new subtotal based on quantity
  subtotalField.textContent = `Rs.${newSubtotal.toLocaleString()}`; // Update the displayed subtotal
}

/* Quantity Dropdown Code Begins Here */

/* Quantity Counter & Update Subtotal Price Code End Here */

/* Product Details Form Like, Size, Quantity Add To Cart, And Buy Button End */

/* Complete Related & Recently Viewed Tabs Code For Underline Animation Begins */
document.addEventListener("DOMContentLoaded", function () {
  // Get all tabs
  const tabs = document.querySelectorAll(".tab-headings ul li");
  const relatedTab = document.querySelector(".related");
  const recentlyTab = document.querySelector(".recently");

  // Function to set active tab
  function setActiveTab(tab) {
    // Remove current-tab class from all tabs
    tabs.forEach((t) =>
      t.querySelector("span").classList.remove("current-tab")
    );
    // Add current-tab class to the clicked tab
    tab.querySelector("span").classList.add("current-tab");
  }

  // Set Related tab as active on page load
  setActiveTab(relatedTab);

  // Add click event listeners to tabs
  relatedTab.addEventListener("click", () => setActiveTab(relatedTab));
  recentlyTab.addEventListener("click", () => setActiveTab(recentlyTab));
});
/* Complete Related & Recently Viewed Tabs Code For Underline Animation End */
