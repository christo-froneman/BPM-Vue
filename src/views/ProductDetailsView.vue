<script setup>
import { ref, onMounted } from 'vue'
import ProductService from '@/services/ProductService.js'

const props = defineProps({
  id: {
    required: true,
  },
})
const product = ref(null)

onMounted(() => {
  ProductService.getProduct(props.id)
    .then((response) => {
      product.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img class="product-image" :src="`@/${product.imageUrl}`" />
    <div class="row">
      <div class="column">
        <p class="label">Product Code:&nbsp;</p>
      </div>
      <div class="column">
        <p class="left">{{ product.code }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p class="label">Release Date:&nbsp;</p>
      </div>
      <div class="column">
        <p class="left">{{ product.releaseDate }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p class="label">Price:&nbsp;</p>
      </div>
      <div class="column">
        <p class="left">${{ product.price }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p class="label">Description:&nbsp;</p>
      </div>
      <div class="column">
        <p class="left">{{ product.description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p class="label">5 Star Rating:&nbsp;</p>
      </div>
      <div class="column">
        <p class="left">{{ product.starRating }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 2em;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
.left {
  text-align: left;
}
.label {
  text-align: right;
  font-weight: bold;
}
.product-image {
  width: 100px;
  height: 100px;
}
</style>
