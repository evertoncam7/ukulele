

const optionInst = {
    size:{
        width:"",
        height:""
    },
    qcordas:0,
    qcasas:0,
    afinacao:[],
    cordaT:false,
    mark:[],
    styleComponent:{

    }
}

function componentInstrument(options){

    const state = {
        oldState:{

        },
        newState:{

        }
    }

    function c(el){
        return document.createElement(el);
    }

    function qs(cl){
        return document.querySelector(cl);
    }

    function qsa(cl){
        return document.querySelectorAll(cl);
    }

    const bx = c("div");
    bx.setAttribute("class", "bx");
        const bxHeader = c("div");
        bxHeader.setAttribute("class", "bxHeader");

    const bxB = c("div");
    bxB.setAttribute("class", "bxB");



    function data(data){

    }

    function create(){
        return bx;
    }


}