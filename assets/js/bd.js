

function converte(dd){
    const r = dd.map((value, index) => {
        const i = parseInt(value.position);
        const res = {position:i, pointer:"boll", nota: value.nota};
        return res;
    });
    return r;
}

const bd = [
    {id:1, acorde:'C',scrollEl: 240, notas:[
        {pos:1, scroll: 216, n:[
            ...converte([{"position":"43","pointer":"boll","nota":"C"}])
        ]}, 
        {pos:2, scroll: 178, n:[
            ...converte([{"position":"24","pointer":"boll","nota":"E"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
        {pos:3, scroll: 10, n:[
            ...converte([{"position":"47","pointer":"boll","nota":"E"}])
        ]},
        {pos:4, scroll: 195, n:[
            ...converte([{"position":"24","pointer":"boll","nota":"E"},{"position":"33","pointer":"boll","nota":"G"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
        {pos:5, scroll: 125, n:[
            ...converte([{"position":"33","pointer":"boll","nota":"G"},{"position":"47","pointer":"boll","nota":"E"}])
        ]},
    ]},
    {id:2, acorde:'D',scrollEl:370 ,notas:[
        {pos:1, scroll: 240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"22","pointer":"boll","nota":"D"},{"position":"32","pointer":"boll","nota":"F#"}])
        ]}, 
        {pos:2, scroll: 203, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"22","pointer":"boll","nota":"D"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
        {pos:3, scroll: 184, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"26","pointer":"boll","nota":"F#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
        {pos:4, scroll: 195, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"26","pointer":"boll","nota":"F#"},{"position":"35","pointer":"boll","nota":"A"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
        {pos:5, scroll: 69, n:[
            ...converte([{"position":"17","pointer":"boll","nota":"D"},{"position":"26","pointer":"boll","nota":"F#"},{"position":"35","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:2, acorde:'E',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"24","pointer":"boll","nota":"E"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
        {pos:2, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"24","pointer":"boll","nota":"E"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
        {pos:3, scroll:229, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"24","pointer":"boll","nota":"E"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
        {pos:4, scroll:91, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"24","pointer":"boll","nota":"E"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"47","pointer":"boll","nota":"E"}])
        ]},
        {pos: 5, scroll:68, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"28","pointer":"boll","nota":"G#"},{"position":"47","pointer":"boll","nota":"E"}])
        ]},
    ]},
    {id:3, acorde:'F',scrollEl:370 ,notas:[
        {pos: 1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"20","pointer":"boll","nota":"C"},{"position":"31","pointer":"boll","nota":"F"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
        {pos: 2, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"20","pointer":"boll","nota":"C"},{"position":"31","pointer":"boll","nota":"F"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
        {pos: 3, scroll:240, n:[
            ...converte([{"position":"15","pointer":"boll","nota":"C"},{"position":"20","pointer":"boll","nota":"C"},{"position":"31","pointer":"boll","nota":"F"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
        {pos: 4, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"25","pointer":"boll","nota":"F"},{"position":"31","pointer":"boll","nota":"F"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
        {pos: 5, scroll:240, n:[
            ...converte([{"position":"15","pointer":"boll","nota":"C"},{"position":"25","pointer":"boll","nota":"F"},{"position":"31","pointer":"boll","nota":"F"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:4, acorde:'G',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"22","pointer":"boll","nota":"D"},{"position":"33","pointer":"boll","nota":"G"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
        {pos:2, scroll:240, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"22","pointer":"boll","nota":"D"},{"position":"33","pointer":"boll","nota":"G"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
        {pos:3, scroll:240, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"22","pointer":"boll","nota":"D"},{"position":"33","pointer":"boll","nota":"G"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
        {pos:4, scroll:70, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"27","pointer":"boll","nota":"G"},{"position":"37","pointer":"boll","nota":"B"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
        {pos:5, scroll:123, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"27","pointer":"boll","nota":"G"},{"position":"33","pointer":"boll","nota":"G"},{"position":"45","pointer":"boll","nota":"D"}])
        ]},
    ]},
    {id:5, acorde:'A',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"30","pointer":"boll","nota":"E"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:6, acorde:'B',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
    ]},



    
    {id:7, acorde:'Cm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"33","pointer":"boll","nota":"G"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
    ]},
    {id:8, acorde:'Dm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"22","pointer":"boll","nota":"D"},{"position":"31","pointer":"boll","nota":"F"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:2, acorde:'Em',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"24","pointer":"boll","nota":"E"},{"position":"33","pointer":"boll","nota":"G"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
    ]},
    {id:2, acorde:'Fm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"20","pointer":"boll","nota":"C"},{"position":"31","pointer":"boll","nota":"F"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
    ]},
    {id:2, acorde:'Gm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"22","pointer":"boll","nota":"D"},{"position":"33","pointer":"boll","nota":"G"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Am',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"20","pointer":"boll","nota":"C"},{"position":"30","pointer":"boll","nota":"E"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:2, acorde:'Bm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"14","pointer":"boll","nota":"B"},{"position":"22","pointer":"boll","nota":"D"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
    ]},
    {id:2, acorde:'C#',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"31","pointer":"boll","nota":"F"},{"position":"44","pointer":"boll","nota":"C#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'D#',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"33","pointer":"boll","nota":"G"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'F#',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'G#',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"15","pointer":"boll","nota":"C"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'A#',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"22","pointer":"boll","nota":"D"},{"position":"31","pointer":"boll","nota":"F"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'C#m',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"30","pointer":"boll","nota":"E"},{"position":"44","pointer":"boll","nota":"C#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'D#m',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
        // {pos:1, scroll:"", n:[
        //     ...converte()
        // ]},
    ]},
    {id:2, acorde:'F#m',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:2, acorde:'G#m',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
    ]},
    {id:2, acorde:'A#m',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"31","pointer":"boll","nota":"F"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Db',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"31","pointer":"boll","nota":"F"},{"position":"44","pointer":"boll","nota":"C#"}])
        ]},
    ]},
    {id:2, acorde:'Eb',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"10","pointer":"boll","nota":"G"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"33","pointer":"boll","nota":"G"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Gb',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Ab',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"15","pointer":"boll","nota":"C"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"43","pointer":"boll","nota":"C"}])
        ]},
    ]},
    {id:2, acorde:'Bb',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"22","pointer":"boll","nota":"D"},{"position":"31","pointer":"boll","nota":"F"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Dbm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"30","pointer":"boll","nota":"E"},{"position":"44","pointer":"boll","nota":"C#"}])
        ]},
    ]},
    {id:2, acorde:'Ebm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
    ]},
    {id:2, acorde:'Gbm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"12","pointer":"boll","nota":"A"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"32","pointer":"boll","nota":"F#"},{"position":"40","pointer":"boll","nota":"A"}])
        ]},
    ]},
    {id:2, acorde:'Abm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"11","pointer":"boll","nota":"G#"},{"position":"23","pointer":"boll","nota":"D#"},{"position":"34","pointer":"boll","nota":"G#"},{"position":"42","pointer":"boll","nota":"B"}])
        ]},
    ]},
    {id:2, acorde:'Bbm',scrollEl:370 ,notas:[
        {pos:1, scroll:240, n:[
            ...converte([{"position":"13","pointer":"boll","nota":"A#"},{"position":"21","pointer":"boll","nota":"C#"},{"position":"31","pointer":"boll","nota":"F"},{"position":"41","pointer":"boll","nota":"A#"}])
        ]},
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

const notas = {
    0:["G", "F#", "F", "E", "D#", "D", "C#", "C", "B", "A#", "A", "G#"],
    1:["C", "B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#"],
    2:["E", "D#", "D", "C#", "C", "B", "A#", "A", "G#", "G", "F#", "F"],
    3:["A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C", "B", "A#"]
}

const exerc = [
    {id:1, nome:"1-2-3-4", tempo:2000, pos:[11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44], esquerda:[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4], direita:["b", "c", "b", "c", "b", "c", "b", "c", "b", "c", "b", "c", "b", "c", "b", "c"], 
        desc:"30 bpm"},
    {id:2, nome:"4-3-2-1", tempo:1000, pos:[14,13,12,11], esquerda:[4, 3, 2, 1], direita:["c", "b", "c", "b"], 
        desc:"60 bpm"},
];
