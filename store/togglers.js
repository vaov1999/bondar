export const state = () => ({
  isVisibleSidebar: false,
  isVisibleSidebarDesktop: true,
  isVisibleSidebarFilter: false,
  isVisibleSearchBar: false,
})

export const mutations = {
  toggleSidebar(state) {
    state.isVisibleSidebarMobile = !state.isVisibleSidebarMobile
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
}
