const listaDePersonagens = ["viajante geo", "viajante anemo", "viajante electro", "viajante dendro", "Albedo", "Noelle", "Itto", "Ningguang", "Gorou", "Yunjin", "Zhongli",
 "klee", "amber", "diluc", "bennett", "xiangling", "hutao", "thoma", "xinyan", "yanfei", "yoimiya",
 "cyno", "yae", "shogun", "keqing", "dori", "kuki", "sara", "fischl", "beidou", "razor", "lisa",
"barbara", "candace", "ayato", "kokomi", "xingqiu", "mona", "nilou", "childe", "yelan",
"collei", "nahida", "tighnari",
"aloy", "chongyun", "diona", "ayaka", "eula", "kaeya", "ganyu", "layla", "qiqi", "rosaria", "shenhe",
"scaramouche", "faruzan", "kazuha", "venti", "sayu", "heizou", "jean", "sucrose", "xiao"];
// console.log(listaDePersonagens.length)
let numero1 = Math.round(Math.random() * (63 - 0));
let numero2 = Math.round(Math.random() * (63 - 0));
let numero3 = Math.round(Math.random() * (63 - 0));
let numero4 = Math.round(Math.random() * (63 - 0));

function letraMaiuscula(nome){
    nome = nome[0].toUpperCase() + nome.substr(1)
}

for(let valor = 0; valor < listaDePersonagens.length; valor++){
    letraMaiuscula(listaDePersonagens[valor])
}

const listaaux = [0,1,2,3]

if(listaaux.includes(numero1) && listaaux.includes(numero2) ||
listaaux.includes(numero1) && listaaux.includes(numero3) ||
listaaux.includes(numero1) && listaaux.includes(numero4) ||
listaaux.includes(numero2) && listaaux.includes(numero3) ||
listaaux.includes(numero2) && listaaux.includes(numero4) ||
listaaux.includes(numero3) && listaaux.includes(numero4)
){
    while((listaaux.includes(numero1) && listaaux.includes(numero2)) ||
    numero1 == numero2){
        numero2 = Math.round(Math.random() * (63 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero3)) ||
    numero1 == numero3){
        numero3 = Math.round(Math.random() * (63 - 0));
    }
    while((listaaux.includes(numero1) && listaaux.includes(numero4)) ||
    numero1 == numero4){
        numero4 = Math.round(Math.random() * (63 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero3)) ||
    numero2 == numero3){
        numero3 = Math.round(Math.random() * (63 - 0));
    }
    while((listaaux.includes(numero2) && listaaux.includes(numero4)) ||
    numero2 == numero3){
        numero4 = Math.round(Math.random() * (63 - 0));
    }
    while((listaaux.includes(numero3) && listaaux.includes(numero4)) ||
    numero3 == numero4){
        numero4 = Math.round(Math.random() * (63 - 0));
    }
}

for(let valor of listaDePersonagens){
    if(valor.includes("viajante")){
        valor = "Viajante"
    }
}

const resultado = document.querySelector("p")
const button = document.querySelector("button")
const imagem1 = document.getElementById("personagem1")
const imagem2 = document.getElementById("personagem2")
const imagem3 = document.getElementById("personagem3")
const imagem4 = document.getElementById("personagem4")
button.addEventListener("click", function(){
    console.log("oi");
    console.log(resultado);
    resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
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
    imagem1.setAttribute("src", `img/${listaDePersonagens[numero1]}.png`)
    imagem2.setAttribute("src", `img/${listaDePersonagens[numero2]}.png`)
    imagem3.setAttribute("src", `img/${listaDePersonagens[numero3]}.png`)
    imagem4.setAttribute("src", `img/${listaDePersonagens[numero4]}.png`)
})

console.log(imagem1.getAttribute("src"))

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");

botao1.addEventListener("click", function(){
    
    if(imagem1.getAttribute("src")!=="img/Desconhecido.png"){
        numero1 = Math.round(Math.random() * (63 - 0));
        while(listaaux.includes(numero1) && listaaux.includes(numero2) ||
        listaaux.includes(numero1) && listaaux.includes(numero3) ||
        listaaux.includes(numero1) && listaaux.includes(numero4) ||
        numero1 == numero2 ||
        numero1 == numero3 ||
        numero1 == numero4){
            numero1 = Math.round(Math.random() * (63 - 0));
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
        numero2 = Math.round(Math.random() * (63 - 0));
        while(listaaux.includes(numero2) && listaaux.includes(numero1) ||
        listaaux.includes(numero2) && listaaux.includes(numero3) ||
        listaaux.includes(numero2) && listaaux.includes(numero4)  ||
        numero2 == numero1 ||
        numero2 == numero3 ||
        numero2 == numero4){
            numero2 = Math.round(Math.random() * (63 - 0));
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
        numero3 = Math.round(Math.random() * (63 - 0));
        while(listaaux.includes(numero3) && listaaux.includes(numero1) ||
        listaaux.includes(numero3) && listaaux.includes(numero2) ||
        listaaux.includes(numero3) && listaaux.includes(numero3)  ||
        numero3 == numero1 ||
        numero3 == numero2 ||
        numero3 == numero4){
            numero3 = Math.round(Math.random() * (63 - 0));
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
        numero4 = Math.round(Math.random() * (63 - 0));
        while(listaaux.includes(numero4) && listaaux.includes(numero1) ||
        listaaux.includes(numero4) && listaaux.includes(numero2) ||
        listaaux.includes(numero4) && listaaux.includes(numero3)  ||
        numero4 == numero1 ||
        numero4 == numero2 ||
        numero4 == numero3){
            numero4 = Math.round(Math.random() * (63 - 0));
        }
        
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
        
        if(numero4 == 0 || numero4 == 1 || numero4 == 2 || numero4 == 3){
            listaDePersonagens[numero4] = "Viajante"
        }
        imagem4.setAttribute("src", `img/${listaDePersonagens[numero4]}.png`)
    }
})

function botaoTroca(botao, imagemnumero, numero){
    botao.addEventListener("click", function(){
    
        if(imagemnumero.getAttribute("src")!=="img/Desconhecido.png"){
            numero4 = Math.round(Math.random() * (63 - 0));
            while(listaaux.includes(numero4) && listaaux.includes(numero1) ||
            listaaux.includes(numero4) && listaaux.includes(numero2) ||
            listaaux.includes(numero4) && listaaux.includes(numero3)  ||
            numero == numero1 ||
            numero == numero2 ||
            numero == numero3){
                numero4 = Math.round(Math.random() * (63 - 0));
            }
            
            resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[numero1]}, ${listaDePersonagens[numero2]}, ${listaDePersonagens[numero3]} e ${listaDePersonagens[numero4]}`
            
            if(numero4 == 0 || numero4 == 1 || numero4 == 2 || numero4 == 3){
                listaDePersonagens[numero4] = "Viajante"
            }
            imagem4.setAttribute("src", `img/${listaDePersonagens[numero4]}.png`)
        }
    })
}