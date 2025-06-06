const emailInput = document.getElementById("email");
const form = emailInput.closest(".primary-form");

emailInput.addEventListener("input", () => {
  if (emailInput.checkValidity()) {
    form.classList.remove("invalid-email");
  } else {
    form.classList.add("invalid-email");
  }
});

// making the form's query selector both containers act as buttons so even if the user click the empty space within the container it will select the whole container.

const queryContainers = document.querySelectorAll(".query-type-container");

queryContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const radio = container.querySelector('input[type="radio"]');
    if (radio && !radio.checked) {
      // Checks if a radio button was found and if
      // it's not already checked.
      radio.checked = true;

      // Dispatch a 'change' event manually. This is important!
      // When you programmatically change `radio.checked`, it doesn't automatically
      // trigger the 'change' event like a user click would. Some forms or
      // JavaScript logic might rely on this event.
      const event = new Event("change");
      radio.dispatchEvent(event);
      // WITHOUT THESE UPPER TWO LINES THE FUNCTIONALITY OF THE RADIO BUTTONS STILL WORKS
    }
  });


  // Handle keyboard interaction (Spacebar to select)
  // WOW! 1ST NAVIGATE W/TAB THEN PRESS SPACEBAR TO SELECT
  container.addEventListener("keydown", (event) => {
    // Prevent default spacebar scrolling
    if (event.key === " " || event.key === "Spacebar") {
      // Stops the browser from scrolling down the page when Spacebar is pressed.
      event.preventDefault();
      const radio = container.querySelector('input[type="radio"]');
      if (radio && !radio.checked) {
        radio.checked = true;
        const changeEvent = new Event("change");
        radio.dispatchEvent(changeEvent);
      }
    }
  });
});
