


$(".control", function(){
    const datasetn = $(this).data().keyid;
    // alert(datasetn);


    const p = document.querySelectorAll(".string");

    const sc = [];
    
    // {name:"A", position: 12}
    
    let countCorda = 1;
    
    for (let index = 0; index < p.length; index++) {
    
        p[index].setAttribute("data-corda", countCorda);
    
        countCorda++;
    
        const dt = $(p[index]).data();
    
        console.log(p[index]);
    
        console.log("=======");
    
        for (let index2 = 0; index2 < $(p[index]).children().length; index2++) {
    
            const datas = $($(p[index]).children()[index2]);
            const notas = $(p[index]).children()[index2].innerHTML;
    
            const ps = datas.data().fret;
            const position = dt.corda+""+ps;
    
            if (ps > 0 && $($(p[index]).children()[index2]).hasClass("fret--on")) {
                console.log(position);

                // Para Escalas
                // sc.push({name:notas, position:position});

                // Para Acordes
                sc.push({position:position, pointer:"boll"});
            }
    
    
        }
        console.log("================== FIM ===============");
        
    }

    console.log(JSON.stringify(sc));

});

