/*
objetivo - quando tocar no pokedev da listagem, deve esconbder o atual e aparecer o do pokedev clicado
passo 1: variavel para trabalhar com a listagem dos poke devs
passo 2: identificar o evento de click no elemento da listagem
passo 3: remover a classe aberto só do cartão que tá aberto
passo 4: clicar no pokedev da listagem, pegamos o id desse pokedevpara saber qual cartão abrir
passo 5: remover a classe ativo que marca o pokedev selecionadona listagem
passo 6: adicionar classe ativo no pokedev selecionado na listagem
*/

//passo 1: variavel para trabalhar com a listagem dos poke devs
const ListaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(ListaSelecaoPokedevs);
//passo 2: identificar o evento de click no elemento da listagem
ListaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () =>{
        //passo 3: remover a classe aberto só do cartão que tá aberto
        const cartaoPokedevAberto = document.querySelector(".aberto")
        cartaoPokedevAberto.classList.remove("aberto")

        //passo 4: clicar no pokedev da listagem, pegamos o id desse pokedevpara saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const iddoCartaoPokedevParaAbrir = "cartao-"+idPokedevSelecionado
        const cartaoPokedevParaAbrir = document.getElementById(iddoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto");
        //passo 5: remover a classe ativo que marca o pokedev selecionadona listagem
        const pokedevAtivonalistagem = document.querySelector(".ativo");
        pokedevAtivonalistagem.classList.remove("ativo");
        //passo 6: adicionar classe ativo no pokedev selecionado na listagem
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo");
    })
    

})

