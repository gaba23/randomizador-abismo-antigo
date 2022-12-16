const listaDePersonagens = ["viajante geo", "viajante anemo", "viajante electro", "viajante dendro", "Albedo", "Noelle", "Itto", "Ningguang", "Gorou", "Yunjin", "Zhongli",
 "klee", "amber", "diluc", "bennett", "xiangling", "hutao", "thoma", "xinyan", "yanfei", "yoimiya",
 "cyno", "yae", "shogun", "keqing", "dori", "kuki", "sara", "fischl", "beidou", "razor", "lisa",
"barbara", "candace", "ayato", "kokomi", "xingqiu", "mona", "nilou", "childe", "yelan",
"collei", "nahida", "tighnari", "alhaitham", "yaoyao",
"aloy", "chongyun", "diona", "ayaka", "eula", "kaeya", "ganyu", "layla", "qiqi", "rosaria", "shenhe",
"scaramouche", "faruzan", "kazuha", "venti", "sayu", "heizou", "jean", "sucrose", "xiao"];
// console.log(listaDePersonagens.length)
let numero1 = Math.round(Math.random() * (65 - 0));
let numero2 = Math.round(Math.random() * (65 - 0));
let numero3 = Math.round(Math.random() * (65 - 0));
let numero4 = Math.round(Math.random() * (65 - 0));
let numero5 = Math.round(Math.random() * (65 - 0));
let numero6 = Math.round(Math.random() * (65 - 0));
let numero7 = Math.round(Math.random() * (65 - 0));
let numero8 = Math.round(Math.random() * (65 - 0));

for(let valor = 0; valor < listaDePersonagens.length; valor++){
    listaDePersonagens[valor] = listaDePersonagens[valor][0].toUpperCase() + listaDePersonagens[valor].substr(1)
}

console.log(listaDePersonagens)

const listaaux = [0,1,2,3]

