function compararTimes(time1, time2){
    for(let i = 0; i < time2.length; i++){
        for(let a = 0; a < 3; a++){
            if(time1[a] === time2[i]){
                return 0
            }
        }
    }
}

function compararJogadores(time){
    for(let i = 0; i < time.length - 1; i++){
        for(let j = i + 1; j < time.length; j++){
            if(time[i] == time[j]){
                return 0
            }
        }
    }
}

function randomizarPersonagens(){
    return Math.round(Math.random() * (65 - 0));
}

function criarTimes(){
    const time1 = []
    const time2 = []
    while(time1.length < 4){
        personagem = randomizarPersonagens();
        time1.push(personagem);
        if(compararJogadores(time1) === 0){
            time1.pop();
        }
    }

    while(time2.length < 4){
        personagem = randomizarPersonagens();
        time2.push(personagem);
        if(compararJogadores(time2) === 0){
            time2.pop();
        } else if(compararTimes(time1, time2) === 0){
            time2.pop();
        }
    }
    console.log(time1, time2)
    return time1.concat(time2)
    
}

const times = criarTimes();
let time1 = times.slice(0, 4);
let time2 = times.slice(4, 8);
console.log(times)
console.log(time1, time2)
