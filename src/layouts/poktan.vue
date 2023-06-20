<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-grey-2 text-black q-pa-md" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
          <q-icon
            v-for="size in ['xl']"
            :key="size"
            :size="size"
            name="flutter_dash"
          />
          <q-space />
          <q-tabs v-model="tab" shrink>
            <q-route-tab name="tab1" label="Home" :to="{ name: 'dashboard_poktan' }"/>
            <q-route-tab name="tab2" label="About" :to="{ name: 'about_poktan' }" />
            <q-route-tab name="tab3" label="Shop" :to="{ name: 'shop_poktan' }" />
            <q-route-tab name="tab4" label="Product" />
            <q-route-tab name="tab5" label="Blog" />
            <q-route-tab name="tab6" label="Contact" />
            <q-route-tab name="tab7" icon="shopping_cart"/>
          </q-tabs>
        </q-toolbar>
        <div v-if="$q.screen.xs || $q.screen.sm">
            <q-toolbar class="bg-grey-2 text-black q-pa-md">
            <q-btn flat @click="drawer = !drawer" round icon="menu" color="black"/>
            <q-drawer
                style="background-color: white;"
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                overlay
                side="right"
            >
                <q-scroll-area class="fit">
                    <q-list padding class="menu-list">
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="home" />
                        </q-item-section>
                        <q-item-section>
                            Home
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="web" />
                        </q-item-section>
                        <q-item-section>
                            Website
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="videocam" />
                        </q-item-section>
                        <q-item-section>
                            Konten
                        </q-item-section>
                    </q-item>
                    <q-item  clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="note_alt" />
                        </q-item-section>
                        <q-item-section>
                            Acara
                        </q-item-section>
                    </q-item>
                </q-list>
                </q-scroll-area>
            </q-drawer>
          </q-toolbar>
        </div>
    </q-header>
    <q-footer>
      <div class="bg-grey-2 q-pa-xl text-center text-black">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="fontBesar">My Account</div>
            <div>My Account</div>
            <div>Order History</div>
            <div>Wishlist</div>
            <div>Newletter</div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="fontBesar">Information</div>
            <div>About Us</div>
            <div>Delivery Information</div>
            <div>Privacy policy</div>
            <div>Terms & Conditions</div>
            <div>Customers Service</div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="fontBesar">Contact Us</div>
            <div>(008) 254 254 254 25487</div>
            <div>(008) 358 587 657 6985</div>
            <div>support@example.com</div>
            <div>example@admin.com</div>
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="fontBesar">Find Us</div>
          </div>
        </div>
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      tab: ref(''),
      drawer: false
    }
  }
}
</script>
<style scoped>
.font {
  font-family: 'Times New Roman', Times, serif;
}
.my-card {
  width: 100%;
  max-width: 300px;
}
.my-card2 {
  width: 100%;
}
</style>
