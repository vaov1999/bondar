<template>
  <div v-if="chips.length" class="chips">
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
  computed: {
    chips () {
      const array = []
      this.$store.state.filter.categories.productTypes
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title))
      this.$store.state.filter.categories.fixation
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title))
      this.$store.state.filter.categories.prints
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.title))
      return array
    }
  }
}
</script>

<style lang="scss">
.chips {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 90%;
  padding: 10px 0;
  margin: 0 auto;
  border-bottom: rgba(0, 0, 0, 0.2) solid 1px;
  flex-grow: 0;
}
</style>
