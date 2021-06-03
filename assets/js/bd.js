

function converte(dd){

    const r = dd.map((value, index) => {

        const i = parseInt(value.position);
        const res = {position:i, pointer:"boll"};
        // console.log(res);
        return res;

    });

    return r;

}

// const vc = [{"position":"12","pointer":"boll"},{"position":"22","pointer":"boll"},{"position":"32","pointer":"boll"},{"position":"45","pointer":"boll"}];
// console.log(...converte(vc));


const bd = [
    {id:1, acorde:'C',scrollEl: 240, notas:[
        {pos:1, scroll: 216, n:[
            {position: 43, pointer:"boll"}
        ]}, 
        {pos:2, scroll: 178, n:[
            {position:24, pointer:"boll"},{position:43, pointer:"boll"}
        ]},
        {pos:3, scroll: 10, n:[
            {position: 47, pointer:"boll"}
        ]},
        {pos:4, scroll: 195, n:[
            {position:24, pointer:"boll"},{position:33, pointer:"boll"},{position: 43, pointer:"boll"}
        ]},
        {pos:5, scroll: 125, n:[
            {position: 33, pointer:"boll"},{ position: 47, pointer:"boll"}
        ]},
    ]},
    {id:2, acorde:'D',scrollEl:370 ,notas:[
        {pos:1, scroll: 240, n:[
            {position: 12, pointer:"boll"},{ position :22, pointer :"boll"},{ position : 32 , pointer :"boll"}
        ]}, 
        {pos:2, scroll: 178, n:[
            ...converte([{"position":"12","pointer":"boll"},{"position":"22","pointer":"boll"},{"position":"32","pointer":"boll"},{"position":"45","pointer":"boll"}])
        ]},
        {pos:3, scroll: 10, n:[
            {position: 47, pointer:"boll"}
        ]},
        {pos:4, scroll: 195, n:[
            {position:24, pointer:"boll"},{position:33, pointer:"boll"},{position: 43, pointer:"boll"}
        ]},
        {pos:5, scroll: 125, n:[
            {position: 33, pointer:"boll"},{ position: 47, pointer:"boll"}
        ]},
    ]},
    {id:2, acorde:'E',scrollEl:370 ,notas:[
        {position:'11', pointer:'boll'},
        {position:'42', pointer:'boll'},
        {position:'24', pointer:'boll'}
    ]},
    {id:2, acorde:'F',scrollEl:370 ,notas:[
        {position:'12', pointer:'boll'},
        {position:'31', pointer:'boll'},
    ]},
    {id:2, acorde:'G',scrollEl:370 ,notas:[
        {position:'22', pointer:'boll'},
        {position:'33', pointer:'boll'},
        {position:'42', pointer:'boll'}
    ]},
    {id:2, acorde:'A',scrollEl:370 ,notas:[
        {position:'12', pointer:'boll'},
        {position:'21', pointer:'boll'},
    ]},
    {id:2, acorde:'B',scrollEl:370 ,notas:[
        {position:'42', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'14', pointer:'boll'}
    ]},
    {id:2, acorde:'Cm',scrollEl:370 ,notas:[
        {position:'43', pointer:'ret'},
        {position:'33', pointer:'ret'},
        {position:'23', pointer:'ret'},
    ]},
    {id:2, acorde:'Dm',scrollEl:370 ,notas:[
        {position:'12', pointer:'boll'},
        {position:'22', pointer:'boll'},
        {position:'31', pointer:'boll'},
    ]},
    {id:2, acorde:'Em',scrollEl:370 ,notas:[
        {position:'42', pointer:'boll'},
        {position:'33', pointer:'boll'},
        {position:'24', pointer:'boll'},
    ]},
    {id:2, acorde:'Fm',scrollEl:370 ,notas:[
        {position:'11', pointer:'boll'},
        {position:'31', pointer:'boll'},
        {position:'43', pointer:'boll'},
    ]},
    {id:2, acorde:'Gm',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'22', pointer:'boll'},
        {position:'33', pointer:'boll'},
    ]},
    {id:2, acorde:'Am',scrollEl:370 ,notas:[
        {position:'12', pointer:'boll'},
    ]},
    {id:2, acorde:'Bm',scrollEl:370 ,notas:[
        {position:'12', pointer:'rect'},
        {position:'22', pointer:'rect'},
        {position:'32', pointer:'rect'},
        {position:'42', pointer:'rect'},
        {position:'14', pointer:'boll'},
    ]},
    {id:2, acorde:'C#',scrollEl:370 ,notas:[
        {position:'11', pointer:'rect'},
        {position:'21', pointer:'rect'},
        {position:'31', pointer:'rect'},
        {position:'41', pointer:'rect'},
        {position:'44', pointer:'boll'},
    ]},
    {id:2, acorde:'D#',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'33', pointer:'boll'},
        {position:'23', pointer:'boll'},
    ]},
    {id:2, acorde:'F#',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'G#',scrollEl:370 ,notas:[
        {position:'43', pointer:'boll'},
        {position:'34', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'15', pointer:'boll'},
    ]},
    {id:2, acorde:'A#',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'31', pointer:'boll'},
        {position:'22', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'C#m',scrollEl:370 ,notas:[
        {position:'44', pointer:'boll'},
        {position:'30', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'11', pointer:'boll'},
    ]},
    {id:2, acorde:'D#m',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'F#m',scrollEl:370 ,notas:[
        {position:'40', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'12', pointer:'boll'},
    ]},
    {id:2, acorde:'G#m',scrollEl:370 ,notas:[
        {position:'42', pointer:'boll'},
        {position:'34', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'11', pointer:'boll'},
    ]},
    {id:2, acorde:'A#m',scrollEl:370 ,notas:[
        {position:'41', pointer:'rect'},
        {position:'31', pointer:'rect'},
        {position:'21', pointer:'rect'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'Db',scrollEl:370 ,notas:[
        {position:'11', pointer:'rect'},
        {position:'21', pointer:'rect'},
        {position:'31', pointer:'rect'},
        {position:'41', pointer:'rect'},
        {position:'44', pointer:'boll'},
    ]},
    {id:2, acorde:'Eb',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'33', pointer:'boll'},
        {position:'23', pointer:'boll'},
    ]},
    {id:2, acorde:'Gb',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'Ab',scrollEl:370 ,notas:[
        {position:'43', pointer:'boll'},
        {position:'34', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'15', pointer:'boll'},
    ]},
    {id:2, acorde:'Bb',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'31', pointer:'boll'},
        {position:'22', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'Dbm',scrollEl:370 ,notas:[
        {position:'44', pointer:'boll'},
        {position:'30', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'11', pointer:'boll'},
    ]},
    {id:2, acorde:'Ebm',scrollEl:370 ,notas:[
        {position:'41', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'13', pointer:'boll'},
    ]},
    {id:2, acorde:'Gbm',scrollEl:370 ,notas:[
        {position:'40', pointer:'boll'},
        {position:'32', pointer:'boll'},
        {position:'21', pointer:'boll'},
        {position:'12', pointer:'boll'},
    ]},
    {id:2, acorde:'Abm',scrollEl:370 ,notas:[
        {position:'42', pointer:'boll'},
        {position:'34', pointer:'boll'},
        {position:'23', pointer:'boll'},
        {position:'11', pointer:'boll'},
    ]},
    {id:2, acorde:'Bbm',scrollEl:370 ,notas:[
        {position:'41', pointer:'rec'},
        {position:'31', pointer:'rec'},
        {position:'21', pointer:'rec'},
        {position:'13', pointer:'boll'},
    ]},
];


