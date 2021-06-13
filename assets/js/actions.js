

let oldStatus = [];


// $(".bar").on("click", function(){

//     if ($(".box-links-instruments").css("display") == "none") {
//         $(".box-links-instruments").fadeIn(1000);
//         $(".box-links-instruments").css({"display":"flex"})
//     }else{
//         $(".box-links-instruments").fadeOut(500);
//     }
    
// });

const el = document.getElementById("box-display-id");

function activeButtons(){

    $("#container-bx-nota-id").text("");

    oldState.scale.map(function(value, index){
        $("#s-"+value).remove();
    });

    $(".title-controll").removeClass("active-button-controll");
    $(this).addClass("active-button-controll");

    const data = $(this).data();
    
    if (data.category == "inicio") {
        el.innerHTML = "";
        removeStatesNotas();
        removeExercicio();

        const descriptionInicio = document.createElement("div");
        descriptionInicio.setAttribute("class", "descriptionInicio");
        const p1 = `<p>Você gostaria de aprender tocar um instrumento para se divertir entre amigos ou até mesmo seguir uma carreira profissional na música, mas não sabe se isso é para você ou não quer gastar uma grana no início para descobrir se gosta?</p>`;
        const p2 = `<p>Aqui em nossa plataforma você encontrará tudo que você precisa para aprender o básico para tocar um dos instruentos mais baratos e faceis de aprender que é o <strong>Ukulelê</strong>.</p>`;

        descriptionInicio.innerHTML = p1+ " " +p2;
        el.appendChild(descriptionInicio);



    }else if(data.category == 'acordes') {
        el.innerHTML = "";
        

        acordes(el, dataset.maior, "Maior");
        acordes(el, dataset.menor, "Menor");
        acordes(el, dataset.maiorSustenido, "Maior Sustenido");
        acordes(el, dataset.menorSustenido, "Menor Sustenido");
        acordes(el, dataset.maiorBemol, "Maior Bemol");
        acordes(el, dataset.menorBemol, "Menor Bemol");

        $(".a").fadeIn().css({"display":"flex"});

    }else if(data.category == 'escalas'){
        el.innerHTML = "";

        const bxColumns = document.createElement("div");
        bxColumns.setAttribute("class", "bxColumns");

        escalasData.map(function(value, index){
            escala(bxColumns, value);
        });

        el.appendChild(bxColumns);
        $(".bxColumns").fadeIn().css({"display":"flex"});

    }else if(data.category == 'notas'){
        
        if (!qs(".bl")) {
            el.innerHTML = "";
            notass();
            const descriptionNotas = document.createElement("div");
            descriptionNotas.setAttribute("class", "descriptionNotas");
            descriptionNotas.innerHTML = "Este mapa de notas mostra as posições que cada nota tem ao longo do braço do Ukulelê";
            el.appendChild(descriptionNotas);
        }
    }else if(data.category == "exercicios"){

        el.innerHTML = "";
        removeStatesNotas();

        exercicio(el);

    }


}

$(".title-controll").on("click", activeButtons);

function acordes(element, data, title){

    removeStatesNotas();

    const a = document.createElement("div");
    a.setAttribute("class", "a");

        const atb = document.createElement("div");
        atb.setAttribute("class", "title-nb");

            const at = document.createElement("div");
            at.setAttribute("class", "title-n");
            at.innerHTML = title;

            const ap = document.createElement("div");
            ap.setAttribute("class", "ap");
            ap.setAttribute("id", "id_positions");

            atb.appendChild(at);
            atb.appendChild(ap);

    a.appendChild(atb);

    data.map((item) => {

        const n = document.createElement("div");
        n.setAttribute("class", "n");
        n.setAttribute("id", item);
        n.innerHTML = item;
        n.addEventListener("click", function(){

            qsall(".ap").forEach(function(el){
                el.innerHTML = "";
            });

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

                $("#main-2-id").animate({scrollLeft: filter[0].notas[0].scroll }, 500, function(){
                            
                });

                filter[0].notas[0].n.map(function(value, index){
                    button(value, index, filter[0].acorde);
                });

                // document.getElementById("id_positions").innerHTML = "";
                ap.innerHTML = "";

                filter[0].notas.map((value, index) => {
                    

                    const textPos = document.createElement("div");
                    textPos.setAttribute("class", "textPos");
                    textPos.innerHTML = value.pos;
                    textPos.addEventListener("click", function(){

                        $(".nameCordasClass").css("color", "#fff");

                        $(".textPos").removeClass("activePos");
                        $(this).addClass("activePos");

                        oldStatus.map(function (value, index){
                            $("#n-"+value).remove();
                        });

                   
                        $("#main-2-id").animate({scrollLeft: value.scroll }, 500, function(){
                            
                        });

                        value.n.map(function(value, index){

                            button(value, index,filter[0].acorde);

                        });
                    })

                    
                    ap.appendChild(textPos);
                    
                    
                });

                $(".textPos").eq(0).addClass("activePos");
               
            }

            const elMain = document.getElementById("main-2-id");
            elMain.scrollLeft = filter[0].scrollEl;

        })
        a.appendChild(n);

    });
    
    element.appendChild(a);

    return true;

}

function button(value, index, tom){


    const id = value.position;
    oldStatus.push(id);

    const nb = document.createElement("div");
    if (value.pointer == 'boll' && tom == value.nota) {
        nb.setAttribute("class", "nota-boll nota-boll-tom");
    }else if(value.pointer == 'boll') {
        nb.setAttribute("class", "nota-boll");
    }else{
        nb.setAttribute("class", "nota-rect");
    }
    nb.setAttribute("id", "n-"+id);
    nb.innerHTML = value.nota;

    nb.addEventListener("click", function(){
        
        const scl = $("#main-2-id").scrollLeft();
        alert(scl);

    });

    if (value.position != "40" && value.position != "20" && value.position != "30" && value.position != "10") {
        document.getElementById(id).appendChild(nb);
    }else{
        document.getElementById(id).style.color = "#72b01d";
    }
    
    if (value.pointer == 'boll') {
        $(".nota-boll").fadeIn().css({"display":"flex"});
    }else{
        $(".nota-rect").fadeIn();
    }
}

// $("body").on("click", ".n", function(){
//     alert("Deu certo!");
// });