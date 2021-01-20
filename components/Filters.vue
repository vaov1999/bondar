<template>
  <v-expansion-panels multiple style="padding: 20px 0">
    <v-expansion-panel>
      <v-expansion-panel-header> По наличию </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group>
          <v-radio
            v-for="i in $store.state.filter.availabilityMode"
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
            v-for="i in $store.state.filter.sortMode"
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
          v-for="product in $store.state.filter.categories.productTypes"
          :key="product.getter"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.getter)"
        ></v-checkbox>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Виды росписи</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-checkbox
          v-for="product in $store.state.filter.categories.prints"
          :key="product.getter"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.getter)"
        ></v-checkbox>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Способы фиксации</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-checkbox
          v-for="product in $store.state.filter.categories.fixation"
          :key="product.getter"
          hide-details="true"
          :label="product.title"
          @click="$store.commit('toggleFilter', product.getter)"
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