if(listaaux.includes(numero1) && listaaux.includes(numero2) ||
listaaux.includes(numero1) && listaaux.includes(numero3) ||
listaaux.includes(numero1) && listaaux.includes(numero4) ||
listaaux.includes(numero1) && listaaux.includes(numero5) ||
listaaux.includes(numero1) && listaaux.includes(numero6) ||
listaaux.includes(numero1) && listaaux.includes(numero7) ||
listaaux.includes(numero1) && listaaux.includes(numero8) ||
listaaux.includes(numero2) && listaaux.includes(numero3) ||
listaaux.includes(numero2) && listaaux.includes(numero4) ||
listaaux.includes(numero2) && listaaux.includes(numero5) ||
listaaux.includes(numero2) && listaaux.includes(numero6) ||
listaaux.includes(numero2) && listaaux.includes(numero7) ||
listaaux.includes(numero2) && listaaux.includes(numero8) ||
listaaux.includes(numero3) && listaaux.includes(numero4) ||
listaaux.includes(numero3) && listaaux.includes(numero5) ||
listaaux.includes(numero3) && listaaux.includes(numero6) ||
listaaux.includes(numero3) && listaaux.includes(numero7) ||
listaaux.includes(numero3) && listaaux.includes(numero8) ||
listaaux.includes(numero4) && listaaux.includes(numero5) ||
listaaux.includes(numero4) && listaaux.includes(numero6) ||
listaaux.includes(numero4) && listaaux.includes(numero7) ||
listaaux.includes(numero4) && listaaux.includes(numero8) ||
listaaux.includes(numero5) && listaaux.includes(numero6) ||
listaaux.includes(numero5) && listaaux.includes(numero7) ||
listaaux.includes(numero5) && listaaux.includes(numero8) ||
listaaux.includes(numero6) && listaaux.includes(numero7) ||
listaaux.includes(numero6) && listaaux.includes(numero8) ||
listaaux.includes(numero7) && listaaux.includes(numero8) ||
numero1 == numero2 || numero1 == numero3 || numero1 == numero4 ||
numero1 == numero5 || numero1 == numero6 || numero1 == numero7 || numero1 == numero8 ||
numero2 == numero3 || numero2 == numero4 || numero2 == numero5 ||
numero2 == numero6 || numero2 == numero7 || numero2 == numero8 ||
numero3 == numero4 || numero3 == numero5 || numero3 == numero6 || numero3 == numero7 || numero3 == numero8 ||
numero4 == numero5 || numero4 == numero6 || numero4 == numero7 || numero4 == numero8 ||
numero5 == numero6 || numero5 == numero7 || numero5 == numero8 ||
numero6 == numero7 || numero6 == numero8 || numero7 == numero8
){
    while((listaaux.includes(numero1) && listaaux.includes(numero2)) || numero1 == numero2){
        numero2 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero3)) || numero1 == numero3){
        numero3 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero4)) || numero1 == numero4){
        numero4 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero5)) || numero1 == numero5){
        numero5 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero6)) || numero1 == numero6){
        numero6 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero7)) || numero1 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero8)) || numero1 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero3)) || numero2 == numero3){
        numero3 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero4)) || numero2 == numero4){
        numero4 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero5)) || numero2 == numero5){
        numero5 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero6)) || numero2 == numero6){
        numero6 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero7)) || numero2 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero8)) || numero2 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero4)) || numero3 == numero4){
        numero4 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero5)) || numero3 == numero5){
        numero5 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero6)) || numero3 == numero6){
        numero6 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero7)) || numero3 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero8)) || numero3 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero5)) || numero4 == numero5){
        numero5 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero4) && listaaux.includes(numero6)) || numero4 == numero6){
        numero6 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero4) && listaaux.includes(numero7)) || numero4 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero4) && listaaux.includes(numero8)) || numero4 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero5) && listaaux.includes(numero6)) || numero5 == numero6){
        numero6 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero5) && listaaux.includes(numero7)) || numero5 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero5) && listaaux.includes(numero8)) || numero5 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero6) && listaaux.includes(numero7)) || numero6 == numero7){
        numero7 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero6) && listaaux.includes(numero8)) || numero6 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
    while((listaaux.includes(numero7) && listaaux.includes(numero7)) || numero6 == numero8){
        numero8 = Math.round(Math.random() * (65 - 0));
    }
}

for(let valor of listaDePersonagens){
    if(valor.includes("viajante")){
        valor = "Viajante"
    }
}

const resultado = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const button = document.querySelector("button")

const imagem1 = document.getElementById("personagem1");
const imagem2 = document.getElementById("personagem2");
const imagem3 = document.getElementById("personagem3");
const imagem4 = document.getElementById("personagem4");
const imagem5 = document.getElementById("personagem5");
const imagem6 = document.getElementById("personagem6");
const imagem7 = document.getElementById("personagem7");
const imagem8 = document.getElementById("personagem8");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");
const botao6 = document.getElementById("botao6");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");

