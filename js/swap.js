let number
function swap() {
    number = document.getElementById("num1swap").value;
    document.getElementById("num1swap").value = document.getElementById("num2swap").value;
    document.getElementById("num2swap").value = number;
}