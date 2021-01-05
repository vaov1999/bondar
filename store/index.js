export const state = () => ({
  products: [],
  product: {
    searchString: ''.trim().toLowerCase(),
    availabilityMode: {
      all: { title: 'Усі товари', isChosen: true },
      available: { title: 'Товари у наявності', isChosen: false },
      notAvailable: { title: 'Товари на заказ', isChosen: false },
    },
    sortMode: {
      default: { title: 'Случайно', isChosen: true },
      fromMin: { title: 'От самого доступного', isChosen: false },
      fromMax: { title: 'От самого дорогого', isChosen: true },
    },
    minPrice: 0,
    maxPrice: 2500,
    categories: [
      { getter: 'sets', title: 'Набори', isChosen: false },
      { getter: 'panno', title: 'Панно', isChosen: false },
      { getter: 'doski', title: 'Досщєчки', isChosen: false },
      { getter: 'srezi', title: 'Срези', isChosen: false },
      { getter: 'solfetnizi', title: 'Серветниці', isChosen: false },
      { getter: 'eggs', title: 'Яєчки', isChosen: false },
      { getter: 'metreshki', title: 'Матрешки', isChosen: false },
      { getter: 'another', title: 'Друге', isChosen: false },
    ],
    fixation: [
      { getter: 'verevka', title: 'На мотузках', isChosen: false },
      { getter: 'magnit', title: 'На магнітах', isChosen: false },
      { getter: 'wholes', title: 'Отверстія', isChosen: false },
      { getter: 'another', title: 'Друге', isChosen: false },
    ],
    prints: [
      { getter: 'petrikovka', title: 'Петриківка', isChosen: false },
      { getter: 'hohloma', title: 'Хохлома', isChosen: false },
      { getter: 'gzel', title: 'Гжель', isChosen: false },
      { getter: 'another', title: 'Друге', isChosen: false },
    ],
  },
})

export const getters = {
  filtered: (state) => {
    if (state.product.searchString.length > 0) {
      return this.products.filter((i) =>
        i.title.toLowerCase().trim().includes(state.product.searchString)
      )
    } else {
      return this.products
        .filter(function (i) {
          return (
            (state.product.availabilityMode.all.isChosen ||
              (i.availability && state.product.availabilityMode.available.isChosen) ||
              (!i.availability && state.product.availabilityMode.notAvailable.isChosen)) &&
            i.price <= state.product.maxPrice &&
            i.price >= state.product.minPrice &&
            (state.getters.chosenCategories.length === 0 ||
              state.getters.chosenCategories.includes(i.categories)) &&
            (state.getters.chosenFixation.length === 0 ||
              state.getters.chosenFixation.includes(i.fixation)) &&
            (state.getters.chosenPrints.length === 0 ||
              state.getters.chosenPrints.includes(i.prints))
          )
        })
        .sort(function (a, b) {
          if (state.product.sortMode.fromMax.isChosen) {
            if (a.price > b.price) return -1
            if (a.price < b.price) return 1
            if (a.price === b.price) return 0
          }
          if (state.product.sortMode.fromMin.isChosen) {
            if (a.price > b.price) return 1
            if (a.price < b.price) return -1
            if (a.price === b.price) return 0
          }
        })
    }
  },
}

export const mutations = {
  fetchProducts(state, products) {
    state.products = products
    console.log(products)
  },
  toggleFilter(state, payload) {
    state.product.categories.forEach((i) => {
      if (i.title === payload) {
        state.product.categories.isChosen = !state.product.categories.isChosen
      }
    })
    state.product.prints.forEach((i) => {
      if (i.title === payload) {
        return (state.product.prints.isChosen = !state.product.prints.isChosen)
      }
    })
    state.product.fixation.forEach((i) => {
      if (i.title === payload) {
        return (state.product.fixation.isChosen = !state.product.fixation.isChosen)
      }
    })
  },
  changePrice(state, payload) {
    state.product.minPrice = payload[0]
    state.product.maxPrice = payload[1]
  },
  changeSearchString(state, payload) {
    state.product.searchString = payload
  },
  toggleAvailabilityMode(state, payload) {
    Object.values(state.product.availabilityMode).forEach((i) => {
      if (i.title === payload) {
        return (i.isChosen = true)
      } else {
        return (i.isChosen = false)
      }
    })
  },
  toggleSortMode(state, payload) {
    Object.values(state.product.sortMode).forEach((i) => {
      if (i.title === payload) {
        return (i.isChosen = true)
      } else {
        return (i.isChosen = false)
      }
    })
  },
}
