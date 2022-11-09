function losange(){
document.getElementById('losangeError').innerHTML = ''
document.getElementById('paragraphs').innerHTML = ''
let taille = parseInt(document.getElementById('tailleLosange').value);
let L = (taille+1)/2
if(taille % 2 != 0){
  /* permier paragraph */
for(x=1 ; x<= taille ;x++){
    var paragraph = document.createElement('p')
paragraph.setAttribute('id', 'paragraph'+x)
document.getElementById('paragraphs').appendChild(paragraph)
}
for(i=1 ; i<=L ; i++){
    var stars =''
    let space =''
    for(j=1 ; j<=L-i ; j++){
        space += '&nbsp;'
}
    for(k=1 ; k<=2*i-1 ; k++){
        stars += '*'
    }
    document.getElementById('paragraph'+i).innerHTML = space+stars;
}
/*deuxieme paragraph*/
    let stars2 = stars
    let space = ''
for(i=1 ; i<=taille-L ; i++){
    for(i= L+1 ; i <= taille ; i++){
        for(j=taille-L ; j<=taille-L; j++){
            space += '&nbsp;'
        }
        stars2 = stars2.replace('**','')
        document.getElementById('paragraph'+i).innerHTML = space+stars2;
    }
}
}else{
    document.getElementById('losangeError').innerHTML = 'Veuillez saisir un nombre impair.'
}
}