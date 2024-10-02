let coins = localStorage.getItem('coins') ? parseFloat(localStorage.getItem('coins')) : 0; // Кількість монет з localStorage
let clickMultiplier = 1; // Базове значення монет за клік

// Відображення початкової кількості монет
document.getElementById('coins').innerText = coins.toFixed(1); // Відображаємо кількість монет з 1 десятковим знаком

// Обробник для кнопки кліку
document.getElementById('clickButton').addEventListener('click', () => {
    coins += clickMultiplier * 0.1; // Додаємо 0.1 монети за клік, зважаючи на прокачку
    document.getElementById('coins').innerText = coins.toFixed(1); // Оновлюємо відображення монет
    localStorage.setItem('coins', coins); // Зберігаємо кількість монет у localStorage
});

// Обробник для кнопки прокачки
document.getElementById('upgradeButton').addEventListener('click', () => {
    let upgradeCost = coins > 1000 ? 1000 : 10; // Вартість прокачки: 1000, якщо монет більше 1000, або 10
    if (coins >= upgradeCost) { // Перевіряємо, чи вистачає монет на прокачку
        coins -= upgradeCost; // Витрачаємо монети
        clickMultiplier++; // Збільшуємо значення монет за клік
        document.getElementById('coins').innerText = coins.toFixed(1); // Оновлюємо відображення монет
        localStorage.setItem('coins', coins); // Зберігаємо кількість монет у localStorage
    } else {
        alert('Не достатньо монет для прокачки!');
    }
});
