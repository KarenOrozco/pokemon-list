const app = Vue.createApp({
    data() {
        return {
            pokemon: {
                name: '',
                weight: 0,
                type: '',
                moves: 0,
                images: {
                    frontDefault: "./assets/img/pokeball.png",
                    frontShiny: ''
                }
            }
        }
    },
    methods: {
        fetchPokemon(){
            pokeName = this.pokemon.name.toLowerCase();
            console.log(pokeName);
            url = "https://pokeapi.co/api/v2/pokemon/"+pokeName;

            fetch(url).then((result) =>{
                if(result.status !== 200){
                    console.log(result.status)
                }else{
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
                name: data.name,
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