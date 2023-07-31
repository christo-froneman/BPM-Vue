<script setup>
import gardenCart from '../assets/images/garden_cart.png'
import hammer from '../assets/images/hammer.png'
import leafRake from '../assets/images/leaf_rake.png'
import saw from '../assets/images/saw.png'
import xboxController from '../assets/images/xbox-controller.png'
import { ref, onMounted } from 'vue'
import ProductService from '@/services/ProductService.js'

const props = defineProps({
  id: {
    required: true,
  },
})
const product = ref(null)
// Obviously this is not the right way to do this, but for the sake of time
// I am leaving it this way since it works when deployed to render.com
// After all, the goal of this app is just to demonstrate basic Vue concepts and calling to the ASP.NET Core Web API...
const images = [leafRake, gardenCart, hammer, saw, xboxController]

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
  <div v-if="!product">
    <span class="loader"></span>
    <br />
  </div>
  <div v-else>
    <h1>{{ product.name }}</h1>
    <br />
    <img class="product-image" :src="`${images[product.id - 1]}`" />
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
