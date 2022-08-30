// Open and close the modal

const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "block";
  document.getElementById("contact_modal").focus()
}

function closeModal() {
  modal.style.display = "none";
}

// Closing modal with keyboard
document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    closeModal();
    document.querySelector('.contact_button').focus();
  }
})

// Select the form
const form = document.querySelector("#form");


// Trap focus in modal
modal.addEventListener('keydown', (e) => {
  const keyboardfocusableElements = modal.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  )

  if (e.key === "Tab" && e.target.classList.contains('contact_button')) {
    e.preventDefault();
    keyboardfocusableElements[0].focus();
  } else if (e.shiftKey && e.key === "Tab" && e.target.id === 'close_modal') {
    e.preventDefault();
    keyboardfocusableElements[keyboardfocusableElements.length - 1].focus();
  } 
})

// *********** Array of objects to be validated *************

// Objects in array are made of an error message, the input concerned and the RegExp to be validated
const validationArray = [
  {
    err: "Prénom non-valide ✘",
    input: form.first,
    regexp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Nom non-valide ✘",
    input: form.last,
    regexp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Adresse e-mail non-valide ✘",
    input: form.email,
    regexp: RegExp("^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"),
  },
  {
    err: "200 caractères maximum",
    input: form.message,
    regexp: RegExp("^[a-zA-Zéèï.;,:/?!¨^ùà ]{1,300}$"),
  },
];

// ***************** Input Validation Method ***************

// Validates all the inputs except the checkboxes
const validate = (input, regexp) => regexp.test(input.value);

// ****************** Form Validation ********************

// addEventListener to run the whole validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validationFlag = true;
  let formData = new FormData();
  // Validation Loop in validationArray
  validationArray.forEach((el) => {
    let small = el.input.nextElementSibling;
    small.classList.remove("invalid");
    small.innerHTML = "";
    formData.append(el.input.name, el.input.value);
    if (!validate(el.input, el.regexp)) {
      small.innerHTML = el.err;
      small.classList.add("invalid");
      validationFlag = false;
    }
  });

  // Submit form if validated (log entries in console)
  if (validationFlag) {
    closeModal();
    for (var entrie of formData.entries()) {
      console.log(`${entrie[0]} : ${entrie[1]}`);
    }
  }
});
