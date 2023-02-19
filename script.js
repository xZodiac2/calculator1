const buttons = document.querySelectorAll('.button')
const answerField = document.querySelector('.answer')
let a = ''
let b = ''
let sign = ''
let answer = 0
let finish = false

function calculate() {
    finish = true
    switch (sign) {
        case '+':
            answerField.textContent = Number(a) + Number(b)
            break
        case '-':
            answerField.textContent = a - b
            break
        case '*':
            answerField.textContent = a * b

            break
        case '/':
            answer = a / b
            answer = String(answer)
            answerField.textContent = answer.slice(0, 10)
            break
        case '%':
            answerField.textContent = a / 100 * b
            break
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.classList.contains('number')) {
            if (finish === false) {
                if (a === '' || sign === '') {
                    a += button.value
                    answerField.textContent = a
                } else {
                    answerField.textContent = ''
                    b += button.value
                    answerField.textContent = b
                }
            } else if (finish === true) {
                a = Number(answerField.textContent)
                b = button.value
                answerField.textContent = b
                finish = false
            }
        }
        if (button.classList.contains('sign') && !button.classList.contains('equally')) {
            if (a != '' && b != '') {
                calculate()
            }
            sign = button.value
        }
        if (button.classList.contains('equally')) {
            calculate()
        }
        if (button.classList.contains('clear-all')) {
            a = ''
            b = ''
            finish = false
            sign = ''
            answerField.textContent = '0'
            answer = ''
        }
    })
})

