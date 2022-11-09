document.getElementById('produit').onclick = function calc() {
    console.log(n1.value, n2.value);
    let result = n1.value * n2.value ;
    document.getElementById('result').value = result ;
}
document.getElementById('somme').onclick = function calc() {
    let result = +n1.value + +n2.value ;
    document.getElementById('result').value = result ;
}
document.getElementById('soustraction').onclick = function calc() {
    let result = n1.value -n2.value ;
    document.getElementById('result').value = result ;
}
document.getElementById('division').onclick = function calc() {
    let result = n1.value /n2.value ;
    document.getElementById('result').value = result ;
}




function myFunction(){

    var navbar = document.getElementById('iframe');
    navbar.classList.toggle('show');

}



