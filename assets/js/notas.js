

function notass(){

    removeExercicio();

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
            bl.addEventListener("click", function(){
                alert($(this).parent().attr("id"));
            });

            item2.appendChild(bl);
            statesOld.notas.push("notas_"+indice+"_"+indice2);
            // console.log(notas[indice]);

        });

    });

    console.log(statesOld);

}
