/* window.onload = function() { */
/* For Slideshow Gallery Begins */
window.onload = function () {
  /* When a quantity is selected from the dropdown, update the counter and subtotal Begins */

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

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Add event listeners for next and previous buttons
  document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });

  // Add event listener for demo images
  let demoImages = document.querySelectorAll(".demo");
  demoImages.forEach(function (img, index) {
    img.addEventListener("click", function () {
      currentSlide(index + 1);
    });
  });
  /* For Slideshow Gallery End */

  /* For Size JS Begins */

  const selectSize = document.querySelector(".size");
  const SizeOptions = document.querySelectorAll('input[name="type"]'); // Select all radio buttons with name "type"

  SizeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectSize.value = option.value; // Use value property to set the value
    });
  });

  /* For Size JS End */
};
// NEW CODE BEGINS HERE FOR ITEM CART OFF-CANVAS

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
  subtotalField.textContent = `Rs.${newSubtotal}`; // Update the displayed subtotal
}

/* Quantity Dropdown Code Begins Here */

/* Quantity Counter & Update Subtotal Price Code End Here */
