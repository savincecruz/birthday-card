window.onload = function () {
  const catImg = document.getElementById("cat-img");
  const meowSound = document.getElementById("meow-sound");
  const card = document.getElementById("card");
  const startScreen = document.getElementById("start-screen");

  catImg.addEventListener("click", () => {
    // 🐱 Play meow sound
    meowSound.currentTime = 0;
    meowSound.play();

    // 🎉 Launch confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 🎁 Reveal the card
    startScreen.classList.add("hidden");
    card.style.display = "block";
  });
};