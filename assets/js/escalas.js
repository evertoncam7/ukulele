

function escala(element, dataSet){

    $(".nameCordasClass").css("color", "#fff");

    removeStatesNotas();
    removeExercicio();

    $("#main-2-id").scrollLeft(340);

    $("#container-bx-nota-id").text(" ");
    removeEscala();
    
    const clns = document.createElement("div");
    clns.setAttribute("class", "clns");

        const clnsTitle = document.createElement("div");
        clnsTitle.setAttribute("class", "clnsTitle");
        clnsTitle.innerHTML = dataSet.name;

        clns.appendChild(clnsTitle);

    dataSet.escalas.map(function(value, index){

        const clnsText = document.createElement("div");
        clnsText.setAttribute("class", "clnsText");
        clnsText.setAttribute("data-tom", dataSet.name);
        clnsText.setAttribute("data-escala", value.name);
        clnsText.innerHTML = value.name;
        clnsText.addEventListener("click", function(){


            if (document.querySelector(".clnsTextActive")) {
                const item = document.querySelectorAll(".clnsText");
                for(let itemLink of item){
                    itemLink.classList.remove("clnsTextActive");
                }
            }

            this.classList.add("clnsTextActive");
            

            oldState.scale.map(function(value, index){
                $("#s-"+value).remove();
            });

            oldState.scale = [];

            const tom = escalasData.filter(function(value){
                return value.name == dataSet.name;
            });

            const scale = tom[0].escalas.filter(function(valuee){
                return value.name == valuee.name;
            });

          

            if (scale) {
                scale[0].n.map(function(value, index){

            

                    $("#container-bx-nota-id").text(scale[0].name);
                    $("#container-bx-nota-id").css({fontSize:"1.1em"});

                    if (!value.name || !value.position) {
                        return;
                    }

                    oldState.scale.push(value.position);
    
                    const bScale = document.createElement("div");

                    if (value.name == tom[0].name) {
                        bScale.setAttribute("class", "nota-boll nota-boll-tom");
                    }else{
                        bScale.setAttribute("class", "nota-boll");
                    }

                    

                    bScale.setAttribute("id", "s-"+value.position);
                    bScale.dataset.t = "dwwdwd";
                    bScale.innerHTML = value.name;
                    bScale.addEventListener("click", function(){

                        const el = document.getElementById("main-2-id");

                        $("#main-2-id").animate({scrollLeft: value.scroll }, 500, function(){
                            
                        });

                    });
    
                    document.getElementById(value.position).appendChild(bScale);
                    $(".nota-boll").fadeIn().css('display','flex');
                    
    
                });
            }

        });

        clns.appendChild(clnsText);
    });
    
    element.appendChild(clns);

}



// 4 - G 40   G# A A# B C C# D D# E F F#
// 3 - C 30
// 2 - E 20
// 1 - A 10