<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Mitra" icon="extension" />
          <q-breadcrumbs-el label="Supplier" icon="shopping_bag" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg">

        <div class="row col-12 q-mt-md">
          <q-card class="my-card col" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="col-12 q-pa-sm">
                  <q-table
                    title="Master Data Supplier"
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
                      <div class="col-2 q-table__title">Master Data Supplier</div>
                      <p class="text-caption">Data Supplier yang di lakukan di dalam sistem salsafical.</p>
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
                      label="Tambah Supplier"
                      :to="{ name: 'supplier_add' }"
                      size="md"
                      outline
                    />
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="id_supplier" :props="props">{{props.row.id_supplier}}</q-td>
                      <q-td key="namaSupplier" :props="props">{{props.row.namaSupplier}}</q-td>
                      <q-td key="jenisSupplier" :props="props">{{props.row.jenisSupplier}}</q-td>
                      <q-td key="alamatSupplier" :props="props">{{props.row.alamatSupplier}}</q-td>
                      <q-td key="kotaSupplier" :props="props">{{props.row.kotaSupplier}}</q-td>
                      <q-td key="posSupplier" :props="props">{{props.row.posSupplier}}</q-td>
                      <q-td key="teleponSupplier" :props="props">{{props.row.teleponSupplier}}</q-td>
                      <q-td key="emailSupplier" :props="props">{{props.row.emailSupplier}}</q-td>
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
  </q-page>

</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      visibles: false,
      filter: null,
      columns: [
        { name: 'id_supplier', required: true, label: 'ID Suppliers', align: 'left', field: 'id_supplier', sortable: true },
        { name: 'namaSupplier', required: true, label: 'Nama Supplier', align: 'left', field: 'namaSupplier', sortable: true },
        { name: 'jenisSupplier', required: true, label: 'Jenis Supplier', align: 'left', field: 'jenisSupplier', sortable: true },
        { name: 'alamatSupplier', required: true, label: 'Alamat', align: 'left', field: 'alamatSupplier', sortable: true },
        { name: 'kotaSupplier', required: true, label: 'Kota', align: 'left', field: 'kotaSupplier', sortable: true },
        { name: 'posSupplier', required: true, label: 'Kode POS', align: 'left', field: 'posSupplier', sortable: true },
        { name: 'teleponSupplier', required: true, label: 'No Telepon', align: 'left', field: 'teleponSupplier', sortable: true },
        { name: 'emailSupplier', required: true, label: 'Email', align: 'left', field: 'emailSupplier', sortable: true },
        { name: 'aksi', label: 'Actions', field: 'aksi', align: 'center' }
      ],
      rows: []
    }
  },
  created () {
    this.getSupplier()
  },
  methods: {
    getSupplier () {
      try {
        this.$api.get('supplier/view_supplier')
          .then(res => {
            if (res.data.status !== true) {
              this.$showNotif(res.data.message, 'negative')
            } else {
              this.$showNotif(res.data.message, 'positive')
              const data = res.data.result
              this.rows = data
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
