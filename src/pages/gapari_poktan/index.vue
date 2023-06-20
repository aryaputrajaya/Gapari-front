<template>
  <q-page>
    <!-- Banner -->
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="500px"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide name="first" img-src="~assets/poktan/poktan1.jpg">
        <div class="q-pa-md q-ml-xl font">
          <div class="text-h2 text-green q-mt-xl">Want to Stay healty</div>
          <div class="text-h2 text-black">drink matcha</div>
          <div class="text-subtitle1 text-black q-mt-md" style="max-width: 50%" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil? Nulla velit eius, rerum totam, at eum voluptate ullam dicta veniam fugiat facere accusamus necessitatibus saepe quis odio deleniti cupiditate?</div>
          <q-btn label="Shop Now" no-caps class="text-white bg-green q-mt-lg q-pl-lg q-pr-lg" style="font-size: 18px"></q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/poktan/poktan2.jpg">
        <div class="q-pa-md q-ml-xl font" style="text-align: right">
          <div class="text-h2 text-green q-mt-xl">Want to Stay healty</div>
          <div class="text-h2 text-black">drink matcha</div>
          <div class="text-subtitle1 text-black q-mt-md" style="margin-left: 50%" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil? Nulla velit eius, rerum totam, at eum voluptate ullam dicta veniam fugiat facere accusamus necessitatibus saepe quis odio deleniti cupiditate?</div>
          <q-btn label="Shop Now" no-caps class="text-white bg-green q-mt-lg q-pl-lg q-pr-lg" style="font-size: 18px"></q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- /Banner -->
    <div class="row font q-pa-md q-mt-xl">
      <div class="offset-md-1 col-md-5 col-xs-8 q-ma-xl">
        <q-icon name="flutter_dash" size="xl"/>
        <div class="text-h6 text-grey">Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore et dolore magna aliqua.</div>
        <q-btn label="Shop Now" no-caps class="text-white bg-green q-mt-lg q-pl-lg q-pr-lg" style="font-size: 18px"></q-btn>
      </div>
      <div class="col-md-4 col-xs-8 q-ma-xl">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </div>
    </div>
    <!-- Product -->
    <div class="bg-blue-grey-1 q-pt-xl">
      <div class="font text-h4 text-center q-ma-xl underline">New Product</div>
      <div class="row q-pl-xl q-pr-xl q-pt-xl ">
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
      <div class="row q-pl-xl q-pr-xl q-pb-xl">
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
        <div class="col-md-3 col-xs-12">
          <q-card class="my-card q-pa-md bg-blue-grey-1" flat>
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
    <!-- /product -->
    <div class="text-center q-pa-xl">
      <div class="row flex flex-center">
        <div class="col-md-2 col-xs-4">
          <q-img src="~assets/poktan/bibit.png"/>
        </div>
      </div>
      <div class="row text-center ">
        <div class="italic col-md-8 offset-md-2 col-xs-12" style="font-size: 18px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dicta? Voluptatum tenetur odio quas velit assumenda voluptates quod repellendus unde perspiciatis. Laborum perspiciatis libero accusantium error! Iste nam suscipit reiciendis.</div>
        <div class="col-md-8 offset-md-2 col-xs-12 bold q-mt-lg" style="font-size: 16px">John Sulivan</div>
        <div class="col-md-8 offset-md-2 col-xs-12" style="font-size: 12px" >Customers</div>
      </div>
    </div>
    <!-- Latest News -->
    <div class="row q-ml-xl q-mr-xl justify-center"><!-- Untuk menengahkan elemen card menggunakan justify-center -->
      <div class="col-md-3 col-xs-12">
          <q-card class="my-card2 q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="italic font-kecil underline q-mt-sm">Feb 08, 2022</div>
              <div class="judul text-h6 text-grey q-mb-md">Variable Product</div>
              <div class="font line">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis illo maiores? Incidunt, aspernatur! Maiores nobis nesciunt voluptas dolor repellat. Incidunt dolore sequi reprehenderit, fugit inventore voluptas deserunt laboriosam perspiciatis.</div>
              <div class="link q-mt-md"><a href="#">Read More</a></div>
            </q-card-section>
          </q-card>
      </div>
      <div class="col-md-3 col-xs-12">
          <q-card class="my-card2 q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="italic font-kecil underline q-mt-sm">Feb 08, 2022</div>
              <div class="judul text-h6 text-grey q-mb-md">Variable Product</div>
              <div class=" font line">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis illo maiores? Incidunt, aspernatur! Maiores nobis nesciunt voluptas dolor repellat. Incidunt dolore sequi reprehenderit, fugit inventore voluptas deserunt laboriosam perspiciatis.</div>
              <div class="link q-mt-md"><a href="#">Read More</a></div>
            </q-card-section>
          </q-card>
      </div>
      <div class="col-md-3 col-xs-12">
          <q-card class="my-card2 q-pa-md" flat>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
            <q-card-section>
              <div class="italic font-kecil underline q-mt-sm">Feb 08, 2022</div>
              <div class="judul text-h6 text-grey q-mb-md">Variable Product</div>
              <div class="font line">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis illo maiores? Incidunt, aspernatur! Maiores nobis nesciunt voluptas dolor repellat. Incidunt dolore sequi reprehenderit, fugit inventore voluptas deserunt laboriosam perspiciatis.</div>
              <div class="link q-mt-md"><a href="#">Read More</a></div>
            </q-card-section>
          </q-card>
      </div>
    </div>
    <!-- /Latest News -->
    <!-- Footer -->
    <!-- Akhir Footer -->
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
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
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
