// 使用CommonJS的模块化规范
function add(num1, num2) {
    return num1 + num2
}

function mul(num1, num2) {
    return num1 * num2
}

module.exports = {
    add,
    mul
}