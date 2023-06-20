<template>
  <q-page>
    <q-carousel
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="~assets/poktan/sugar.jpg">
        <div class="q-pa-md font text-white text-center q-mt-xl">
          <div class="text-h1 q-mt-xl">Product</div>
          <div class="fontSedang">This is page product</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row q-pa-xl q-gutter-lg">
      <div class="col-md-2 col-xs-12">
        <q-card class="q-mt-xl">
          <div class="q-pa-md">
            <q-input filled v-model="text" :dense="dense">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
            <div class="font fontBesar q-mt-lg">Custom Categories</div>
          </div>
        </q-card>
      </div>
      <div class="col-md-9 col-xs-12 row q-mt-xl">
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="my-card q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-grey">Variable Product</div>
              <div class="text-subtitle2">Rp 50.000 - Rp. 100.000</div>
            </q-card-section>
          </q-card>
        </div>
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
