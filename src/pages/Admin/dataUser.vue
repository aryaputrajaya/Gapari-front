<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-6 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left"></div>
          </div>
          <div class="col">
            <q-banner inline-actions class="warna">
              <div class="text-h6">Data User Gapari</div>
              <div>Pengguna Aplikasi</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 q-pa-md col-xs-12">
        <div class="text-h5 text-white q-pa-md text-center hijau" style="border-radius: 5px">
          Data User Gapari
        </div>
            <q-card>
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              flats
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="No" :props="props">
                  </q-td>
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>
                  <q-td key="username" :props="props">
                    {{ props.row.username }}
                  </q-td>
                  <q-td key="address" :props="props">
                    {{ props.row.address }}
                  </q-td>
                  <q-td key="phone" :props="props">
                    {{ props.row.phone }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
            <!-- <q-btn label="Lihat Detail" color="primary" icon="arrow_circle_down" class="q-ma-sm q-mb-md" /> -->
          </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import LineChart from '../components/charts/LineChart'
// import BarChart from '../components/charts/PieChart'
// import 'chartkick/chart.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    // LineChart
    // BarChart
  },
  data () {
    return {
      columns: [
        { name: 'name', align: 'left', label: 'Nama Lengkap', field: 'name', sortable: true },
        { name: 'username', align: 'left', label: 'Username', field: 'username', sortable: true },
        { name: 'address', align: 'left', label: 'Alamat', field: 'address', sortable: true },
        { name: 'phone', align: 'left', label: 'No Telepon', field: 'phone', sortable: true }
      ],
      rows: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('users/get_user')
        .then(res => {
          if (res.data.status !== true) {
            this.$showNotif(res.data.message, 'negative')
          } else {
            const data = res.data.result
            this.rows = data
          }
        })
    }
  }
})
</script>
<style scoped>
.left {
  width: 4px;
  height: 100%;
  background-color: #588157;
}
.hijau {
  background-color: #588157;
}
</style>
