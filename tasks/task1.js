// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  // Список голосних (великі та малі літери)
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Перевіряємо, чи є символ у списку голосних
    if (vowels.includes(char)) {
      result += '*';
    } else {
      result += char;
    }
  }
  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;