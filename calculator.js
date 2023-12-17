const defaultNum = 1;
// 이렇게 defaultNum을 지정해두면,
// 하나의 파라미터로 함수를 호출했을 때 두번째 파라미터로 defaultNum이 들어감

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

module.exports = {defaultNum, add, minus, multiply, divide}