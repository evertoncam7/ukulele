


function escala(element, dataSet){

    
    const clns = document.createElement("div");
    clns.setAttribute("class", "clns");

        const clnsTitle = document.createElement("div");
        clnsTitle.setAttribute("class", "clnsTitle");
        clnsTitle.innerHTML = dataSet.name;

        clns.appendChild(clnsTitle);

    dataSet.escalas.map(function(value, index){
        const clnsText = document.createElement("div");
        clnsText.setAttribute("class", "clnsText");
        clnsText.innerHTML = value.name;
        clnsText.addEventListener("click", function(){
            alert(value.name);
        })
        clns.appendChild(clnsText);
    });
    
    element.appendChild(clns);


    console.log(dataSet);
    console.log("=================");
}



// 4 - G 40   G# A A# B C C# D D# E F F#
// 3 - C 30
// 2 - E 20
// 1 - A 10