button.addEventListener("click", function(){
    resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
    resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[numero5]}, 
    ${listaDePersonagens[numero6]}, ${listaDePersonagens[numero7]} e ${listaDePersonagens[numero8]}`

    if(numero1 == 0 || numero1 == 1 || numero1 == 2 || numero1 == 3){
        listaDePersonagens[numero1] = "Viajante"
    }
    if(numero2 == 0 || numero2 == 1 || numero2 == 2 || numero2 == 3){
        listaDePersonagens[numero2] = "Viajante"
    }
    if(numero3 == 0 || numero3 == 1 || numero3 == 2 || numero3 == 3){
        listaDePersonagens[numero3] = "Viajante"
    }
    if(numero4 == 0 || numero4 == 1 || numero4 == 2 || numero4 == 3){
        listaDePersonagens[numero4] = "Viajante"
    }
    if(numero5 == 0 || numero5 == 1 || numero5 == 2 || numero5 == 3){
        listaDePersonagens[numero5] = "Viajante"
    }
    if(numero6 == 0 || numero6 == 1 || numero6 == 2 || numero6 == 3){
        listaDePersonagens[numero6] = "Viajante"
    }
    if(numero7 == 0 || numero7 == 1 || numero7 == 2 || numero7 == 3){
        listaDePersonagens[numero7] = "Viajante"
    }
    if(numero8 == 0 || numero8 == 1 || numero8 == 2 || numero8 == 3){
        listaDePersonagens[numero8] = "Viajante"
    }
    imagem1.setAttribute("src", `img/${listaDePersonagens[numero1]}.png`);
    imagem2.setAttribute("src", `img/${listaDePersonagens[numero2]}.png`);
    imagem3.setAttribute("src", `img/${listaDePersonagens[numero3]}.png`);
    imagem4.setAttribute("src", `img/${listaDePersonagens[numero4]}.png`);
    imagem5.setAttribute("src", `img/${listaDePersonagens[numero5]}.png`);
    imagem6.setAttribute("src", `img/${listaDePersonagens[numero6]}.png`);
    imagem7.setAttribute("src", `img/${listaDePersonagens[numero7]}.png`);
    imagem8.setAttribute("src", `img/${listaDePersonagens[numero8]}.png`);

    botao1.innerText = "Substitua o 1º personagem.";
    botao2.innerText = "Substitua o 2º personagem.";
    botao3.innerText = "Substitua o 3º personagem.";
    botao4.innerText = "Substitua o 4º personagem.";
    botao5.innerText = "Substitua o 5º personagem.";
    botao6.innerText = "Substitua o 6º personagem.";
    botao7.innerText = "Substitua o 7º personagem.";
    botao8.innerText = "Substitua o 8º personagem.";
})

botao1.addEventListener("click", function(){
    
    if(imagem1.getAttribute("src")!=="img/Desconhecido.png"){
        numero1 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero1) && listaaux.includes(numero2) ||
        listaaux.includes(numero1) && listaaux.includes(numero3) ||
        listaaux.includes(numero1) && listaaux.includes(numero4) ||
        listaaux.includes(numero1) && listaaux.includes(numero5) ||
        listaaux.includes(numero1) && listaaux.includes(numero6) ||
        listaaux.includes(numero1) && listaaux.includes(numero7) ||
        listaaux.includes(numero1) && listaaux.includes(numero8) ||
        numero1 == numero2 ||
        numero1 == numero3 ||
        numero1 == numero4 ||
        numero1 == numero5 ||
        numero1 == numero6 ||
        numero1 == numero7 ||
        numero1 == numero8){
            numero1 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
        
        if(numero1 == 0 || numero1 == 1 || numero1 == 2 || numero1 == 3){
            listaDePersonagens[numero1] = "Viajante"
        }
        imagem1.setAttribute("src", `img/${listaDePersonagens[numero1]}.png`)
    }
})

botao2.addEventListener("click", function(){
    
    if(imagem2.getAttribute("src")!=="img/Desconhecido.png"){
        numero2 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero2) && listaaux.includes(numero1) ||
        listaaux.includes(numero2) && listaaux.includes(numero3) ||
        listaaux.includes(numero2) && listaaux.includes(numero4) ||
        listaaux.includes(numero2) && listaaux.includes(numero5) ||
        listaaux.includes(numero2) && listaaux.includes(numero6) ||
        listaaux.includes(numero2) && listaaux.includes(numero7) ||
        listaaux.includes(numero2) && listaaux.includes(numero8) ||
        numero2 == numero1 ||
        numero2 == numero3 ||
        numero2 == numero4 ||
        numero2 == numero5 ||
        numero2 == numero6 ||
        numero2 == numero7 ||
        numero2 == numero8){
            numero2 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
        
        if(numero2 == 0 || numero2 == 2 || numero2 == 2 || numero2 == 3){
            listaDePersonagens[numero2] = "Viajante"
        }
        imagem2.setAttribute("src", `img/${listaDePersonagens[numero2]}.png`)
    }
})

botao3.addEventListener("click", function(){
    
    if(imagem3.getAttribute("src")!=="img/Desconhecido.png"){
        numero3 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero3) && listaaux.includes(numero1) ||
        listaaux.includes(numero3) && listaaux.includes(numero2) ||
        listaaux.includes(numero3) && listaaux.includes(numero3) ||
        listaaux.includes(numero3) && listaaux.includes(numero5) ||
        listaaux.includes(numero3) && listaaux.includes(numero6) ||
        listaaux.includes(numero3) && listaaux.includes(numero7) ||
        listaaux.includes(numero3) && listaaux.includes(numero8) ||
        numero3 == numero1 ||
        numero3 == numero2 ||
        numero3 == numero4 ||
        numero3 == numero5 ||
        numero3 == numero6 ||
        numero3 == numero7 ||
        numero3 == numero8){
            numero3 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
        
        if(numero3 == 0 || numero3 == 3 || numero3 == 2 || numero3 == 3){
            listaDePersonagens[numero3] = "Viajante"
        }
        imagem3.setAttribute("src", `img/${listaDePersonagens[numero3]}.png`)
    }
})

botao4.addEventListener("click", function(){
    
    if(imagem4.getAttribute("src")!=="img/Desconhecido.png"){
        numero4 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero4) && listaaux.includes(numero1) ||
        listaaux.includes(numero4) && listaaux.includes(numero2) ||
        listaaux.includes(numero4) && listaaux.includes(numero3) ||
        listaaux.includes(numero4) && listaaux.includes(numero5) ||
        listaaux.includes(numero4) && listaaux.includes(numero6) ||
        listaaux.includes(numero4) && listaaux.includes(numero7) ||
        listaaux.includes(numero4) && listaaux.includes(numero8) ||
        numero4 == numero1 ||
        numero4 == numero2 ||
        numero4 == numero3 ||
        numero4 == numero5 ||
        numero4 == numero6 ||
        numero4 == numero7 ||
        numero4 == numero8){
            numero4 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
        
        if(numero4 == 0 || numero4 == 1 || numero4 == 2 || numero4 == 3){
            listaDePersonagens[numero4] = "Viajante"
        }
        imagem4.setAttribute("src", `img/${listaDePersonagens[numero4]}.png`)
    }
})

botao5.addEventListener("click", function(){
    
    if(imagem5.getAttribute("src")!=="img/Desconhecido.png"){
        numero5 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero5) && listaaux.includes(numero1) ||
        listaaux.includes(numero5) && listaaux.includes(numero2) ||
        listaaux.includes(numero5) && listaaux.includes(numero3) ||
        listaaux.includes(numero5) && listaaux.includes(numero4) ||
        listaaux.includes(numero5) && listaaux.includes(numero6) ||
        listaaux.includes(numero5) && listaaux.includes(numero7) ||
        listaaux.includes(numero5) && listaaux.includes(numero8) ||
        numero5 == numero1 ||
        numero5 == numero2 ||
        numero5 == numero3 ||
        numero5 == numero4 ||
        numero5 == numero6 ||
        numero5 == numero7 ||
        numero5 == numero8){
            numero5 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[numero5]}, 
        ${listaDePersonagens[numero6]}, ${listaDePersonagens[numero7]} e ${listaDePersonagens[numero8]}`
        
        if(numero5 == 0 || numero5 == 1 || numero5 == 2 || numero5 == 3){
            listaDePersonagens[numero5] = "Viajante"
        }
        imagem5.setAttribute("src", `img/${listaDePersonagens[numero5]}.png`)
    }
})

