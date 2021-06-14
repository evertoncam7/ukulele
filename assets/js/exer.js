

function exercicio(el){

    removeExercicio();

    let len = 0;
    

    const bxE = document.createElement("div");
    bxE.setAttribute("class", "bxE");

    exerc.map(function(value, index){

        const bxBtnExerc = document.createElement("div");
        bxBtnExerc.setAttribute("class", "bxBtnExerc");

            const btnExerc = document.createElement("div");
            btnExerc.setAttribute("class", "btnExerc");
            btnExerc.innerHTML = value.name;

            const descExerc = document.createElement("div");
            descExerc.setAttribute("class", "descExerc");

                value.ex.map(function(va, ind){

                    const descExercLink = document.createElement("div");
                    descExercLink.setAttribute("class", "descExercLink");

                    // CONTROLE DE BPM
                        const descExercLinkText = document.createElement("div");
                        descExercLinkText.setAttribute("class", "descExercLinkText");
                        descExercLinkText.innerHTML = va.nome;
                        // EVENTO DE CLIQUE DO EXERCÍCIO
                        descExercLinkText.addEventListener("click", function(){

                            $("#main-2-id").scrollLeft(340);

                            const lista = document.querySelectorAll(".descExercLink");

                            for(let l of lista){
                                l.classList.remove("descExercLinkActive");
                                l.querySelector(".descExercLinkText").classList.remove("descExercLinkTextActive");
                            }
                            // this.classList.add("descExercLinkActive");
                            this.classList.add("descExercLinkTextActive");

                            console.log(value.name);

                            removeExercicio();
                            removeStatesNotas();
                            removeEscala();

                            $("#container-bx-nota-id").text("");

                            if(value.name == "NOTAS"){
                                exNotas(va);

                            }else if(value.name == "ACORDES"){
                                exAcorde(va);
                            }
                            

                        });

                        const descExercLinkControll = document.createElement("div");
                        descExercLinkControll.setAttribute("class", "descExercLinkControll");
                        descExercLinkControll.innerHTML = `<span class="descExercLinkControllCont icon-triangle-up"></span><span class="descExercLinkControllCont icon-triangle-down"></span><span class="descExercLinkControllBpm">60</span>bpm`;

                        descExercLink.appendChild(descExercLinkText);
                        descExercLink.appendChild(descExercLinkControll);


                    
                    descExerc.appendChild(descExercLink);

                });
            

            bxBtnExerc.appendChild(btnExerc);
            bxBtnExerc.appendChild(descExerc);

            bxE.appendChild(bxBtnExerc);

           
        
    });

    el.appendChild(bxE);

}


function counter(fun, t){

    

    let counte = 1; 
    let cou = 3;
    
    $("#id-count").html(cou);

    const c = setInterval(function(){

        if (counte <= 2) {

            cou--;
            $("#id-count").html(cou);
            
            counte++;
        }else{

            $(".bx-count").fadeOut();
            fun();
            inter = setInterval( fun, t);

            clearInterval(c);
        }

    }, t);

}

function exNotas(data){

    
    const countItems = data.pos.length;
    let indexItems = 0;


    time = setInterval(function(){

        if (indexItems < countItems) {

            let casa = document.getElementById(data.pos[indexItems]);


            const bollEl = document.createElement("div");
            bollEl.setAttribute("class", "bollE");
            bollEl.setAttribute("id", "boll-ex"+data.pos[indexItems]);
            bollEl.innerHTML = data.esquerda[indexItems];

            statesOld.exerc.push("boll-ex"+data.pos[indexItems]);

            switch(data.direita[indexItems]){
                case "c":
                    $("#container-bx-nota-id").html("<span class='icon-sort-asc'></span>");
                    break;
                case "b":
                    $("#container-bx-nota-id").html("<span class='icon-sort-desc'></span>");
                    break;
                default:
                    return false;      
            }

            if (document.querySelector("#boll-ex"+data.pos[indexItems - 1])) {
                $("#boll-ex"+data.pos[indexItems - 1]).fadeOut()
            }

            casa.appendChild(bollEl);

            indexItems++;

        }else{
            
            indexItems = 0;
            clearInterval(time);
            console.log("fechou");
            console.log(statesOld);
            
        }

    }, data.tempo);






//    console.log(data);    
}

function exAcorde(data){

    console.log(data);
}