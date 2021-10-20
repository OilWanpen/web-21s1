<template>
  <div>
    <p> {{ entry.slug }}</p>
    <div class="page-entry-details" v-if="entry"></div>
    <h1>Season Best (SB)<br>
      100m in {{ entry.sb100 }}<br>
      200m in {{ entry.sb200 }}<br>
    </h1>
    <h1>Posonal Best (PB)<br>
      100m in {{ entry.pb100 }}<br>
      200m in {{ entry.pb200 }}<br>
    </h1>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EntryDetails extends Vue {
  get entry (): Entry {
    return this.$store.state.entries.sort((a: Entry, b: Entry) => a.lane - b.lane)
  }
}
</script>
