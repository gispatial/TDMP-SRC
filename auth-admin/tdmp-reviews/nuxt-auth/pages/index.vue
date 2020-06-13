<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Nuxt Auth</h1>
      
      <table>
      	<tr v-for="product in products" v-bind:key="product.id">
               {{ product.product_name }}
       </tr>
        </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['products'])
  }
}
</script>