const escalasData = [
    {name:"C", escalas:[
        {name:"C - MAIOR", n:[
            {name:"A", position: 12},
            {name:"B", position: 14},
            {name:"C", position: 15},
            {name:"D", position: 17},
            {name:"E", position: 19},
            {name:"F", position: 110},
            {name:"G", position: 112},

            {name:"D", position: 22},
            {name:"E", position: 24},
            {name:"F", position: 25},
            {name:"G", position: 27},
            {name:"A", position: 29},
            {name:"B", position: 211},
            {name:"C", position: 212},

            {name:"F", position: 31},
            {name:"G", position: 33},
            {name:"A", position: 35},
            {name:"B", position: 37},
            {name:"C", position: 38},
            {name:"D", position: 310},
            {name:"E", position: 312},

            {name:"B", position: 42},
            {name:"C", position: 43},
            {name:"D", position: 45},
            {name:"E", position: 47},
            {name:"F", position: 48},
            {name:"G", position: 410},
            {name:"A", position: 412},

        ]},
        {name:"C - MENOR", n:[
            {"name":"G#","position":"11"},{"name":"A#","position":"13"},{"name":"C","position":"15"},{"name":"D","position":"17"},{"name":"D#","position":"18"},{"name":"F","position":"110"},{"name":"G","position":"112"},{"name":"D","position":"22"},{"name":"D#","position":"23"},{"name":"F","position":"25"},{"name":"G","position":"27"},{"name":"G#","position":"28"},{"name":"A#","position":"210"},{"name":"C","position":"212"},{"name":"F","position":"31"},{"name":"G","position":"33"},{"name":"G#","position":"34"},{"name":"A#","position":"36"},{"name":"C","position":"38"},{"name":"D","position":"310"},{"name":"D#","position":"311"},{"name":"A#","position":"41"},{"name":"C","position":"43"},{"name":"D","position":"45"},{"name":"D#","position":"46"},{"name":"F","position":"48"},{"name":"G","position":"410"},{"name":"G#","position":"411"}
        ]},
        {name:"C - PENTATÔNICA MAIOR", n:[
            {"name":"A","position":"12"},{"name":"C","position":"15"},{"name":"D","position":"17"},{"name":"E","position":"19"},{"name":"G","position":"112"},{"name":"D","position":"22"},{"name":"E","position":"24"},{"name":"G","position":"27"},{"name":"A","position":"29"},{"name":"C","position":"212"},{"name":"G","position":"33"},{"name":"A","position":"35"},{"name":"C","position":"38"},{"name":"D","position":"310"},{"name":"E","position":"312"},{"name":"C","position":"43"},{"name":"D","position":"45"},{"name":"E","position":"47"},{"name":"G","position":"410"},{"name":"A","position":"412"}
        ]},
        {name:"C - PENTATÔNICA MENOR", n:[
            {"name":"A#","position":"13"},{"name":"C","position":"15"},{"name":"D#","position":"18"},{"name":"F","position":"110"},{"name":"G","position":"112"},{"name":"D#","position":"23"},{"name":"F","position":"25"},{"name":"G","position":"27"},{"name":"A#","position":"210"},{"name":"C","position":"212"},{"name":"F","position":"31"},{"name":"G","position":"33"},{"name":"A#","position":"36"},{"name":"C","position":"38"},{"name":"D#","position":"311"},{"name":"A#","position":"41"},{"name":"C","position":"43"},{"name":"D#","position":"46"},{"name":"F","position":"48"},{"name":"G","position":"410"}
        ]},
        {name:"C - MENOR HARMÔNICA", n:[
            {"name":"G#","position":"11"},{"name":"B","position":"14"},{"name":"C","position":"15"},{"name":"D","position":"17"},{"name":"D#","position":"18"},{"name":"F","position":"110"},{"name":"G","position":"112"},{"name":"D","position":"22"},{"name":"D#","position":"23"},{"name":"F","position":"25"},{"name":"G","position":"27"},{"name":"G#","position":"28"},{"name":"B","position":"211"},{"name":"C","position":"212"},{"name":"F","position":"31"},{"name":"G","position":"33"},{"name":"G#","position":"34"},{"name":"B","position":"37"},{"name":"C","position":"38"},{"name":"D","position":"310"},{"name":"D#","position":"311"},{"name":"B","position":"42"},{"name":"C","position":"43"},{"name":"D","position":"45"},{"name":"D#","position":"46"},{"name":"F","position":"48"},{"name":"G","position":"410"},{"name":"G#","position":"411"}
        ]},
    ]},
    {name:"C#", escalas:[
        {name:"C# - MAIOR", n:[
            {"name":"G#","position":"11"},{"name":"A#","position":"13"},{"name":"C","position":"15"},{"name":"C#","position":"16"},{"name":"D#","position":"18"},{"name":"F","position":"110"},{"name":"F#","position":"111"},{"name":"C#","position":"21"},{"name":"D#","position":"23"},{"name":"F","position":"25"},{"name":"F#","position":"26"},{"name":"G#","position":"28"},{"name":"A#","position":"210"},{"name":"C","position":"212"},{"name":"F","position":"31"},{"name":"F#","position":"32"},{"name":"G#","position":"34"},{"name":"A#","position":"36"},{"name":"C","position":"38"},{"name":"C#","position":"39"},{"name":"D#","position":"311"},{"name":"A#","position":"41"},{"name":"C","position":"43"},{"name":"C#","position":"44"},{"name":"D#","position":"46"},{"name":"F","position":"48"},{"name":"F#","position":"49"},{"name":"G#","position":"411"}
        ]},
        {name:"C# - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"C# - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"C# - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"C# - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"D", escalas:[
        {name:"D - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"D - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"D - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"D - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"D - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"D#", escalas:[
        {name:"D# - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"D# - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"D# - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"D# - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"D# - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"E", escalas:[
        {name:"E - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"E - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"E - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"E - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"E - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"F", escalas:[
        {name:"F - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"F - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"F - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"F - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"F - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"F#", escalas:[
        {name:"F# - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"F# - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"F# - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"F# - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"F# - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"G", escalas:[
        {name:"G - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"G - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"G - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"G - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"G - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"G#", escalas:[
        {name:"G# - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"G# - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"G# - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"G# - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"G# - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"A", escalas:[
        {name:"A - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"A - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"A - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"A - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"A - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"A#", escalas:[
        {name:"A# - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"A# - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"A# - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"A# - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"A# - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
    {name:"B", escalas:[
        {name:"B - MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"B - MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"B - PENTATÔNICA MAIOR", n:[
            {name:"", position:""}
        ]},
        {name:"B - PENTATÔNICA MENOR", n:[
            {name:"", position:""}
        ]},
        {name:"B - MENOR HARMÔNICA", n:[
            {name:"", position:""}
        ]}
    ]},
];
