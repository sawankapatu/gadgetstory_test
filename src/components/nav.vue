<template>
  <div>
    <div style="background-color: #aa2a31;">
        <b-img :src="require('@/images/RSQ/Logo.png')" fluid alt="Fluid image" style="padding-top: 60px; padding-bottom: 60px; width: 500px;"></b-img>
    </div>

    <div style="background-color: #aa2a31;">
      <b-nav pills align="center">
        <!-- class="fixed-top" -->
        <b-nav-item to="/" style="background-color: #000000;"><span style="color: #ffffff;">Home</span></b-nav-item> <!-- active -->
        <!-- <b-nav-item>
          <router-link :to="{ name: '/product' }">
            <span style="color: #000000;">สินค้า</span>
          </router-link>
        </b-nav-item> -->
        <b-nav-item to="/components/product"><span style="color: #000000;">Product</span></b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      color: '#000000',
    }
  }
}
</script>

<style>
.navTextColor{
  color: #ffffff;
}
</style>