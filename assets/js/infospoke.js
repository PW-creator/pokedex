const loadPokemon = document.getElementById('loadPokemon')
const pagURL = window.location.href
const splitURL = pagURL.split("=")

let id = 0
if (splitURL.length > 1) {
    id = splitURL.pop()
} else {
    id = 1
}

const url = `https://pokeapi.co/api/v2/pokemon/${id}`
console.log(url)

function toLoadPokemon(url) {
    pokeApi.getPokemonDetail(url).then((pokemon = []) => {
        const newHtml =
            `<div class="pokemon-individual container">
                <div class="pokemon-infos">
                    <div class="pokemon-img slideInLeft">
                        <img src="${pokemon.photo}" width="300" height="300" alt="${pokemon.name}"> 
                    </div>
                    <div class="pokemon-conteudo">
                        <span class="number slideInDown" aria-label="número do Pokemon">#${pokemon.number}</span>
                        <h1 class="name slideInRight">${pokemon.name}</h1>

                        <ol class="types fadeIn" aria-label="Lista de tipos do Pokemon">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <div class="pokemon-detail fadeIn">
                        <h2>Estatísticas</h2>
                        <div class="stats">
                            ${pokemon.stats.map((stat) => `
                            <div class="stat ${stat.stat.name}">
                                <h3>
                                    ${stat.stat.name}
                                </h3> 
                                <div class="progress">
                                    <span>${stat.base_stat}</span>
                                    <progress value="${stat.base_stat}" max="100"></progress>
                                </div>
                            </div>`).join('')}
                        </div>
            </div>
        </div> `
        loadPokemon.innerHTML += newHtml
    })
}

window.addEventListener('load', () => {
    toLoadPokemon(url)
})