botao6.addEventListener("click", function(){
    
    if(imagem6.getAttribute("src")!=="img/Desconhecido.png"){
        numero6 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero4) && listaaux.includes(numero1) ||
        listaaux.includes(numero6) && listaaux.includes(numero2) ||
        listaaux.includes(numero6) && listaaux.includes(numero3) ||
        listaaux.includes(numero6) && listaaux.includes(numero4) ||
        listaaux.includes(numero6) && listaaux.includes(numero5) ||
        listaaux.includes(numero6) && listaaux.includes(numero7) ||
        listaaux.includes(numero6) && listaaux.includes(numero8) ||
        numero6 == numero1 ||
        numero6 == numero2 ||
        numero6 == numero3 ||
        numero6 == numero4 ||
        numero6 == numero5 ||
        numero6 == numero7 ||
        numero6 == numero8){
            numero6 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[numero5]}, 
        ${listaDePersonagens[numero6]}, ${listaDePersonagens[numero7]} e ${listaDePersonagens[numero8]}`
        
        if(numero6 == 0 || numero6 == 1 || numero6 == 2 || numero6 == 3){
            listaDePersonagens[numero6] = "Viajante"
        }
        imagem6.setAttribute("src", `img/${listaDePersonagens[numero6]}.png`)
    }
})

botao7.addEventListener("click", function(){
    
    if(imagem7.getAttribute("src")!=="img/Desconhecido.png"){
        numero7 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero4) && listaaux.includes(numero1) ||
        listaaux.includes(numero7) && listaaux.includes(numero2) ||
        listaaux.includes(numero7) && listaaux.includes(numero3) ||
        listaaux.includes(numero7) && listaaux.includes(numero4) ||
        listaaux.includes(numero7) && listaaux.includes(numero5) ||
        listaaux.includes(numero7) && listaaux.includes(numero6) ||
        listaaux.includes(numero7) && listaaux.includes(numero8) ||
        numero7 == numero1 ||
        numero7 == numero2 ||
        numero7 == numero3 ||
        numero7 == numero4 ||
        numero7 == numero5 ||
        numero7 == numero6 ||
        numero7 == numero8){
            numero7 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[numero5]}, 
        ${listaDePersonagens[numero6]}, ${listaDePersonagens[numero7]} e ${listaDePersonagens[numero8]}`
        
        if(numero7 == 0 || numero7 == 1 || numero7 == 2 || numero7 == 3){
            listaDePersonagens[numero7] = "Viajante"
        }
        imagem7.setAttribute("src", `img/${listaDePersonagens[numero7]}.png`)
    }
})

