<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Mitra" icon="extension" />
          <q-breadcrumbs-el label="Customers" icon="shopping_bag" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg">

        <div class="row col-12 q-mt-md">
          <q-card class="my-card col" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="col-12 q-pa-sm">
                  <q-table
                    title="Master Data Customers"
                    aria-label="Text"
                    class="text-h5"
                    :rows="rows"
                    flat
                    :columns="columns"
                    row-key="name"
                    :filter="filter"
                  >

                  <template v-slot:top>
                    <div class="col">
                      <div class="col-2 q-table__title">Master Data Customer</div>
                      <p class="text-caption">Data customer yang di lakukan di dalam sistem salsafical.</p>
                    </div>

                    <q-space />

                    <q-btn flat round color="primary" icon="search" @click="visibles = !visibles" size="md" class="q-mr-sm" />
                    <q-slide-transition>
                      <div v-show="visibles">
                        <q-input outlined debounce="300" placeholder="Placeholder" style="width:300px" color="primary" v-model="filter" dense />
                      </div>
                    </q-slide-transition>
                    <q-btn
                      dense
                      icon="add"
                      class="q-ml-md q-pr-md"
                      color="blue-13"
                      label="Tambah Customer"
                      :to="{ name: 'customer_add' }"
                      size="md"
                      outline
                    />
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="id_customer" :props="props">{{props.row.id_customer}}</q-td>
                      <q-td key="namaCustomer" :props="props">{{props.row.namaCustomer}}</q-td>
                      <q-td key="alamatCustomer" :props="props">{{props.row.alamatCustomer}}</q-td>
                      <q-td key="kotaCustomer" :props="props">{{props.row.kotaCustomer}}</q-td>
                      <q-td key="posCustomer" :props="props">{{props.row.posCustomer}}</q-td>
                      <q-td key="teleponCustomer" :props="props">{{props.row.teleponCustomer}}</q-td>
                      <q-td key="emailCustomer" :props="props">{{props.row.emailCustomer}}</q-td>
                      <q-td key="aksi" :props="props">
                        <q-btn round outline color="red" icon="delete" no-caps class="q-ml-sm" />
                      </q-td>
                    </q-tr>
                  </template>

                </q-table>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
      <q-select
    filled
    label="Nama Supplier"
    :options=options
    option-value="id_customer"
    option-label="namaCustomer"
    outlined
    dense
    :rules="[ val => val || 'Nama produk tidak boleh kosong !']"
  />
  </q-page>

</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      options: [],
      namaCustomer: [],
      visibles: false,
      filter: null,
      totalHutang: 0,
      totalLunas: 0,
      columns: [
        { name: 'id_customer', required: true, label: 'ID Customers', align: 'left', field: 'id_customer', sortable: true },
        { name: 'namaCustomer', required: true, label: 'Nama Customer', align: 'left', field: 'namaCustomer', sortable: true },
        { name: 'alamatCustomer', required: true, label: 'Alamat', align: 'left', field: 'alamatCustomer', sortable: true },
        { name: 'kotaCustomer', required: true, label: 'Kota', align: 'left', field: 'kotaCustomer', sortable: true },
        { name: 'posCustomer', required: true, label: 'Kode POS', align: 'left', field: 'posCustomer', sortable: true },
        { name: 'teleponCustomer', required: true, label: 'No Telepon', align: 'left', field: 'teleponCustomer', sortable: true },
        { name: 'emailCustomer', required: true, label: 'Email', align: 'left', field: 'emailCustomer', sortable: true },
        { name: 'aksi', label: 'Actions', field: 'aksi', align: 'center' }
      ],
      rows: []
    }
  },
  created () {
    this.getCustomer()
  },
  methods: {
    getCustomer () {
      try {
        this.$api.get('customer/view_customer')
          .then(res => {
            if (res.data.status !== true) {
              this.$showNotif(res.data.message, 'negative')
            } else {
              this.$showNotif(res.data.message, 'positive')
              const data = res.data.result
              this.rows = data
              this.options = res.data.result
            }
          })
      } catch (e) {
        this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    }
  }
}
</script>

<style scoped>

</style>
