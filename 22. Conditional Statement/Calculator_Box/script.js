document.getElementById("add").onclick = function () {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").textContent = "Result: " + (num1 + num2);
};

document.getElementById("subtract").addEventListener("click", function () {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (num1 - num2);
});

document.getElementById("multiply").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + (num1 * num2);
};
document.getElementById("divide").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("result").textContent = "Result: " + (num1 / num2);
    } else {
        document.getElementById("result").textContent = "Result: Cannot divide by zero";
    }
};

document.getElementById("modulus").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("result").textContent = "Result: " + (num1 % num2);
    } else {
        document.getElementById("result").textContent = "Result: Cannot perform modulus by zero";
    }
};