// Mock API functions for product management
// In a real application, these would make HTTP requests to a backend server

// Mock data
let products = [
  { _id: '1', name: 'Laptop', description: 'High-performance laptop', price: 1200.00, quantity: 10, category: 'Electronics' },
  { _id: '2', name: 'Phone', description: 'Latest smartphone', price: 800.00, quantity: 25, category: 'Electronics' },
  { _id: '3', name: 'Book', description: 'Bestselling novel', price: 15.99, quantity: 100, category: 'Books' }
];

let nextId = 4;

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay(500); // Simulate network delay
  return { data: products };
};

export const getProduct = async (id) => {
  await delay(300); // Simulate network delay
  const product = products.find(p => p._id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return { data: product };
};

export const createProduct = async (productData) => {
  await delay(400); // Simulate network delay
  const newProduct = {
    _id: String(nextId++),
    ...productData
  };
  products.push(newProduct);
  return { data: newProduct };
};

export const updateProduct = async (id, productData) => {
  await delay(400); // Simulate network delay
  const index = products.findIndex(p => p._id === id);
  if (index === -1) {
    throw new Error('Product not found');
  }
  products[index] = { ...products[index], ...productData };
  return { data: products[index] };
};

export const deleteProduct = async (id) => {
  await delay(300); // Simulate network delay
  const index = products.findIndex(p => p._id === id);
  if (index === -1) {
    throw new Error('Product not found');
  }
  products.splice(index, 1);
  return { data: {} };
};