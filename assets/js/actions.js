

let oldStatus = [];


$(".bar").on("click", function(){

    if ($(".box-links-instruments").css("display") == "none") {
        $(".box-links-instruments").fadeIn(1000);
        $(".box-links-instruments").css({"display":"flex"})
    }else{
        $(".box-links-instruments").fadeOut(500);
    }
    
});

$(".title-controll").on("click", function(){

    $("#container-bx-nota-id").text("");

    oldState.scale.map(function(value, index){
        $("#s-"+value).remove();
    });

    $(".title-controll").removeClass("active-button-controll");
    $(this).addClass("active-button-controll");

    const data = $(this).data();
    const el = document.getElementById("box-display-id");
    el.innerHTML = "";

    if (data.category == 'acordes') {

        acordes(el, dataset.maior, "Maior");
        acordes(el, dataset.menor, "Menor");

        acordes(el, dataset.maiorSustenido, "Maior Sustenido");
        acordes(el, dataset.menorSustenido, "Menor Sustenido");

        acordes(el, dataset.maiorBemol, "Maior Bemol");
        acordes(el, dataset.menorBemol, "Menor Bemol");


        $(".a").fadeIn().css({"display":"flex"});

    }else if(data.category == 'escalas'){

        const bxColumns = document.createElement("div");
        bxColumns.setAttribute("class", "bxColumns");

        escalasData.map(function(value, index){
            escala(bxColumns, value);
        });

        el.appendChild(bxColumns);
        $(".bxColumns").fadeIn().css({"display":"flex"});
    }
    
});

function acordes(element, data, title){

    const a = document.createElement("div");
    a.setAttribute("class", "a");
    a.innerHTML = `<div class='title-n'>${title}</div>`;

    data.map((item) => {

        const n = document.createElement("div");
        n.setAttribute("class", "n");
        n.setAttribute("id", item);
        n.innerHTML = item;
        n.addEventListener("click", function(){

            $(".n").removeClass("actve-button-notas");
            $(this).addClass("actve-button-notas");

            oldStatus.map(function (value, index){
                    
                $("#n-"+value).remove();

            });

            const filter = bd.filter((el) => {
                return el.acorde == item;
            });

            if (filter.length) {

                $("#container-bx-nota-id").text(filter[0].acorde);
                $("#container-bx-nota-id").css({fontSize:"1.5em"});
                
                $(".nameCordasClass").css("color", "#fff");
                filter[0].notas.map((value, index) => {
                    
                    const id = value.position;
                    oldStatus.push(id);

                        const nb = document.createElement("div");
                        if (value.pointer == 'boll') {
                            nb.setAttribute("class", "nota-boll");
                        }else{
                            nb.setAttribute("class", "nota-rect");
                        }
                        nb.setAttribute("id", "n-"+id);

                        nb.addEventListener("click", function(){
                        
                        });

                        if (value.position != "40" && value.position != "20" && value.position != "30" && value.position != "40") {
                            document.getElementById(id).appendChild(nb);
                        }else{
                            document.getElementById(id).style.color = "#72b01d";
                        }
                    
                    if (value.pointer == 'boll') {
                        $(".nota-boll").fadeIn();
                    }else{
                        $(".nota-rect").fadeIn();
                    }
                });
            }

            const elMain = document.getElementById("main-2-id");
            elMain.scrollLeft = filter[0].scrollEl;

        })
        a.appendChild(n);

    });
    
    element.appendChild(a);

    return true;

}

// $("body").on("click", ".n", function(){
//     alert("Deu certo!");
// });