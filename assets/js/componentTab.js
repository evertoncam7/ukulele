
function componentDiv(cs, id, text, apd){

    // CLASS, ID, TEXT, APPEND

    const el = document.createElement("div");
    if (cs) {
        el.setAttribute("class", cs);
    }
    if (id) {
        el.setAttribute("id", id);
    }
    if (text) {
        el.innerHTML = text;
    }
    if (apd) {
        for(let item of apd){
            el.appendChild(item);
        }
    }
    
    return el;

}










const texo1 = "Este componente foi testado!";

const n4 = componentDiv(null, null, texo1);

const icon1 = document.createElement("span");
icon1.setAttribute("class", "icon-star");

const n2 = componentDiv("screen2", 5, null, );
const n22 = componentDiv("screen2", 5, null);
const n222 = componentDiv("screen2", 5, null);
const n = componentDiv("teste", 4, null);

const n33 = componentDiv("screen3", null, "Button 2");

const n01 = componentDiv("screen3", null, "Button 2");
const n02 = componentDiv("teste", 4, "Exercícios");
const n03 = componentDiv("teste", 4, "Ajuda");



const options = {
    tabPosition:"",
    tabStyles:{
        background:"#222",
        color:"#fff",
        activeButton:"#999"
    },
    effect:"slide/fade",
    effectButton:"padrão/"
}


function componentTab_002(screens, options){

    const state = {
        oldState:{},
        newState:{}
    }

    const r = Math.floor(Math.random(0)*100000);

    function qs(el){
        return document.querySelector(el);
    }

    function qsa(el){
        return document.querySelectorAll(el);
    }

    function div(cl = null, id = null, text = null, chil = null){
        const el = document.createElement("div");
        if (cl) {
            el.setAttribute("class", cl+" "+cl+"-"+r);
        }
        if (id) {
            el.setAttribute("id", id);
        }else{
            id = Math.floor(Math.random(0)*100000);
            el.setAttribute("id", id);
        }
        if (text) {
            el.innerHTML = text;
        }
        if (chil) {
            chil.map(function(v, i){
                el.appendChild(v);
            });
        }
        return el;
    }

    const container = div("container-c");

        const header = div("h");
        if (options) {
            header.style.background = options.tabStyles.background;
            header.style.color = options.tabStyles.color;
        }


        screens.map((v, i)=>{

            const button = div("t", null, v.title);
            button.setAttribute("data-btn", "bxb-"+r);

            if (i == 0) {
                if (options) {
                    button.style.background = options.tabStyles.activeButton;
                }else{
                    button.classList.add("activeTeste");
                }
                v.component.setAttribute("class", "bxc activeScreen");
            }
            
            button.addEventListener("click", function(){

                let btns = this.parentNode;
                btns = btns.querySelectorAll(".t");

                for(let btnss of btns){
                    if (options) {
                        btnss.classList.remove("activeTeste");
                        btnss.style.background = "";
                    }else{
                        btnss.classList.remove("activeTeste");
                        btnss.style.background = "";
                    }
                }
                if (options) {
                    this.style.background = options.tabStyles.activeButton;
                }else{
                    this.classList.add("activeTeste");
                }

                const cont = this.parentNode.parentNode;
                const bxc_b = cont.querySelector(".bxc");

                const elementos_screens = bxc_b.querySelectorAll(".sel");

                for(let edd of elementos_screens){
                    edd.classList.remove("activeScreen");
                }
               
                elementos_screens[i].classList.add("activeScreen");

            });

            
            header.appendChild(button);
            
        });
      
        const barraNenu = div("barra-menu");

        const bxxx = div("bxc");
        screens.map(function(vvvvv, iiiii){

            vvvvv.component.classList.add("sel");
            bxxx.appendChild(vvvvv.component);
            
        });

        if (!options || !options.tabPosition || options.tabPosition == "" || options.tabPosition == "top") {
            container.appendChild(header);
            container.appendChild(barraNenu);
            container.appendChild(bxxx);
        }else{
            container.appendChild(bxxx);
            container.appendChild(header);
            container.appendChild(barraNenu);
        }

    return container;

}


const screens = [
    {
        title:"Button 1",
        component:n4
    },
    {
        title:"Button 2",
        component:n33
    }
];


const screens2 = [
    {
        title:`<span class='icon-star'></span>`,
        component:n
    },
    {
        title:`<span class="icon-mail"></span>`,
        component:n2
    },
    {
        title:`<span class="icon-heart-o"></span>`,
        component:n22
    },
    {
        title:`<span class="icon-map-marker"></span>`,
        component:n222
    }
];

const screens3 = [
    {
        title:"Exercícios",
        component:n01
    },
    {
        title:"Dicas",
        component:n02
    },
    // {
    //     title:"Ajuda",
    //     component:n03
    // }
];