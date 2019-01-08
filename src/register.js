import { createApi } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'

createApi(Vue, HeaderDetail)
createApi(Vue, ShopCartList)
