// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  if (numbers.length === 0) return undefined; // Обробка порожнього масиву
  
  let max = numbers[0]; // Припускаємо, що перший елемент - найбільший
  
  for (let i = 1; i < numbers.length; i++) {
    // Якщо поточний елемент більший за max, оновлюємо max
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;