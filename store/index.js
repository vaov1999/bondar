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
  isVisibleSidebar: false,
  isVisibleSidebarDesktop: true,
  isVisibleSidebarFilter: false,
  isVisibleSearchBar: false,
})

export const mutations = {
  fetchProducts(state, products) {
    state.products = products
  },
  toggleSidebar(state) {
    state.isVisibleSidebar = !state.isVisibleSidebar
  },
  toggleSidebarDesktop(state) {
    state.isVisibleSidebarDesktop = !state.isVisibleSidebarDesktop
  },
  toggleVisibleSidebarFilter(state) {
    state.isVisibleSidebarFilter = !state.isVisibleSidebarFilter
  },
  toggleVisibleSearchBar(state) {
    state.isVisibleSearchBar = !state.isVisibleSearchBar
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
        return (state.product.fixation.isChosen = !state.product.fixation
          .isChosen)
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
