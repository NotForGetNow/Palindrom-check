const input = document.querySelector('input');
const resultElement = document.createElement('p');
resultElement.classList.add('d-flex', 'justify-content-center', 'mt-3'); // Добавляем класс 'd-none' к созданному h3
const resultsDiv = document.querySelector('.results');
resultsDiv.parentNode.insertBefore(resultElement, resultsDiv.nextSibling);

const btn = document.getElementById('button-addon').addEventListener('click', () => {
    const inputValue = input.value.trim();
    const isPalid = palidromCheck(inputValue);
    resultElement.textContent = isPalid;
});

function palidromCheck(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const iLast = str.length - 1;
    
    if(str === '') {
        return 'Пустое поле ввода. Введите слово!';
    }
    for (let i = 0; i < str.length / 2; i++) {
        if ( str[i] !== str[iLast - i]) {
            return 'Это не полиндром';
        }
    }
    return 'Это полиндром';
}
