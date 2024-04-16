const input = document.querySelector('input')
const btn = document.getElementById('button-addon').addEventListener('click', () => {
    const inputValue = input.value.trim()
    const isPalid = palidromCheck(inputValue)
    console.log(isPalid);
})

function palidromCheck(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '')
    const iLast = str.length - 1
    
    if(str === '') {
        return 'Пустое поле ввода. Введите слово!'
    }
    for (let i = 0; i < str.length / 2; i++) {
        if ( str[i] !== str[iLast - i]) {
            return 'Это не полиндром'
        }
    }
    return 'Это полиндром'
}

// console.log(palidromCheck());
