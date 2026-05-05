import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api/products'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// GET all products
export const getProducts = async () => {
  try {
    const response = await api.get('/')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// GET product by id
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error
  }
}

// POST create new product
export const createProduct = async (data) => {
  try {
    const response = await api.post('/', data)
    return response.data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}

// PUT update product
export const updateProduct = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data)
    return response.data
  } catch (error) {
    console.error(`Error updating product ${id}:`, error)
    throw error
  }
}

// DELETE product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error)
    throw error
  }
}
