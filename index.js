function rollDice() {
    // Генерація випадкових чисел від 1 до 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    // Формування шляхів до зображень
    const diceImage1 = "images/dice" + randomNumber1 + ".png";
    const diceImage2 = "images/dice" + randomNumber2 + ".png";
  
    // Зміна зображень
    document.querySelector(".img1").setAttribute("src", diceImage1);
    document.querySelector(".img2").setAttribute("src", diceImage2);
  
    // Зміна заголовка в залежності від результату
    const heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      heading.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      heading.innerHTML = "Player 2 Wins! 🚩";
    } else {
      heading.innerHTML = "Draw!";
    }
  }
  
  // Коли сторінка завантажується — одразу кидаємо кубики
  rollDice();
  
  // Кнопка Refresh
  document.getElementById("refreshButton").addEventListener("click", rollDice);
  
  // Пробіл для оновлення
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      rollDice();
    }
  });
  
