<!-- =========================================================================================
    File Name: Input.vue
    Description: Input Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<!-- CARD 9: DISPATCHED ORDERS -->
<div class="vx-col w-full">
<!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
<div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
  <vs-input class="mb-2 md:mb-0 mr-2" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
  <vs-button class="btn-drop" type="line" color="blue" icon-pack="feather" icon="icon-chevron-down" click="">Sort</vs-button>

<div><vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">MARK AS PAID</vs-button></div>
<div><vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">EXPORT as CSV</vs-button></div>
</div>
  <vx-card title="PAYOUTS">
    <div slot="no-body" class="mt-4">
      <vs-table :data="dispatchedOrders" class="table-dark-inverted">
        <template slot="thead">
          <vs-th>Order ID</vs-th>
          <vs-th>Item</vs-th>
          <vs-th>Vendor</vs-th>
          <vs-th>Commission</vs-th>
          <vs-th>Redeemed Qty</vs-th>
          <vs-th>Redeemed Date</vs-th>
          <vs-th>Redemption Status</vs-th>
          <vs-th>Payment Status</vs-th>
          <vs-th>Payment Date</vs-th>
          <vs-th>Payment Reference</vs-th>
        </template>
      </vs-table>
    </div>

  </vx-card>
</div>
</div>

  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>
