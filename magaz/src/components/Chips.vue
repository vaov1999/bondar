<template>
  <div class="chips" v-if="chips.length">
    <v-chip
      v-for="i in chips"
      :key="i"
      close
      outlined
      color="rgba(0, 0, 0, 0.4)"
      style="margin-right: 10px; flex-shrink: 0"
      @click="$store.commit('toggleFilter', i)"
    >
      {{ i }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "Chips",
  data: function() {
    return {};
  },
  computed: {
    chips: function() {
      const array = [];
      this.$store.state.product.categories
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title));
      this.$store.state.product.fixation
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title));
      this.$store.state.product.prints
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title));
      return array;
    }
  }
};
</script>

<style lang="sass">
.chips
  display: flex
  align-items: center
  overflow: hidden
  width: 90%
  padding: 10px 0
  margin: 0 auto
  border-bottom: rgba(0, 0, 0, 0.2) solid 1px
  flex-grow: 0
</style>
