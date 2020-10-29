<template>
  <v-expansion-panels multiple style="padding: 20px 0">
    <v-expansion-panel>
      <v-expansion-panel-header> По наличию </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group>
          <v-radio
            v-for="i in $store.state.product.availabilityMode"
            :key="i.title"
            :label="i.title"
            @click="$store.commit('toggleAvailabilityMode', i.title)"
          ></v-radio>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header> Сортировать по </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group>
          <v-radio
            v-for="i in $store.state.product.sortMode"
            :key="i.title"
            :label="i.title"
            @click="$store.commit('toggleSortMode', i.title)"
          ></v-radio>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Виды произведений</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-checkbox
          v-for="product in $store.state.product.categories"
          :key="product.getter"
          v-model="product.isChosen"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.title)"
        ></v-checkbox>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Виды росписи</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-checkbox
          v-for="product in $store.state.product.prints"
          :key="product.getter"
          v-model="product.isChosen"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.title)"
        ></v-checkbox>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Способы фиксации</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-checkbox
          v-for="product in $store.state.product.fixation"
          :key="product.getter"
          v-model="product.isChosen"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.title)"
        ></v-checkbox>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style lang="scss">
.v-input--selection-controls {
  margin-top: 0 !important;
  padding-top: 10px !important;
}

.v-expansion-panel-content__wrap {
  padding: 0 10px 16px 15px !important;
}

.v-expansion-panel-header {
  padding: 0 10px 0 15px !important;
}
</style>
