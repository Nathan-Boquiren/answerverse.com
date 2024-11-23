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
    return "It's time for you to get a watch, bro.";
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
  } else if (input.includes("how")) {
    return "Great question. The answer is JESUS.";
  } else if (
    input.includes("are") ||
    input.includes("was") ||
    input.includes("will be") ||
    input.includes("being") ||
    input.includes("have") ||
    input.includes("had") ||
    input.includes("would") ||
    input.includes("might") ||
    input.includes("will")
  ) {
    return "That's a great question. I'm glad that you are interested in that topic. The answer is NO.";
  } else if (
    input.includes("is") ||
    input.includes("am") ||
    input.includes("shall")
  ) {
    return "That's a great question. I'm glad that you are interested in that topic. The answer is YES.";
  } else if (
    input.includes("were") ||
    input.includes("has") ||
    input.includes("should") ||
    input.includes("could")
  ) {
    return "You know something. . .I don't really know. Why don't you google it or something.";
  } else if (
    input.includes("do") ||
    input.includes("did") ||
    input.includes("does")
  ) {
    return "Ha! What kind of question is that?  NO! obviously. ";
  } else {
    return "JESUS is always the answer.";
  }
};
