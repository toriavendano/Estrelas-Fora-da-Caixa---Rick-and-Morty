const imagem1 = document.querySelector('#imagem-1')
const nome1 = document.querySelector('#nome-1')
const imagem2 = document.querySelector('#imagem-2')
const nome2 = document.querySelector('#nome-2')
const imagem3 = document.querySelector('#imagem-3')
const nome3 = document.querySelector('#nome-3')
const imagem4 = document.querySelector('#imagem-4')
const nome4 = document.querySelector('#nome-4')

const numeroPersonagens = 671;

gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * numeroPersonagens);
}

mostrarPersonagem1 = () => {
    const id = gerarNumeroAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem1.src = data.image;
        nome1.innerHTML = data.name;
    })
}
mostrarPersonagem1();

mostrarPersonagem2 = () => {
    const id = gerarNumeroAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem2.src = data.image;
        nome2.innerHTML = data.name;
    })
}
mostrarPersonagem2();

mostrarPersonagem3 = () => {
    const id = gerarNumeroAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem3.src = data.image;
        nome3.innerHTML = data.name;
    })
}
mostrarPersonagem3();

mostrarPersonagem4 = () => {
    const id = gerarNumeroAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) =>{
        imagem4.src = data.image;
        nome4.innerHTML = data.name;
    })
}
mostrarPersonagem4();


