<template>
  <div>
    <nuxt-link :to="'/'">
      main page
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default class FeedPage extends Vue {
  async created() {
    // eslint-disable-next-line
    if (process.client) {
      await this.slowClientMethod()
    } else {
      await this.slowServerMethod()
    }
  }

  async slowClientMethod() {
    await this.sleep(200)
  }

  async slowServerMethod() {
    await this.sleep(200)
  }

  // eslint-disable-next-line
  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
</script>
