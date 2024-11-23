document.addEventListener("keydown", handleEnter); // Attach a single event listener

let isTyping = false;

function handleEnter(event) {
  if (event.key === "Enter" && !isTyping) {
    event.preventDefault(); // Prevent default form submission
    isTyping = true; // Set flag to indicate typing in progress

    const inputElement = document.querySelector(".search-input");
    const answerElement = document.querySelector(".answer");
    const userInput = inputElement.value.trim().toLowerCase(); // Get and normalize input

    // Determine the response based on keywords
    const response = getResponse(userInput);

    // Ensure the element is visible
    answerElement.style.display = "block";

    // Typing effect logic
    let index = 0;
    answerElement.textContent = ""; // Clear previous content

    function typeText() {
      if (index < response.length) {
        answerElement.textContent += response.charAt(index); // Append character
        index++;
        setTimeout(typeText, 30); // Adjust speed (50ms delay between each character)
      } else {
        // Stop the blinking cursor once typing is complete
        answerElement.style.borderRight = "none";
        isTyping = false; // Reset the flag after typing is complete
      }
    }

    // Start the typing animation
    typeText();
  }
}

// Function to determine the response based on keywords
function getResponse(input) {
  if (!input.includes("?")) {
    return "Bru. Where is your question mark? Don't forget to include your question mark! Haven't you learned anything!? IF YOU ARE ASKING A QUESTION, USE A QUESTION MARK!!!!!";
  } else if (input === "why?") {
    return "Why what? Be specific, Bob.";
  } else if (input.includes("what time is it?")) {
    return "It's JESUS time.";
  } else if (input.includes("what day is it")) {
    return "It's the Lord's day.";
  } else if (input.includes("why")) {
    return "Because of JESUS.";
  } else if (input.includes("who")) {
    return "JESUS. That's who.";
  } else if (input.includes("what")) {
    return "JESUS is.";
  } else if (input.includes("which")) {
    return "The one with JESUS.";
  } else if (input.includes("where")) {
    return "Where JESUS is.";
  } else if (input.includes("when")) {
    return "When JESUS returns, obviously.";
  } else {
    return "JESUS is always the answer.";
  }
}
