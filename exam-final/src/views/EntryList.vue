<template>
  <div>
    <p class="title is-2">Entries</p>
    <div class="page-entry-list"></div>
    <h1>L2: <img :src="`/images/teams/great-britain.png`" width="30"></h1>
    <h1>L3: <img :src="`/images/teams/usa.png`" width="30"></h1>
    <h1>L4: <img :src="`/images/teams/jamaica.png`" width="30"></h1>
    <h1>L5: <img :src="`/images/teams/jamaica.png`" width="30"></h1>
    <h1>L6: ? </h1>
    <h1>L7: <img :src="`/images/teams/jamaica.png`" width="30"></h1>
    <h1>L9: ? </h1>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component({ props: ['Entry'] })
export default class EntryList extends Vue {
  get entry (): Entry {
    return this.$store.state.entries.sort((a: Entry, b: Entry) => a.lane - b.lane)
  }
}
</script>
