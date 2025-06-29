<template>
<span :title="isLoading"></span>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'
export default ({
  props: ['isLoading'],
  data () {
    return {
      pleaseWaitInstance: null
    }
  },
  // mounted () {
  //   this.updatePleaseWait()
  // },
  // beforeUpdate () {
  //   this.updatePleaseWait()
  // },
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    }
  },
  methods: {

     open() {
      // Attaching a `pleaseWaitInstance` property (no need to declare)...
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo: 'https://pathgather.github.io/please-wait/assets/images/pathgather.png',
          backgroundColor: '#f46d3b',
          loadingHtml: '<p class="loading-message">A good day to you fine user!</p>'
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    },

    // updatePleaseWait () {
    //   if (this.isLoading && this.pleaseWaitInstance == null) {
    //     this.pleaseWaitInstance = pleaseWait({
    //       logo: 'https://pathgather.github.io/please-wait/assets/images/pathgather.png',
    //       backgroundColor: '#f46d3b',
    //       loadingHtml: '<p class="loading-message">A good day to you fine user!</p>'
    //     })
    //   }
    //   if (!this.isLoading && this.pleaseWaitInstance != null) {
    //     this.pleaseWaitInstance.finish()
    //   }
    // }
  }
});
</script>

    