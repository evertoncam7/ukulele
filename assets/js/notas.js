
const notas = {
    0:["G", "F#/Gb", "F", "E", "D#/Eb", "D", "C#/Db", "C", "B", "A#/Bb", "A", "G#/Ab"],
    1:["C", "B", "A#/Bb", "A", "G#/Ab", "G", "F#/Gb", "F", "E", "D#/Eb", "D", "C#/Db"],
    2:["E", "D#/Eb", "D", "C#/Db", "C", "B", "A#/Bb", "A", "G#/Ab", "G", "F#/Gb", "F"],
    3:["A", "G#/Ab", "G", "F#/Gb", "F", "E", "D#/Eb", "D", "C#/Db", "C", "B", "A#/Bb"]
}




function notass(){

    $("#container-bx-nota-id").text(" ");
    oldStatus.map(function (value, index){
        $("#n-"+value).remove();
    });
    
    const ccc = qsall(".column_notas");
    ccc.forEach(function(item, indice){

        casa = item.querySelectorAll(".casa_notas");
        casa.forEach(function(item2, indice2){

            const bl = document.createElement("div");
            bl.setAttribute("class", "bl");
            bl.setAttribute("id", "notas_"+indice+"_"+indice2);

            bl.innerHTML = notas[indice][indice2];

            item2.appendChild(bl);
            statesOld.notas.push("notas_"+indice+"_"+indice2);
            // console.log(notas[indice]);

        });


        
    

        
    });

    console.log(statesOld);

    

}
