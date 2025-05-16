<template>
  <a href="#" @click.prevent="logout" class="block mb-10 text-red-800 hover:underline">Sair</a>
  {{ products }}
</template>

<script>
import httpClient from '../services/http-client'
import storage from '../services/storage'

export default {
  data() {
    return {
      products: [],
    }
  },
  beforeRouteEnter(to, from, next) {
    httpClient
      .get('/products')
      .then((response) => next((vm) => (vm.products = response.data)))
  },
  methods: {
    logout() {
      httpClient.post('/logout').then((response) => {
        storage.remove('auth')
        location.href = '/auth/login'
      })
    },
  },
}
</script>
