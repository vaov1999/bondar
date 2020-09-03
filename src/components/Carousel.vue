<template>
  <v-carousel height="300" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="i in 5" :key="i">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">slide {{ i }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Slider"
};
</script>

<style lang="sass" scoped></style>
