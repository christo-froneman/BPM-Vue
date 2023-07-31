<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'product-list' }">Products</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

/* Loading Indicator */
.loader {
  position: relative;
  width: 100px;
  height: 16px;
}
.loader:before , .loader:after{
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #000000;
  box-shadow: 32px 0 #000000;
  left: 0;
  top: 0;
  animation: ballMoveX 1s linear infinite;
}
.loader:after {
  box-shadow: none;
  transform-origin: 40px 0;
  transform: rotate(-153deg);
  animation: rotateLoader 1s linear infinite;
}

@keyframes rotateLoader {
  0% , 10%{ transform: rotate(-153deg); }
  90%, 100% { transform: rotate(0deg); }
}
@keyframes ballMoveX {
  0% , 10%{  transform: translateX(0) }
  90%, 100% { transform: translateX(32px) }
}
</style>
