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
    return "Bruh. Where is your question mark? Don't forget to include your question mark! Haven't you learned anything!? IF YOU ARE ASKING A QUESTION, USE A QUESTION MARK!!!!!";
  } else if (input === "why?") {
    return "Why what? Be specific, Bob.";
  } else if (input.includes("why")) {
    return "Because of JESUS.";
  } else if (input === "what time is it?") {
    return "It's time for you to get a watch, bruh.";
  } else if (input.includes("what day is it")) {
    return "It's the Lord's day.";
  } else if (input.includes("what time")) {
    return "When the big hand faces UP and the little hand faces UP.";
  } else if (input.includes("what kind")) {
    return "Either the one with bubbles or the one with pineapple.";
  } else if (input.includes("what type")) {
    return "The answer is simple. The one with POLKA DOTS.";
  } else if (input.includes("what color")) {
    return "brownish-purple mixed with deathly green and macaroni yellow.";
  } else if (input.includes("what size")) {
    return "What a FANTASTIC QUESTION! THe answer is LARGE.";
  } else if (input.includes("who")) {
    return "JESUS. That's who.";
  } else if (input.includes("what")) {
    return "JESUS is.";
  } else if (input.includes("which one")) {
    return "";
  } else if (input.includes("which type")) {
    return "Bruh.";
  } else if (input.includes("which kind")) {
    return "You know what??? I'm done. I quit. NO more questions. I'm out of here!";
  } else if (input.includes("which")) {
    return "The one with JESUS.";
  } else if (input.includes("where")) {
    return "Where JESUS is.";
  } else if (input.includes("when")) {
    return "When JESUS returns, obviously.";
  } else if (
    input === "how to blow up the moon?" ||
    input === "how do i blow up the moon?" ||
    input === "how can i blow up the moon?"
  ) {
    return "First, you’ll need to gather a trillion tons of TNT, a giant slingshot, and Jeff Bezos’ rocket for moon access. Then, assemble a committee of mad scientists, a wizard, and at least one chicken (for luck). Fire the TNT at the moon with the slingshot while the wizard chants “Boomus Lunaris Maximus.” Finally, watch as the moon politely declines to explode because it’s too classy for such nonsense, leaving the chicken as the only one who accomplished anything useful.";
  } else if (input.includes("how much")) {
    return "As much as you want :)";
  } else if (input.includes("how many")) {
    return "I dunno. Why would you expect me to know that??";
  } else if (input.includes("how long")) {
    return "Ummmmm. . . pretty long.";
  } else if (input.includes("how far")) {
    return "Interesting question! The answer is FAR.";
  } else if (input.includes("how old")) {
    return "4 years old.";
  } else if (input.includes("how big")) {
    return "As big as a big thing that is big.";
  } else if (input.includes("how small")) {
    return "As small as a small thing that is small.";
  } else if (input.includes("how fast")) {
    return "As fast as an introvert giving a presentation.";
  } else if (input.includes("how slow")) {
    return "As slow as your grandpa drives.";
  } else if (input.includes("how often")) {
    return "You know? That's a really good question. You should definetely look that up :)";
  } else if (input.includes("how come")) {
    return "Why do you always expect me to know stuff!?? You act like I know everything!";
  } else if (input.includes("how")) {
    return "Great question. The answer is JESUS.";
  } else if (input.includes("do you think")) {
    return "Yes. absolutely. The 2020 election was most definetely stolen.";
  } else if (
    input.includes("are") ||
    input.includes("was") ||
    input.includes("will be") ||
    input.includes("have")
  ) {
    return "What an intriguing question! It's great to see how inquizitive you are! The answer is. . . . . . uhhh. . . . . . i don't know. . . . . .*cries internally due to lack of information*";
  } else if (
    input.includes("had") ||
    input.includes("would") ||
    input.includes("might") ||
    input.includes("will")
  ) {
    return "That's a great question. I'm glad that you are interested in that topic. The answer is NO.";
  } else if (input.includes("is there")) {
    return "WOW! YOU'RE SO CURIOUS!!!!!!! I WISH I WAS AS INQUIZITIVE AS YOU!!!!! You ask SUCH good questions!!!  . . . . . . I don't know.";
  } else if (
    input.includes("is") ||
    input.includes("am") ||
    input.includes("shall")
  ) {
    return "That's a great question. I'm glad that you are interested in that topic. The answer is YES.";
  } else if (input.includes("should i")) {
    return "Absolutly! That's a great idea! In fact, that's the GREATEST IDEA I've ever heard! You should definitely do that!";
  } else if (
    input.includes("were") ||
    input.includes("has") ||
    input.includes("should") ||
    input.includes("could")
  ) {
    return "You know something. . . I don't really know. Why don't you google it or something.";
  } else if (
    input.includes("do") ||
    input.includes("did") ||
    input.includes("does")
  ) {
    return "Ha! What kind of question is that?  NO! obviously.";
  } else if (input.includes("could it be")) {
    return "No. absolutely not.";
  } else if (input.includes("can someone")) {
    return "Hypothetically. . . if all the variables are in place and well controlled. . . YES.";
  } else {
    return "JESUS is always the answer.";
  }
};
