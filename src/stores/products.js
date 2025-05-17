import { defineStore } from "pinia";
import httpClient from "@/views/services/http-client";

export const useProducts = defineStore("products", {
  state: () => ({ products: null }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    getAllProducts() {
      httpClient
        .get('/products')
        .then((response) => (this.products = response.data));
    },
    createProduct(product) {
      httpClient
        .post("/products", product)
        .then((response) => console.log(response))
    } 
  },
  persist: true,
});