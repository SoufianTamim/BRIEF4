function validerSearch() {
    document.getElementById('inputsSearch').innerHTML = ''
    var tailleRecherche = parseInt(document.getElementById('tailleRecherche').value)
    for(x=1 ; x<= tailleRecherche ;x++){
        var inp = document.createElement('INPUT')
        inp.setAttribute('id', 'inputSearch'+x)
        document.getElementById('inputsSearch').appendChild(inp)
    }
}
function search(){
    document.getElementById('searchResult').innerHTML = ''
    var tailleRecherche = parseInt(document.getElementById('tailleRecherche').value)
    var searchInp = parseInt(document.getElementById('searchInp').value)
    const arraySearch = []
    for (let i = 1; i <= tailleRecherche; i++) {
        arraySearch.push(document.getElementById('inputSearch'+i).value)
    }
    for (let i = 0; i < tailleRecherche; i++){
        let arrayValue = arraySearch.at(i)
        var ifTrue;
        if(arrayValue == searchInp){
            ifTrue = true
            break
        }else{
            ifTrue = false
        }
    }
    if(ifTrue){
        var trueSearch = 'la valeur existe dans le tableau'
    }else{
        var trueSearch = 'la valeur n`\'existe pas dans le tableau'
    }
    console.log(trueSearch)
document.getElementById('searchResult').innerHTML = trueSearch

}