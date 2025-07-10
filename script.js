// DOM Elements
const inputWrapper = document.querySelector(".search-input");
const answerWrapper = document.querySelector(".answer");

// Variables
let isTyping = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !isTyping) {
    e.preventDefault();
    isTyping = true;

    const userInput = inputWrapper.value.trim().toLowerCase();
    const response = getResponse(userInput);

    answerWrapper.textContent = "";

    for (let i = 0; i < response.length; i++) {
      setTimeout(() => {
        answerWrapper.textContent += response.charAt(i);
        if (i === response.length - 1) isTyping = false;
      }, 30 * i);
    }
  }
});

function getResponse(input) {
  const patterns = [
    {
      test: (str) => !str.includes("?"),
      response:
        "Bruh. Where is your question mark? Don't forget to include your question mark! Haven't you learned anything!? IF YOU ARE ASKING A QUESTION, USE A QUESTION MARK!!!!!",
    },
    { test: /^why\?$/, response: "Why what? Be specific, Bob." },
    { test: /why/, response: "Because of JESUS." },
    {
      test: /^what time is it\?$/,
      response: "It's time for you to get a watch, bruh.",
    },
    { test: /what day is it/, response: "It's the Lord's day." },
    {
      test: /what time/,
      response: "When the big hand faces UP and the little hand faces UP.",
    },
    {
      test: /what kind/,
      response: "Either the one with bubbles or the one with pineapple.",
    },
    {
      test: /what type/,
      response: "The answer is simple. The one with POLKA DOTS.",
    },
    {
      test: /what color/,
      response: "brownish-purple mixed with deathly green and macaroni yellow.",
    },
    {
      test: /what size/,
      response: "What a FANTASTIC QUESTION! THe answer is LARGE.",
    },
    { test: /who/, response: "JESUS. That's who." },
    { test: /what/, response: "JESUS is." },
    { test: /which one/, response: "" },
    { test: /which type/, response: "Bruh." },
    {
      test: /which kind/,
      response:
        "You know what??? I'm done. I quit. NO more questions. I'm out of here!",
    },
    { test: /which/, response: "The one with JESUS." },
    { test: /where/, response: "Where JESUS is." },
    { test: /when/, response: "When JESUS returns, obviously." },
    {
      test: (str) =>
        str === "how to blow up the moon?" ||
        str === "how do i blow up the moon?" ||
        str === "how can i blow up the moon?",
      response:
        "First, you’ll need to gather a trillion tons of TNT, a giant slingshot, and Jeff Bezos’ rocket for moon access. Then, assemble a committee of mad scientists, a wizard, and at least one chicken (for luck). Fire the TNT at the moon with the slingshot while the wizard chants “Boomus Lunaris Maximus.” Finally, watch as the moon politely declines to explode because it’s too classy for such nonsense, leaving the chicken as the only one who accomplished anything useful.",
    },
    { test: /how much/, response: "As much as you want :)" },
    {
      test: /how many/,
      response: "I dunno. Why would you expect me to know that??",
    },
    { test: /how long/, response: "Ummmmm. . . pretty long." },
    { test: /how far/, response: "Interesting question! The answer is FAR." },
    { test: /how old/, response: "4 years old." },
    { test: /how big/, response: "As big as a big thing that is big." },
    { test: /how small/, response: "As small as a small thing that is small." },
    {
      test: /how fast/,
      response: "As fast as an introvert giving a presentation.",
    },
    { test: /how slow/, response: "As slow as your grandpa drives." },
    {
      test: /how often/,
      response:
        "You know? That's a really good question. You should definetely look that up :)",
    },
    {
      test: /how come/,
      response:
        "Why do you always expect me to know stuff!?? You act like I know everything!",
    },
    { test: /how/, response: "Great question. The answer is JESUS." },
    {
      test: /do you think/,
      response:
        "Yes. absolutely. The 2020 election was most definetely stolen.",
    },
    {
      test: /(are|was|will be|have)/,
      response:
        "What an intriguing question! It's great to see how inquizitive you are! The answer is. . . . . . uhhh. . . . . . i don't know. . . . . .*cries internally due to lack of information*",
    },
    {
      test: /(had|would|might|will)/,
      response:
        "That's a great question. I'm glad that you are interested in that topic. The answer is NO.",
    },
    {
      test: /is there/,
      response:
        "WOW! YOU'RE SO CURIOUS!!!!!!! I WISH I WAS AS INQUIZITIVE AS YOU!!!!! You ask SUCH good questions!!!  . . . . . . I don't know.",
    },
    {
      test: /(is|am|shall)/,
      response:
        "That's a great question. I'm glad that you are interested in that topic. The answer is YES.",
    },
    {
      test: /should i/,
      response:
        "Absolutly! That's a great idea! In fact, that's the GREATEST IDEA I've ever heard! You should definitely do that!",
    },
    {
      test: /(were|has|should|could)/,
      response:
        "You know something. . . I don't really know. Why don't you google it or something.",
    },
    {
      test: /(do|did|does)/,
      response: "Ha! What kind of question is that?  NO! obviously.",
    },
    { test: /could it be/, response: "No. absolutely not." },
    {
      test: /can someone/,
      response:
        "Hypothetically. . . if all the variables are in place and well controlled. . . YES.",
    },
  ];

  for (const { test, response } of patterns) {
    if (typeof test === "function" ? test(input) : test.test(input)) {
      return response;
    }
  }
  return "JESUS is always the answer.";
}
