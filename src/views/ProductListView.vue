<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductService from '@/services/ProductService.js'

const products = ref(null)

onMounted(() => {
  ProductService.getProducts()
    .then((response) => {
      products.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Beta Product Management</h1>
  <div class="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
