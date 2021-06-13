

function exercicio(el){

    removeExercicio();

    let len = 0;
    

    const bxE = document.createElement("div");
    bxE.setAttribute("class", "bxE");

    exerc.map(function(value, index){

        const bxBtnExerc = document.createElement("div");
        bxBtnExerc.setAttribute("class", "bxBtnExerc");
        bxBtnExerc.addEventListener("click", function(){

            removeExercicio();

            let indexExer = 0;

            len = value.pos.length;
            
            if (inter) {
                clearInterval(inter);
            }

            $(".bx-count").css({"display":"flex"});
            
            // pppppppppp
            counter(startTime, value.tempo);


            function startTime(){

                if (len) {

                    const casaE = document.getElementById(value.pos[indexExer]);

                    const bollE = document.createElement("div");
                    bollE.setAttribute("class", "bollE");
                    bollE.setAttribute("id", "id-bollE"+value.pos[indexExer]);
                    bollE.innerHTML = value.esquerda[indexExer];

                    switch(value.direita[indexExer]){

                        case "c":
                            $("#container-bx-nota-id").html("<span class='icon-sort-asc'></span>");
                            break;
                        case "b":
                            $("#container-bx-nota-id").html("<span class='icon-sort-desc'></span>");
                            break;
                        default:
                            return "";
                               
                    }

                    if (indexExer > 0) {
                        $("#id-bollE"+value.pos[indexExer - 1]).fadeOut(500);
                    }
                    
                    
                    statesOld.exerc.push("id-bollE"+value.pos[indexExer]);
                    casaE.appendChild(bollE);

                    indexExer++;

                    
                }else{
                    indexExer = 0;
                    clearInterval(inter);
                }

                len--;

            }







        });

            const btnExerc = document.createElement("div");
            btnExerc.setAttribute("class", "btnExerc");
            btnExerc.innerHTML = value.nome;

            const descExerc = document.createElement("div");
            descExerc.setAttribute("class", "descExerc");
            descExerc.innerHTML = value.desc;

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
            console.log("dwd");
            cou--;
            $("#id-count").html(cou);
            
            counte++;
        }else{

            console.log("ligar");
            $(".bx-count").fadeOut();
            fun();
            inter = setInterval( fun, t);

            clearInterval(c);
        }
    }, 1000);
}

// console.log(counter());