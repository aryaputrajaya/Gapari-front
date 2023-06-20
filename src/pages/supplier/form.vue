<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Mitra" icon="extension" />
          <q-breadcrumbs-el label="Supplier" icon="shopping_bag" />
          <q-breadcrumbs-el v-if="this.editMode" label="Edit Supplier" icon="edit" />
          <q-breadcrumbs-el v-else label="Tambah Supplier" icon="add" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-sm q-gutter-md">

        <div class="row col fit">
          <q-card class="my-card col" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col q-pa-lg">
                <div class="col">
                  <div class="col-2 q-table__title">{{this.title}} Data Supplier</div>
                  <p class="text-caption">Form {{this.title}} data Supplier.</p>
                </div>
                <q-form @submit="onSubmit" @reset="onReset">

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input
                        filled
                        v-model="id_supplier"
                        label="Supplier ID"
                        lazy-rules
                        dense
                        readonly
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        v-model="namaSupplier"
                        label="Nama Supplier"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Nama Supplie tidak boleh kosong !']"
                      />
                    </div>
                  </div>

                    <div class="row q-gutter-sm">
                      <div class="col">
                        <q-input
                          filled
                          v-model="jenisSupplier"
                          label="Jenis Supplier"
                          lazy-rules
                          dense
                          :rules="[ val => val && val.length > 0 || 'Jenis Supplie tidak boleh kosong !']"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          filled
                          v-model="alamatSupplier"
                          label="Alamat"
                          lazy-rules
                          dense
                          :rules="[ val => val && val.length > 0 || 'Jumlah pembelian tidak boleh 0 / kosong !']"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm">
                      <div class="col">
                        <q-input
                          filled
                          v-model="kotaSupplier"
                          label="Kota"
                          lazy-rules
                          dense
                          :rules="[  val => val && val.length > 0 || 'Harga satuan tidak boleh 0 / kosong !']"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          filled
                          v-model="posSupplier"
                          label="Kode POS"
                          lazy-rules
                          dense
                          :rules="[  val => val && val.length > 0 || 'Kode Pos tidak boleh 0 / kosong !']"
                        >
                        </q-input>
                      </div>
                    </div>
                    <div class="row q-gutter-sm">
                      <div class="col">
                        <q-input
                          filled
                          v-model="teleponSupplier"
                          label="No telepon"
                          lazy-rules
                          dense
                          :rules="[  val => val && val.length > 0 || 'Harga satuan tidak boleh 0 / kosong !']"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          filled
                          v-model="emailSupplier"
                          label="Email"
                          lazy-rules
                          dense
                          :rules="[  val => val && val.length > 0 || 'Pajak tidak boleh 0 / kosong !']"
                        >
                        </q-input>
                      </div>
                    </div>

                  <div>
                    <q-btn label="Submit" outline type="submit" color="green" style="width:150px" />
                    <q-btn label="Reset" type="reset" color="red" outline class="q-ml-sm" style="width:150px" />
                  </div>
                </q-form>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

        <div class="row col fit">
          <q-card class="my-card q-pa-md col bg-blue-10">
            <q-breadcrumbs separator="---" class="text-white" active-color="secondary">
              <q-breadcrumbs-el label="Petunjuk penggunaan" icon="lightbulb" />
            </q-breadcrumbs>
          </q-card>

          <q-card class="my-card row q-mt-md" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col">
                <div class="row q-gutter-sm items-center">
                  <div class="col">
                    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" style="height: 300px" />
                  </div>
                  <div class="col">
                    <q-timeline color="secondary">

                      <q-timeline-entry subtitle="Tahap I" side="left">
                        <div>
                          Silahkan masukan nama Supplier
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 2" side="right">
                        <div>
                          Selanjutnya masukan identitas lain di dalam kolom tersebut
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 3" side="right">
                        <div>
                          Pastikan seluruh data sudah benar lalu tekan tombol submit untuk melakukan input data pembelian.
                        </div>
                      </q-timeline-entry>

                    </q-timeline>
                  </div>
                </div>

              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>

</template>

<script>
import Lottie from 'components/lottie'
import * as animationData from 'assets/add_penjualan.json'

// const listProduk = []

export default {
  components: {
    lottie: Lottie
  },
  props: {
    editMode: Boolean,
    title: String
  },
  data () {
    return {
      id_supplier: this.$generateId(),
      namaSupplier: null,
      jenisSupplier: null,
      alamatSupplier: null,
      kotaSupplier: null,
      posSupplier: null,
      teleponSupplier: null,
      emailSupplier: null,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2
    }
  },
  created () {
    // this.getProduct()
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    play: function () {
      this.anim.play()
    },
    pause: function () {
      this.anim.pause()
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    },
    // getProduct () {
    //   this.$api.get('product/get')
    //     .then(res => {
    //       listProduk = res.data.result
    //       // listProduk = list.map(product => {
    //       //   return product.nama_product
    //       // })
    //     })
    // },
    // filterProduct (val, update) {
    //   if (val === '') {
    //     update(() => {
    //       this.options.products = listProduk
    //     })
    //     return
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase()
    //     this.options.products = listProduk.filter(v => v.nama_product.toLowerCase().indexOf(needle) > -1)
    //   })
    // },
    onSubmit () {
      try {
        this.$api.post('supplier/add_supplier', {
          id_supplier: this.id_supplier,
          namaSupplier: this.namaSupplier,
          jenisSupplier: this.jenisSupplier,
          alamatSupplier: this.alamatSupplier,
          kotaSupplier: this.kotaSupplier,
          posSupplier: this.posSupplier,
          teleponSupplier: this.teleponSupplier,
          emailSupplier: this.emailSupplier
        })
          .then(res => {
            if (res.data.status !== true) {
              this.$showNotif(res.data.message, 'negative')
            } else {
              this.$showNotif('Data Customer berhasil di input !', 'positive')
              this.$router.go(-1)
            }
          })
      } catch (e) {
        this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
    onReset () {
      this.namaSupplier = null
      this.jenisSupplier = null
      this.alamatSupplier = null
      this.kotaSupplier = null
      this.posSupplier = null
      this.teleponSupplier = null
      this.emailSupplier = null
    }
  }
}
</script>

<style scoped>

</style>