botao8.addEventListener("click", function(){
    
    if(imagem8.getAttribute("src")!=="img/Desconhecido.png"){
        numero8 = Math.round(Math.random() * (65 - 0));
        while(listaaux.includes(numero8) && listaaux.includes(numero1) ||
        listaaux.includes(numero8) && listaaux.includes(numero2) ||
        listaaux.includes(numero8) && listaaux.includes(numero3) ||
        listaaux.includes(numero8) && listaaux.includes(numero4) ||
        listaaux.includes(numero8) && listaaux.includes(numero5) ||
        listaaux.includes(numero8) && listaaux.includes(numero6) ||
        listaaux.includes(numero8) && listaaux.includes(numero7) ||
        numero8 == numero1 ||
        numero8 == numero2 ||
        numero8 == numero3 ||
        numero8 == numero4 ||
        numero8 == numero5 ||
        numero8 == numero6 ||
        numero8 == numero7){
            numero8 = Math.round(Math.random() * (65 - 0));
        }
        
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[numero5]}, 
        ${listaDePersonagens[numero6]}, ${listaDePersonagens[numero7]} e ${listaDePersonagens[numero8]}`
        
        if(numero8 == 0 || numero8 == 1 || numero8 == 2 || numero8 == 3){
            listaDePersonagens[numero8] = "Viajante"
        }
        imagem8.setAttribute("src", `img/${listaDePersonagens[numero8]}.png`)
    }
})
