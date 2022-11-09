function tri(table){
    for(var i = 0;i<table.length;i++){
        for(var j= i+1;j<table.length;j++){
            if(table[i]>table[j]){  
                var swap = table[i];
                table[i] = table[j];
                table[j] = swap;
            }
        }
    }
}
function  makethetable(){
tableau.innerHTML = "";
var sizeofthetable = Number(document.getElementById("sizeofthetable").value); 
for( i = 1 ; i < sizeofthetable + 1 ; i++ ){
    tableau.innerHTML += '  <input class="inputstyle" type="text" id="tableid'+i+'" >';
}
}
const arraydata = [];
function  tritable(){
var sizeofthetable = Number(document.getElementById("sizeofthetable").value);
for( i = 1 ; i < sizeofthetable + 1 ; i++ ){
    arraydata.push( Number( document.getElementById("tableid"+i).value ) ) ;
}
tri(arraydata);
tableau2.innerHTML = "";
for( i = 1 ; i < sizeofthetable + 1 ; i++ ){
    tableau2.innerHTML += '  <input class="inputstyle" type="text" id="table2id'+i+'" >';
}
for( i = 1 ; i < sizeofthetable + 1 ; i++ ){
    document.getElementById("table2id"+i).value = arraydata[i - 1];
}
}
