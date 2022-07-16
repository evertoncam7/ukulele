

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
        const p2 = `<p>Aqui em nossa plataforma você encontrará tudo que você precisa para aprender o básico para tocar um dos instruentos mais baratos e faceis de aprender que é o <strong>Ukulele</strong>.</p>`;

        descriptionInicio.innerHTML = p1+ " " +p2;
        
        const dica01 = componentDiv("dica");

        const screens01 = [
            {
                title:`Exercícios`,
                component:descriptionInicio
            },
            {
                title:`Dicas`,
                component:dica01
            }
        ]

        el.appendChild(componentTab_002(screens01));

    }else if(data.category == 'acordes') {
        
        el.innerHTML = "";

        const acordd2 = document.createElement("div");
        acordd2.setAttribute("class", "arc2")

        acordes(acordd2, dataset.maior, "Maior");
        acordes(acordd2, dataset.menor, "Menor");
        acordes(acordd2, dataset.maiorSustenido, "Maior Sustenido");
        acordes(acordd2, dataset.menorSustenido, "Menor Sustenido");
        acordes(acordd2, dataset.maiorBemol, "Maior Bemol");
        acordes(acordd2, dataset.menorBemol, "Menor Bemol");
    
        const dica02 = document.createElement("div");
        dica02.innerHTML = "Os acordes são conjuntos de notas tocadas simultaneamente";

        const screens02 = [
            {
                title:`Exercícios`,
                component:acordd2
            },
            {
                title:`Dicas`,
                component:dica02
            }
        ]

        el.appendChild(componentTab_002(screens02));

        $(".a").fadeIn().css({"display":"flex"});

    }else if(data.category == 'escalas'){

        el.innerHTML = "";


        const bxColumns = document.createElement("div");

        const bxScaleDescriptions = document.createElement("div");
        bxScaleDescriptions.innerHTML = "Escalas";

        const pp = document.createElement("div");
        pp.innerHTML = "Teste o seu conhecimento.";

        bxColumns.setAttribute("class", "bxColumns");
            const bxColumnsHeader = document.createElement("div");
            bxColumnsHeader.setAttribute("class", "bxColumnsHeader");

            const bxColumnsHeaderTab1 = document.createElement("div");
            // bxColumnsHeaderTab1.innerHTML = "Tom";

            const headerNotas = ['','C', 'D', 'E', 'F', 'G', 'A', 'B'];

            const select1 = document.createElement("select");

            headerNotas.forEach(function(r, i){
                
                const opton11 = document.createElement("option");
                opton11.setAttribute("value", r);
                opton11.innerHTML = r;

                select1.appendChild(opton11)
                bxColumnsHeaderTab1.appendChild(select1);

            });

            const bxColumnsHeaderTab2 = document.createElement("div");
            // bxColumnsHeaderTab2.innerHTML = "#/b";
                const select2 = document.createElement("select");
                const opton21 = document.createElement("option");
                opton21.setAttribute("value", "ESCOLHA");
                opton21.innerHTML = "";

                const accid = ['', '#', 'b'];

                accid.forEach(function(r, i){
                    const opton = document.createElement("option");
                    opton.setAttribute("value", r);
                    opton.innerHTML = r;

                    select2.appendChild(opton);
                });

                bxColumnsHeaderTab2.appendChild(select2);

            const bxColumnsHeaderTab3 = document.createElement("div");

            const headerScale = [
                '',
                'Maior',
                'Menor',
                'Pentatônica maior',
                'Pentatônica menor'
            ];

            const select3 = document.createElement("select");
            headerScale.forEach(function(r, i){

                const opton = document.createElement("option");
                opton.setAttribute("value", r);
                opton.innerHTML = r;

                select3.appendChild(opton)
                bxColumnsHeaderTab3.appendChild(select3);

            });

            // const bxColumnsHeaderTab4 = document.createElement("div");

            
            bxColumnsHeader.appendChild(bxColumnsHeaderTab1);
            bxColumnsHeader.appendChild(bxColumnsHeaderTab2);
            bxColumnsHeader.appendChild(bxColumnsHeaderTab3);
            // bxColumnsHeader.appendChild(bxColumnsHeaderTab4);
            
            bxColumns.appendChild(bxColumnsHeader);


        // Aqui é a listagem das notas antigas.

        // escalasData.map(function(value, index){
        //     escala(bxColumns, value);
        // });

        const screensScale = [
            {
                title:"Exercícios",
                component:bxColumns
            },
            {
                title:"GREGOS",
                component:bxScaleDescriptions
            },
            {
                title:`<span class="icon-clipboard-notes"></span>`,
                component:pp
            }
        ];

        el.appendChild(componentTab_002(screensScale));
    
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

        const bxExer = document.createElement("div");
        // bxExer.setAttribute("class", "bxExer");

        const bxExerDes = document.createElement("div");
        bxExerDes.innerHTML = "Tenha um hábito de treino dia a dia.";
      
        let ex = "";
        console.log("------------")
        if (exercicio(bxExer)) {
            ex = exercicio(bxExer);
        }

        const screensExer = [
            {
                title:"Exercícios",
                component:ex
            },
            {
                title:"Dicas",
                component:bxExerDes
            },
        ];



        
        // // // optionsExer
        el.appendChild(componentTab_002(screensExer));
        

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

    return element;

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