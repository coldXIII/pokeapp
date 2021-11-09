  <template>
    <div class="my-5 mx-auto">
      <div
        class="flex justify-around items-center flex-row"
        v-for="pokemon in getPokemon"
        :key="pokemon.id"
      >
      <div>  <img :src="pokemon.logo" /></div>
       <div class="text-center"> <h2 class="font-bold text-4xl p-2 mb-3">{{ pokemon.name }}</h2>
       <span class="p-1 block text-gray-700 text-xl"> Type: {{ pokemon.type}}</span> <br>
       <span class="p-1 block text-gray-700 text-xl"> Evolution: {{ pokemon.evolution}}</span><br>
       <span class="p-1 block text-gray-700 text-xl">Species: {{ pokemon.species  }}</span>
       </div>
  
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'pokemon-list',

    data() {
      return {
        params: this.$route.params.id,
      };
    },

    computed: {
      getPokemon() {
        return this.$store.state.pokemons.filter((p) => {
          return p.id.includes(this.params);
        });
      },
    },
  };
  </script>

  <style></style>
