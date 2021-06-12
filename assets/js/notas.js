
const notas = {
    0:["G", "F#", "F", "E", "D#", "D", "C#", "C", "B", "A#", "A", "G#"],
    1:["C", "B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#"],
    2:["E", "D#", "D", "C#", "C", "B", "A#", "A", "G#", "G", "F#", "F"],
    3:["A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C", "B", "A#"]
}


function notass(){

    $(".nameCordasClass").css("color", "#fff");

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
