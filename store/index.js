const consts = {
  PRODUCT_TYPES: 'productTypes',
  FIXATION: 'fixation',
  prints: 'prints'
}
export const state = () => ({
  consts,
  products: [],
  filter: {
    searchString: ''.trim().toLowerCase(),
    availabilityMode: {
      all: { title: 'Усі товари', isChosen: true },
      available: { title: 'Товари у наявності', isChosen: false },
      notAvailable: { title: 'Товари на заказ', isChosen: false }
    },
    sortMode: {
      default: { title: 'Случайно', isChosen: true },
      fromMin: { title: 'От самого доступного', isChosen: false },
      fromMax: { title: 'От самого дорогого', isChosen: true }
    },
    minPrice: 0,
    maxPrice: 2500,
    categories: {
      productTypes: [
        { getter: 'sets', title: 'Набори', isChosen: false },
        { getter: 'panno', title: 'Панно', isChosen: false },
        { getter: 'doski', title: 'Досщєчки', isChosen: false },
        { getter: 'srezi', title: 'Срези', isChosen: false },
        { getter: 'solfetnizi', title: 'Серветниці', isChosen: false },
        { getter: 'eggs', title: 'Яєчки', isChosen: false },
        { getter: 'metreshki', title: 'Матрешки', isChosen: false },
        { getter: 'another', title: 'Друге', isChosen: false }
      ],
      fixation: [
        { getter: 'verevka', title: 'На мотузках', isChosen: false },
        { getter: 'magnit', title: 'На магнітах', isChosen: false },
        { getter: 'wholes', title: 'Отверстія', isChosen: false },
        { getter: 'another', title: 'Друге', isChosen: false }
      ],
      prints: [
        { getter: 'petrikovka', title: 'Петриківка', isChosen: false },
        { getter: 'hohloma', title: 'Хохлома', isChosen: false },
        { getter: 'gzel', title: 'Гжель', isChosen: false },
        { getter: 'another', title: 'Друге', isChosen: false }
      ]
    }
  }
})

export const getters = {
  chosenCategories: (state) => {
    const array = []
    state.filter.categories.productTypes.forEach((i) => {
      if (i.isChosen) {
        array.push(i.getter)
      }
    })
    return array
  },
  chosenFixation: (state) => {
    const array = []
    state.filter.categories.fixation.forEach((i) => {
      if (i.isChosen) {
        array.push(i.getter)
      }
    })
    return array
  },
  chosenPrints: (state) => {
    const array = []
    state.filter.categories.prints.forEach((i) => {
      if (i.isChosen) {
        array.push(i.getter)
      }
    })
    return array
  },
  filtered (state, getters) {
    if (state.filter.searchString.length > 0) {
      return state.products.filter(i =>
        i.title.toLowerCase().trim().includes(state.filter.searchString)
      )
    } else {
      return state.products
        .filter(function (i) {
          console.log('chosenCategories', getters.chosenCategories)
          console.log('chosenFixation', getters.chosenFixation)
          console.log('chosenPrints', getters.chosenPrints)
          console.log(i)
          return (
            (state.filter.availabilityMode.all.isChosen ||
              (i.availability && state.filter.availabilityMode.available.isChosen) ||
              (!i.availability && state.filter.availabilityMode.notAvailable.isChosen)) &&
            i.price <= state.filter.maxPrice &&
            i.price >= state.filter.minPrice &&
            (getters.chosenCategories.length === 0 ||
              getters.chosenCategories.includes(i.categories)) &&
            (getters.chosenFixation.length === 0 ||
              getters.chosenFixation.includes(i.fixation)) &&
            (getters.chosenPrints.length === 0 ||
              getters.chosenPrints.includes(i.prints))
          )
        })
        .sort(function (a, b) {
          if (state.filter.sortMode.fromMax.isChosen) {
            if (a.price > b.price) { return -1 }
            if (a.price < b.price) { return 1 }
            if (a.price === b.price) { return 0 }
          }
          if (state.filter.sortMode.fromMin.isChosen) {
            if (a.price > b.price) { return 1 }
            if (a.price < b.price) { return -1 }
            if (a.price === b.price) { return 0 }
          }
        })
    }
  }
}

export const mutations = {
  fetchProducts (state, products) {
    state.products = products
  },
  toggleFilter (state, payload) {
    state.filter.categories.productTypes.forEach((i) => {
      if (i.getter === payload) {
        i.isChosen = !i.isChosen
      }
    })
    state.filter.categories.prints.forEach((i) => {
      if (i.getter === payload) {
        i.isChosen = !i.isChosen
      }
    })
    state.filter.categories.fixation.forEach((i) => {
      if (i.getter === payload) {
        i.isChosen = !i.isChosen
      }
    })
  },
  changePrice (state, payload) {
    state.filter.minPrice = payload[0]
    state.filter.maxPrice = payload[1]
  },
  changeSearchString (state, payload) {
    state.filter.searchString = payload
  },
  toggleAvailabilityMode (state, payload) {
    Object.values(state.filter.availabilityMode).forEach((i) => {
      if (i.title === payload) {
        return (i.isChosen = true)
      } else {
        return (i.isChosen = false)
      }
    })
  },
  toggleSortMode (state, payload) {
    Object.values(state.filter.sortMode).forEach((i) => {
      if (i.title === payload) {
        return (i.isChosen = true)
      } else {
        return (i.isChosen = false)
      }
    })
  }
}
