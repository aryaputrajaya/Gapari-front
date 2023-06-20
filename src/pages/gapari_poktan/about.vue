<template>
  <q-page>
    <q-carousel
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="~assets/poktan/sugar.jpg">
        <div class="q-pa-md font text-white text-center q-mt-xl">
          <div class="text-h1 q-mt-xl">About</div>
          <div class="fontSedang">This is page about</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row font q-pa-md q-mt-xl">
      <div class="offset-md-1 col-md-5 col-xs-8 q-ma-xl">
        <div class="fontBesar text-green">Welcome To</div>
        <div class="text-h4 q-mb-lg">Our Sabuj Cha Store!</div>
        <div class="fontSedang text-grey-9 q-mb-md">Sabujcha Shop is a premium HTML template designed and develoved from the ground up with the sole purpose of helping you create an astonishing, the beautiful and user friendly website that will boost your product’s sales.</div>
        <div class="fontSedang text-grey-9">The theme design package provides a complete Magento theme set for your online store according to your desired theme. This includes all Magento themes that are required for your online store's successful implementation.</div>
      </div>
      <div class="col-md-4 col-xs-8 q-ma-xl">
        <q-img src="~assets/poktan/cup.jpg"/>
      </div>
    </div>
    <!-- /product -->
    <div class="text-center q-pa-xl bg-grey-2">
      <div class="row flex flex-center">
        <div class="col-md-2 col-xs-4">
          <q-img src="~assets/poktan/bibit.png"/>
        </div>
      </div>
      <div class="row text-center">
        <div class="italic col-md-8 offset-md-2 col-xs-12" style="font-size: 18px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dicta? Voluptatum tenetur odio quas velit assumenda voluptates quod repellendus unde perspiciatis. Laborum perspiciatis libero accusantium error! Iste nam suscipit reiciendis.</div>
        <div class="col-md-8 offset-md-2 col-xs-12 bold q-mt-lg" style="font-size: 16px">John Sulivan</div>
        <div class="col-md-8 offset-md-2 col-xs-12" style="font-size: 12px" >Customers</div>
      </div>
    </div>
    <div>
      <div class="text-h4 text-center q-pa-xl underline font">Team Members</div>
      <div class="row q-gutter-xl justify-center q-mb-xl">
        <div class="col-md-3 col-xs-12">
          <q-img src="~assets/poktan/human1.jpg" />
          <div class="fontBesar bold text-center">Manager</div>
          <div class="fontSedang text-center">Diva Mustane</div>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-img src="~assets/poktan/human2.jpg" />
          <div class="fontBesar bold text-center">Develover</div>
          <div class="fontSedang text-center">Sain Mandra</div>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-img src="~assets/poktan/human1.jpg" />
          <div class="fontBesar bold text-center">Designer</div>
          <div class="fontSedang text-center">Mark Hummels</div>
        </div>
      </div>
    </div>
<!-- Jumlah Produk -->
    <div class="row justify-center q-pa-xl text-center bg-grey-2">
      <div class="col-md-3 col-xs-12">
        <div class="text-h3 font underline text-green">360</div>
        <div class="fontBesar">Project Done</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="text-h3 font underline text-green">660</div>
        <div class="fontBesar">Cups Of Coffee</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="text-h3 font underline text-green">420</div>
        <div class="fontBesar">Branding</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="text-h3 font underline text-green">310</div>
        <div class="fontBesar">Happy Clients</div>
      </div>
    </div>
<!-- Logo Brand -->
    <div class="row justify-center q-pa-xl text-center">
      <div class="col-md-3 col-xs-12">
        <div class="fontBesar font text-grey-4">
          <q-icon name="cloud" size="xl"/>
            Demo
        </div>
        <div class="text-h4 font">Logo Brand</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="fontBesar font text-grey-4">
          <q-icon name="web_stories" size="xl"/>
            Demo
        </div>
        <div class="text-h4 font">Logo Brand</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="fontBesar font text-grey-4">
          <q-icon name="diamond" size="xl"/>
            Demo
        </div>
        <div class="text-h4 font">Logo Brand</div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="fontBesar font text-grey-4">
          <q-icon name="polymer" size="xl"/>
            Demo
        </div>
        <div class="text-h4 font">Logo Brand</div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      tab: ref(''),
      slide: ref('first'),
      autoplay: ref(true),
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
