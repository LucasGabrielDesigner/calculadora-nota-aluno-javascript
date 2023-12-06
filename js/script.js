function MediaAluno(){
    var nome = parseFloat(document.getElementById("NomeAluno").value);
    var trabalho = parseFloat(document.getElementById("trabalho").value);
    var teste = parseFloat(document.getElementById("teste").value);
    var prova = parseFloat(documment.getElementById("prova").value);
    var materias = document.getElementById("materias");

    var media = (trabalho + teste + prova) / 3;

   document.write("Sua nota final é: " ,media);
    if(media >= 6){
        document.getElementById("resultado").innerHTML = nome + "<label>Parabéns, você passou!</label>" ;
        else{
            document.getElementById("resultado").innerHTML = nome + "<label>Infelizmente, você terá que repetir o ano letivo.</label>"
        }
    }

}
