// Typing Effect
const typingText = document.getElementById("typing-text");
const words = ["Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = words[wordIndex];

function typeEffect() {
  if (charIndex < currentWord.length) {
    typingText.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    currentWord = words[wordIndex];
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
