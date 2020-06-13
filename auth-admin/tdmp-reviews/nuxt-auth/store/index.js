export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  products(state) {
  	//alert(state.auth.products)
    return state.auth.products
  }
}