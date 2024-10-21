import apiFetch from './apiFetch'

// Session auth is included in apiFetch headers so no need to pass here
export const getSessionCart = () => apiFetch('GET', '/cart')

export const addPlantToCart = ({ plantId, quantity, potColor }) =>
  apiFetch('POST', `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor,
  })

export const removeItemFromCart = ({ cartItemId }) =>
  apiFetch('DELETE', `/cart/${cartItemId}`)
