const heading = document.getElementById("heading");
const subheading = document.getElementById("subheading");

const headingText = "Hi, I'm Samhita.";
const subheadingText = "Cybersecurity enthusiast building secure systems.";

function typeText(element, text, speed, callback) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

typeText(heading, headingText, 100, () => {
  typeText(subheading, subheadingText, 50);
});
