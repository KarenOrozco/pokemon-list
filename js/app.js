const app = Vue.createApp({
    template: "#pokedex",
    data() {
        return {
            status: 200,
            search: '',
            pokemon: {
                name: '?',
                weight: 0,
                type: '?',
                moves: 0,
                images: {
                    frontDefault: "./assets/img/pokeball.png",
                    frontShiny: "./assets/img/whos-that-pokemon-2.png"
                }
            }
        }
    },
    methods: {
        fetchPokemon(){
            pokeName = this.search.toLowerCase();
            console.log(pokeName);
            url = "https://pokeapi.co/api/v2/pokemon/"+pokeName;

            fetch(url).then((result) =>{
                this.status = result.status;
                if(result.status !== 200){
                    console.log(result.status)
                }else{
                    console.log(result.status);
                    return result.json();
                }
            }).then((data) =>{
                if(typeof data !== 'undefined'){
                    console.log(data);
                    this.getDataPokemon(data);
                }
            })
        },
        getDataPokemon(data){
            return this.pokemon = {
                name: data.name.toUpperCase(),
                weight: data.weight,
                type: data.types[0].type.name,
                moves: data.moves.length,
                images: {
                    frontDefault: data.sprites.front_default,
                    frontShiny: data.sprites.front_shiny
                }
            }
        }
    },
});


app.mount('#app');