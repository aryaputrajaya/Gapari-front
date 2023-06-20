<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #588157">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title style="font-family:customfont" class="text-h5">Admin Gapari</q-toolbar-title>
          <q-btn-dropdown flat label="Administrator" icon="manage_accounts" left stretch>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-btn outline color="primary" label="Profile" clickable :to="{ name: 'profile' }" size="sm" icon="manage_accounts" left />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="~assets/logo_gapari.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Administrator</div>

                <q-btn
                  color="danger"
                  label="Logout"
                  flat
                  size="sm"
                  v-close-popup
                  @click="confirm = true"
                />

              </div>
            </div>

          </q-btn-dropdown>
        </q-toolbar>
    </q-header>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_very_dissatisfied" text-color="primary" />
          <span class="q-ml-sm">Apakah anda yakin untuk keluar ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat :to="{ name: 'dash' }" label="Logout" color="primary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable :to="{ name: 'dashboard' }" v-ripple style="color: #588157">

              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item>

              <q-item-section>
                MAIN MENU
              </q-item-section>

            </q-item>

            <q-item clickable :to="{ name: 'data_user' }" v-ripple style="color: #588157">
                <q-item-section avatar>
                  <q-icon name="category" />
                </q-item-section>

                <q-item-section>
                  Data User
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple style="color: #588157">
                <q-item-section avatar>
                  <q-icon name="storefront" />
                </q-item-section>

                <q-item-section>
                  Data Wilayah
                </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/forest.jpg" style="height: 150px;">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~assets/logo_gapari.png">
            </q-avatar>
            <div claSs="text-weight-bold">Administartor</div>
            <div>@admin_gapari</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer reveal class="bg-grey-3">
        <q-toolbar>
          <q-toolbar-title class="text-h6 text-body1" style="font-size:13px; color: #588157">Copyright 2021</q-toolbar-title>
        </q-toolbar>
      </q-footer> -->
  </q-layout>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      confirm: false
    }
  },
  methods: {
    logout () {
      LocalStorage.remove('user', { path: '/auth' })
      this.$router.go({ name: 'signin' })
    }
  }
}
</script>
