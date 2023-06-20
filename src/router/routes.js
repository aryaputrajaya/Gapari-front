const routes = [
  {
    path: '/auth',
    component: () => import('layouts/Signin.vue'),
    children: [
      { path: '', name: 'signin', component: () => import('src/pages/Access/Signin.vue') }
    ],
    meta: {
      authGuest: true
    }
  },
  {
    path: '/akuntansi',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: '/product', name: 'product', component: () => import('pages/Product.vue') },
      { path: '/product/input', name: 'product_add', component: () => import('pages/product/input.vue') },
      { path: '/product/edit/:id', name: 'product_edit', component: () => import('pages/product/edit.vue') },
      { path: '/kategoriproduk/input', name: 'product_kategori_add', component: () => import('pages/kategori_product/input.vue') },
      { path: '/kategoriproduk/edit/:id', name: 'product_kategori_edit', component: () => import('pages/kategori_product/edit.vue') },
      { path: '/jenisproduk/input', name: 'product_jenis_add', component: () => import('pages/jenis_product/input.vue') },
      { path: '/jenisproduk/edit/:id', name: 'product_jenis_edit', component: () => import('pages/jenis_product/edit.vue') },
      { path: '/penjualan', name: 'penjualan', component: () => import('pages/Penjualan.vue') },
      { path: '/penjualan/input', name: 'penjualan_add', component: () => import('pages/penjualan/input.vue') },
      { path: '/pembelian', name: 'pembelian', component: () => import('pages/Pembelian.vue') },
      { path: '/pembelian/input', name: 'pembelian_add', component: () => import('pages/pembelian/input.vue') },
      { path: '/pengeluaran', name: 'pengeluaran', component: () => import('pages/Pengeluaran.vue') },
      { path: '/pengeluaran/input', name: 'pengeluaran_add', component: () => import('pages/pengeluaran/input.vue') },
      { path: '/retur', name: 'retur', component: () => import('pages/Retur.vue') },
      { path: '/retur/input', name: 'retur_add', component: () => import('pages/retur/input.vue') },
      { path: '/modal', name: 'modal', component: () => import('pages/Modal.vue') },
      { path: '/modal/input', name: 'modal_add', component: () => import('pages/modal/input.vue') },
      { path: '/laporan', name: 'laporan', component: () => import('pages/Laporan.vue') },
      { path: '/profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: '/invoice', name: 'invoice', component: () => import('pages/Invoice.vue') },
      { path: '/customer_add', name: 'customer_add', component: () => import('pages/customer/input.vue') },
      { path: '/customer', name: 'customer', component: () => import('pages/Customers.vue') },
      { path: '/supplier_add', name: 'supplier_add', component: () => import('pages/supplier/input.vue') },
      { path: '/supplier', name: 'supplier', component: () => import('pages/Supplier.vue') }
    ]
  },
  {
    path: '/selsafical',
    component: () => import('src/layouts/selsafical/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('src/pages/gapari_landing_page/selsafical/Index.vue') },
      { path: 'produk', name: 'produk', component: () => import('src/pages/gapari_landing_page/selsafical/produk.vue') },
      { path: 'tentangKami', name: 'tentangKami', component: () => import('src/pages/gapari_landing_page/selsafical/tentang_kami.vue') },
      // { path: 'produkRinci', name: 'produkRinci', component: () => import('pages/produkRinci.vue') },
      { path: 'mengapaKami', name: 'mengapaKami', component: () => import('src/pages/gapari_landing_page/selsafical/mengapaKami.vue') },
      { path: 'gulaJahe', name: 'gulaJahe', component: () => import('pages/gapari_landing_page/gula/gulaArenJahe.vue') },
      { path: 'gulaJaheMerah', name: 'gulaJaheMareh', component: () => import('pages/gapari_landing_page/gula/gulaArenJaheMerah.vue') },
      { path: 'gulaBerasKencur', name: 'gulaBerasKencur', component: () => import('pages/gapari_landing_page/gula/gulaArenBerasKencur.vue') },
      { path: 'gulaCetak', name: 'gulaCetak', component: () => import('pages/gapari_landing_page/gula/gulaCetak.vue') },
      { path: 'gulaArenOriginal', name: 'gulaArenOriginal', component: () => import('pages/gapari_landing_page/gula/gulaArenOriginal.vue') },
      { path: 'gulaArenTemulawak', name: 'gulaArenTemulawak', component: () => import('pages/gapari_landing_page/gula/gulaArenTemulawak.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    meta: {
      authGuest: true
    },
    children: [
      { path: '', name: 'loginGapari', component: () => import('pages/gapari_landing_page/loginGapari.vue') },
      { path: 'loginUser', name: 'loginUser', component: () => import('src/pages/gapari_landing_page/selsafical/loginUser.vue') },
      { path: '/registerUser', name: 'registerUser', component: () => import('src/pages/gapari_landing_page/selsafical/registerUser.vue') },
      { path: 'registerGapari', name: 'registerGapari', component: () => import('pages/gapari_landing_page/registerGapari.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', name: 'dash', component: () => import('pages/gapari_landing_page/dasboard.vue') },
      { path: 'website', name: 'website', component: () => import('pages/gapari_landing_page/website.vue') }
      // { path: 'col', name: 'col', component: () => import('pages/col.vue') }
      // { path: 'loginGapari', name: 'loginGapari', component: () => import('pages/loginGapari.vue') }
    ]
  },
  {
    path: '/login_user',
    name: 'login_user',
    component: () => import('pages/Access/LoginUser.vue')
  },
  {
    path: '/poktan',
    component: () => import('layouts/poktan.vue'),
    children: [
      { path: '', name: 'dashboard_poktan', component: () => import('pages/gapari_poktan/index.vue') },
      { path: 'about_poktan', name: 'about_poktan', component: () => import('pages/gapari_poktan/about.vue') },
      { path: 'shop_poktan', name: 'shop_poktan', component: () => import('pages/gapari_poktan/shop.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'admin_dash', component: () => import('pages/Admin/index.vue') },
      { path: 'data_user', name: 'data_user', component: () => import('pages/Admin/dataUser.vue') }
      // { path: 'about_poktan', name: 'about_poktan', component: () => import('pages/gapari_poktan/about.vue') },
      // { path: 'shop_poktan', name: 'shop_poktan', component: () => import('pages/gapari_poktan/shop.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () =>
      import('pages/Error404.vue')
  }
]

export default routes
