import apiFetch from './apiFetch'

export const getPlants = () => apiFetch('GET', '/plants')

export const getPlantById = ({ plantId }) =>
  apiFetch('GET', `/plants/${plantId}`)
