let isTyping = false;

let handleEnter = function (event) {
  if (event.key === "Enter" && !isTyping) {
    event.preventDefault();
    isTyping = true;
    const inputElement = document.querySelector(".search-input");
    const answerElement = document.querySelector(".answer");
    const userInput = inputElement.value.trim().toLowerCase();

    const response = getResponse(userInput);

    answerElement.style.display = "block";

    let index = 0;
    answerElement.textContent = "";
    function typeText() {
      if (index < response.length) {
        answerElement.textContent += response.charAt(index);
        index++;
        setTimeout(typeText, 30);
      } else {
        answerElement.style.borderRight = "none";
        isTyping = false;
      }
    }

    typeText();
  }
};

document.addEventListener("keydown", handleEnter);

let getResponse = function (input) {
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
  } else if (
    input.includes("is") ||
    input.includes("are") ||
    input.includes("am") ||
    input.includes("was") ||
    input.includes("were") ||
    input.includes("will be") ||
    input.includes("be") ||
    input.includes("being") ||
    input.includes("been") ||
    input.includes("have") ||
    input.includes("has") ||
    input.includes("had") ||
    input.includes("should") ||
    input.includes("would") ||
    input.includes("could") ||
    input.includes("might") ||
    input.includes("shall") ||
    input.includes("will")
  ) {
    return "That's a great question. I'm glad that you are interested in that topic. The answer is NO.";
  } else {
    return "JESUS is always the answer.";
  }
};
