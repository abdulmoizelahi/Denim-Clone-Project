window.onload = function () {
  /* For Form Validation Begins*/

  // Get fields values

  const form = document.querySelector("form");
  const yourEmail = document.getElementById("email");
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const yourAddress = document.getElementById("address");
  const yourApartment = document.getElementById("apartment");
  const cityName = document.getElementById("cityname");
  const postalCode = document.getElementById("postalcode");
  const yourPhone = document.getElementById("phone");

  // Send Email to Gmail // function
  // used Thrid party service smtpJS

  function sendEmail() {
    // data recieve on gmail

    const bodyMessege = `Email: ${yourEmail.value} <br>
       First Name: ${firstName.value} <br>
       Last Name: ${lastName.value} <br>
       Address: ${yourAddress.value} <br>
       Apartment, etc.: ${yourApartment.value} <br>
       City: ${cityName.value} <br>
       Postal Code : ${postalCode.value} <br>
       Phone: ${yourPhone.value}`;

    // Third party code smtpJS

    Email.send({
      SecureToken: "fc37f5de-0cc3-4ecb-a8f1-acfd6d5b0c72",
      Host: "smtp.elasticemail.com",
      Username: "smohsinelahi@gmail.com",
      Password: "DC03FDE065F69C089123693F09F450469447",
      To: "smohsinelahi@gmail.com",
      From: "smohsinelahi@gmail.com",
      Subject: "Contact Page",
      Body: bodyMessege,
    }).then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success",
          text: "Order Complete successfully!",
          icon: "success",
        });
      }
    });
  }

  // Check input fields data, if no data found add error class

  function checkInputs() {
    const items = document.querySelectorAll(".field-item");
    for (const item of items) {
      if (item.value == "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      // Email field validation START

      if (items[1].value != "") {
        checkEmail();
      }

      items[1].addEventListener("keyup", () => {
        checkEmail();
      });

      // Email field validation END

      // remove error class on insert data into field

      item.addEventListener("keyup", () => {
        if (item.value != "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    }
  }

  // Email validation Function START

  function checkEmail() {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    const errorTxtEmail = document.querySelector(".error-text.email");

    if (errorTxtEmail != "") {
      errorTxtEmail.innerHTML = "Enter a valid email address";
    } else {
      errorTxtEmail.innerHTML = "Please enter your email";
    }
    if (!yourEmail.value.match(emailRegex)) {
      yourEmail.classList.add("error");
      yourEmail.parentElement.classList.add("error");
    } else {
      yourEmail.classList.remove("error");
      yourEmail.parentElement.classList.remove("error");
    }
  }
  // Email validation Function END

  // Form submit on click

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    // condition to check if any of the field have no error class than the form will submit

    if (
      !yourEmail.classList.contains("error") &&
      !firstName.classList.contains("error") &&
      !lastName.classList.contains("error") &&
      !yourAddress.classList.contains("error") &&
      !yourApartment.classList.contains("error") &&
      !cityName.classList.contains("error") &&
      !postalCode.classList.contains("error") &&
      !yourPhone.classList.contains("error")
    ) {
      sendEmail();
      // reser form field values after submit
      form.reset();
      return false;
    }
  });
};
/* For Form Validation */

/* <<<<<===== UPDATING VALUES WITH THE HELP OF URL BEGINS =====>>>>> */
// Function to get URL parameters (safer version)
function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results || !results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Quantity ko URL se get karein aur validate karein
var quantityParam = getUrlParameter("quantity");
var quantity = parseInt(getUrlParameter("quantity")) || 1; // Default 1 if quantity is missing or invalid
var size = getUrlParameter("size");

/* console.log("Quantity: ", quantity); // Check if quantity is correctly fetched */
console.log("Size: ", size); // Check if size is correctly fetched
console.log("Quantity from URL:", quantity); // Debugging ke liye

// HTML mein quantity ko update karein
document.getElementById("quantity").innerHTML = quantity;
document.getElementById("size").innerHTML = size;

/*  <<<<<===== UPDATING VALUES WITH THE HELP OF URL END =====>>>>> */

/* <<<<<===== UPDATING VALUES ACCORDING TO QUANTITY AND PRICE BEGINS =====>>>>> */
// Function to parse price value
function parsePrice(priceText) {
  return parseFloat(
    priceText
      .replace(/Rs&nbsp;/g, "") // "Rs&nbsp;" hatao
      .replace(/,/g, "") // Commas hatao (e.g., 4,350 -> 4350)
  );
}

// Debugging ke liye price ko check karein
const priceText = document.getElementById("pprice").innerHTML;
console.log("Price Text:", priceText); // Debugging ke liye
const price = parsePrice(priceText);
console.log("Parsed Price:", price); // Debugging ke liye

function updatePrices() {
  // Quantity ko URL se get karein
  const quantity = parseInt(getUrlParameter("quantity")) || 1;

  // Price ko parse karein
  const priceText = document.getElementById("pprice").innerHTML;
  const price = parsePrice(priceText);

  // Subtotal calculate karein
  const newPrice = quantity * price;

  // Values ko update karein
  document.getElementById(
    "pprice"
  ).innerHTML = `Rs&nbsp;${newPrice.toLocaleString()}`;
  document.querySelector(
    ".subT-value"
  ).innerHTML = `Rs&nbsp;${newPrice.toLocaleString()}`;

  // Shipping value ko parse karein
  const shippingText = document.querySelector(".shipping-value").innerHTML;
  const shippingValue = parsePrice(shippingText);

  // Total calculate karein
  const totalValue = newPrice + shippingValue;

  // Total ko update karein
  document.querySelector(
    ".total-value"
  ).innerHTML = `Rs&nbsp;${totalValue.toLocaleString()}`;
}

// Page load par updatePrices function call karein

updatePrices();

/* <<<<<===== UPDATING VALUES ACCORDING TO QUANTITY AND PRICE END =====>>>>> */
