
$("#main-2-id").scrollLeft(340);


const dataset = {
    maior: ["C", "D", "E", "F", "G", "A", "B"],
    menor: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
    maiorSustenido: ["C#", "D#", "F#", "G#", "A#"],
    menorSustenido: ["C#m", "D#m", "F#m", "G#m", "A#m"],
    maiorBemol: ["Db", "Eb", "Gb", "Ab", "Bb"],
    menorBemol: ["Dbm", "Ebm", "Gbm", "Abm", "Bbm"]
}

const namesCordas = ["G", "C", "E", "A"];

let ultimoTraste = 18;
const tamanhoGradeCasa = [];

const bracoWidth = 600;
const bracoHeight = (bracoWidth/100)*20;

let primeiraCasa = (bracoWidth/100)*5.9;
const porcent = 4;

let primeiraCasaNotas = (bracoWidth/100)*3.5;
const boll = (bracoWidth/100)*1.5;

const container = document.getElementById("bx-braco");

const b = document.createElement("div");
b.style.width = bracoWidth+"px";
b.style.height = bracoHeight+"px";
b.setAttribute("class", "b");



    const box_casa = document.createElement("div");
    box_casa.setAttribute("class", "box_casa");

    b.appendChild(box_casa);

let countCasa = 12;
    for(let i = 0; i < 12; i++){

        const casa = document.createElement("div");
        casa.setAttribute("class", "casa");
        casa.style.width =  primeiraCasa+"px";
        tamanhoGradeCasa.push(primeiraCasa);

            if (i == 0) {
                const mark = document.createElement("div");
                mark.setAttribute("class", "mark");
                mark.style.width = boll+"px";
                mark.style.height = boll+"px";
                mark.style.borderRadius = (boll/2)+"px";
                casa.appendChild(mark);
            }

            if (i == 2) {
                const mark = document.createElement("div");
                mark.setAttribute("class", "mark");
                mark.style.width = boll+"px";
                mark.style.height = boll+"px";
                mark.style.borderRadius = (boll/2)+"px";
                casa.appendChild(mark);
            }

            if (i == 5) {
                const mark = document.createElement("div");
                mark.setAttribute("class", "mark");
                mark.style.width = boll+"px";
                mark.style.height = boll+"px";
                mark.style.borderRadius = (boll/2)+"px";
                casa.appendChild(mark);

            }

            if (i == 7) {
                const mark = document.createElement("div");
                mark.setAttribute("class", "mark");
                mark.style.width = boll+"px";
                mark.style.height = boll+"px";
                mark.style.borderRadius = (boll/2)+"px";
                casa.appendChild(mark);
            }

        const casaCount = document.createElement("div");
        casaCount.setAttribute("class", "casaCount");
        casaCount.innerHTML = countCasa;            

        const tr = document.createElement("div");
        tr.setAttribute("class", "tr");


        countCasa--;
        casa.appendChild(casaCount);
        
        box_casa.appendChild(casa);
        if (i != 11) {
            box_casa.appendChild(tr);
        }
        
        primeiraCasa += porcent;

    }

    const box_cordas = document.createElement("div");
    box_cordas.setAttribute("class", "box_cordas");
    let h = 3;

        for (let index = 0; index < 4; index++) {
            const corda = document.createElement("div");
                corda.setAttribute("class", "corda");
                corda.style.height = h+"px";
                h -= 0.7;
            box_cordas.appendChild(corda);
        }


    const box_notas = document.createElement("div");
    box_notas.setAttribute("class", "box_notas");
    let hn = (bracoHeight/4);

        for (let index2 = 1; index2 <= 4; index2++) {
            const column_notas = document.createElement("div");
            column_notas.setAttribute("class", "column_notas");
            column_notas.style.height = hn+"px";
            // hn -= 0.3;
            let countCasas = tamanhoGradeCasa.length;
            tamanhoGradeCasa.map(function(item, index){

                const casa_notas = document.createElement("div");
                casa_notas.setAttribute("class", "casa_notas");
                casa_notas.setAttribute("id", index2+""+countCasas);
                casa_notas.style.width = (item+2)+"px";

                casa_notas.addEventListener("click", function(){
                    alert(this.id);
                    // alert($("#main-2-id").scrollLeft());
                })

                column_notas.appendChild(casa_notas);
                // console.log(index2 +" - "+ countCasas);
                // console.log("=====================");
               
                countCasas--;
            });
            
            box_notas.appendChild(column_notas);
        }

    b.appendChild(box_cordas);
    b.appendChild(box_notas);


    const bxNameNotas = document.createElement("div");
    bxNameNotas.setAttribute("class", "bxNameNotas");
    bxNameNotas.style.height = bracoHeight+"px";


    namesCordas.map(function(value, index){
        const bxNameNotasColumns = document.createElement("div");
        bxNameNotasColumns.setAttribute("class", "bxNameNotasColumns");
        bxNameNotasColumns.style.height = bracoHeight/4+"px";
        bxNameNotasColumns.innerHTML = value;

        bxNameNotas.appendChild(bxNameNotasColumns);
    });




container.appendChild(b);
container.appendChild(bxNameNotas);

