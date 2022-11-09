
function rechercher(){
    let text = document.getElementById('text').value;
    let word = document.getElementById('word').value;
    let search = text.includes(word)

    if(search){
        ex7result = 'Le mot existe dans la phrase.'
        }
        else{
        ex7result = 'Le mot n\'existe pas dans la phrase.'
        }
    document.getElementById('ex7result').innerHTML = ex7result;
}
function supprimer(){
    let text = document.getElementById('text').value;
    let word = document.getElementById('word').value;
    let search = text.includes(word)
    let ex7result = text.replace(word,"")

    if(!search){
        ex7result = 'Le mot n\'existe pas dans la phrase.'
    }
    document.getElementById('ex7result').innerHTML = ex7result;
}