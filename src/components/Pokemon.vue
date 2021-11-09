<template>
  <div class="w-full">
    <div class="flex justify-center items-center flex-row px-3">
      <div class="w-full m-2 border-black border-2 rounded-xl p-2">
        <div class="w-full text-center font-bold p-1">
          <h4>{{ pokemon.name }}</h4>
        </div>
        <div class="w-full my-5">
          <img class="w-60 h-64 my-0 mx-auto" :src="pokemon.logo" />
        </div>
        <div class="w-full">
          <img class="w-16 h-14 my-1 mx-auto" :src="type" />
        </div>
        <div class="flex justify-center">
          <router-link
            :to="{ name: 'pokemon-view', params: { id: pokemon.id } }"
          >
            <button
              class="
                m-0
                border-gray-400
                bg-gray-200
                border-2
                py-1
                px-2
                rounded-md
              "
            >
              VIEW DETAILS
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pokemon',
  props: ['pokemon'],

  data() {
    return {
      type: null,
    };
  },

  mounted() {
    if (this.pokemon.type == 'Electric') {
      this.type =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDW5_ufFZ18IoCLWHTZoIye8TCcD2cB220jM5PSi8b3swMLXBsVz2QvWlKwYHBfj_SWo&usqp=CAU';
    } else if (this.pokemon.type == 'Psychic') {
      this.type =
        'https://static.vecteezy.com/system/resources/thumbnails/000/585/566/small/006-11.jpg';
    } else if (this.pokemon.type == 'Fire') {
      this.type =
        'https://png.pngtree.com/png-vector/20190226/ourmid/pngtree-fire-logo-icon-design-template-vector-png-image_705403.jpg';
    } else if (this.pokemon.type == 'Plant') {
      this.type =
        'https://media.istockphoto.com/vectors/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon-vector-id1045368942?k=20&m=1045368942&s=170667a&w=0&h=X6TYI6qsklBF9V84ubmXNG_WVYTwOHlIFbXYzVci0MQ=';
    } else if (this.pokemon.type == 'Water') {
      this.type =
        'https://static.vecteezy.com/system/resources/thumbnails/000/596/073/small/14052019-21.jpg';
    } else if (this.pokemon.type == 'Air') {
      this.type =
        'https://media.istockphoto.com/vectors/water-wave-logo-illustration-vector-id1154675016?k=20&m=1154675016&s=612x612&w=0&h=U3Ow0VbzIB31339iFkiYaivBrmxzZ6I98w9prVoOS5w=';
    }
  },
};
</script>

<style></style>
