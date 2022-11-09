multibtn.onclick = function(){
    document.getElementById('multiplication-table').innerHTML = "";
    var number = themultinumber.value;
    for (i =1; i<=10; i++){
        document.getElementById('multiplication-table').innerHTML +=
        `${number} * ${i} = ${number*i}<br>`;
    }
}


