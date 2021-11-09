  <template>
    <div class="grid grid-cols-3">
      <Pokemon
        class="w-full "
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </template>

  <script>
  import Pokemon from './Pokemon';
  import { mapGetters } from 'vuex';

  export default {
    name: 'pokemon-list',

    components: {
      Pokemon,
    },

    computed: {
      ...mapGetters({
        pokemons: 'pokemons',
      }),
    },
  };
  </script>

  <style></style>
