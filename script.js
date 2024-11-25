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

// let getResponse = function (input) {
//   let firstWord = input.trim().split(" ")[0].toLowerCase(); // Get the first word and convert it to lowercase

//   if (!input.includes("?")) {
//     return "Bruh. Where is your question mark? Don't forget to include your question mark! Haven't you learned anything!? IF YOU ARE ASKING A QUESTION, USE A QUESTION MARK!!!!!";
//   } else if (firstWord === "why") {
//     return "Why what? Be specific, Bob.";
//   } else if (firstWord === "what") {
//     if (input.includes("time is it")) {
//       return "It's time for you to get a watch, bruh.";
//     } else if (input.includes("day is it")) {
//       return "It's the Lord's day.";
//     } else if (input.includes("kind")) {
//       return "Either the one with bubbles or the one with pineapple.";
//     } else if (input.includes("type")) {
//       return "The answer is simple. The one with POLKA DOTS.";
//     } else if (input.includes("color")) {
//       return "brownish-purple mixed with deathly green and macaroni yellow.";
//     } else if (input.includes("size")) {
//       return "What a FANTASTIC QUESTION! The answer is LARGE.";
//     }
//     return "JESUS is.";
//   } else if (firstWord === "who") {
//     return "JESUS. That's who.";
//   } else if (firstWord === "which") {
//     if (input.includes("one")) {
//       return "";
//     } else if (input.includes("type")) {
//       return "Bruh.";
//     } else if (input.includes("kind")) {
//       return "You know what??? I'm done. I quit. NO more questions. I'm out of here!";
//     }
//     return "The one with JESUS.";
//   } else if (firstWord === "where") {
//     return "Where JESUS is.";
//   } else if (firstWord === "when") {
//     return "When JESUS returns, obviously.";
//   } else if (firstWord === "how") {
//     if (input.includes("much")) {
//       return "As much as you want :)";
//     } else if (input.includes("many")) {
//       return "I dunno. Why would you expect me to know that??";
//     } else if (input.includes("long")) {
//       return "Ummmmm. . . pretty long.";
//     } else if (input.includes("far")) {
//       return "Interesting question! The answer is FAR.";
//     } else if (input.includes("old")) {
//       return "4 years old.";
//     } else if (input.includes("big")) {
//       return "As big as a big thing that is big.";
//     } else if (input.includes("small")) {
//       return "As small as a small thing that is small.";
//     } else if (input.includes("fast")) {
//       return "As fast as an introvert giving a presentation.";
//     } else if (input.includes("slow")) {
//       return "As slow as your grandpa drives.";
//     } else if (input.includes("often")) {
//       return "You know? That's a really good question. You should definitely look that up :)";
//     } else if (input.includes("come")) {
//       return "Why do you always expect me to know stuff!?? You act like I know everything!";
//     }
//     return "Great question. The answer is JESUS.";
//   } else if (["are", "was", "will", "have"].includes(firstWord)) {
//     return "What an intriguing question! It's great to see how inquisitive you are! The answer is. . . . . . uhhh. . . . . . I don't know. . . . . .*cries internally due to lack of information*";
//   } else if (["had", "would", "might", "will"].includes(firstWord)) {
//     return "That's a great question. I'm glad that you are interested in that topic. The answer is NO.";
//   } else if (firstWord === "is" && input.includes("there")) {
//     return "WOW! YOU'RE SO CURIOUS!!!!!!! I WISH I WAS AS INQUIZITIVE AS YOU!!!!! You ask SUCH good questions!!!  . . . . . . I don't know.";
//   } else if (["is", "am", "shall"].includes(firstWord)) {
//     return "That's a great question. I'm glad that you are interested in that topic. The answer is YES.";
//   } else if (firstWord === "should" && input.includes("i")) {
//     return "Absolutely! That's a great idea! In fact, that's the GREATEST IDEA I've ever heard! You should definitely do that!";
//   } else if (["were", "has", "should", "could"].includes(firstWord)) {
//     return "You know something... I don't really know. Why don't you Google it or something.";
//   } else if (firstWord === "do" && input.includes("you think")) {
//     return "Yes. absolutely. The 2020 election was most definitely stolen.";
//   } else if (["do", "did", "does"].includes(firstWord)) {
//     return "Ha! What kind of question is that? NO! obviously.";
//   } else if (firstWord === "could" && input.includes("it be")) {
//     return "No. absolutely not.";
//   } else if (firstWord === "can" && input.includes("someone")) {
//     return "Hypothetically. . . if all the variables are in place and well controlled. . . YES.";
//   } else {
//     return "JESUS is always the answer.";
//   }
// };
