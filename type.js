document.addEventListener("DOMContentLoaded", function () {

  // ---------- TYPING EFFECT ----------
  const heading = document.getElementById("heading");
  const subheading = document.getElementById("subheading");

  if (heading && subheading) {
    const headingText = "I'm Samhita Tavutu.";
    const subheadingText = "Linux & Systems developer | Open to freelancing.";

    function typeText(element, text, speed, callback) {
      let i = 0;
      element.innerHTML = "";

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
  }

  // ---------- HAMBURGER ----------
  const hamburger = document.querySelector(".hamburger");
  const sidePanel = document.getElementById("sidePanel");
  const closeBtn = document.getElementById("closeBtn");

  if (hamburger && sidePanel && closeBtn) {
    hamburger.addEventListener("click", function () {
      sidePanel.style.left = "0";
    });

    closeBtn.addEventListener("click", function () {
      sidePanel.style.left = "-250px";
    });
  }

});
