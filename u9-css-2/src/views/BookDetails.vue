<template>
  <div class="book-details">
    <div class="hero-body has-text-centered-mobile">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img :src="`/images/books/${book.isbn13}.jpg`" :alt="book.title" />
          </div>
          <div class="column is-two-thirds">
            <p class="is-size-3 mb-3">{{ book.title }}<p>
            <p class="is-size-5 is-size-5-mobile mb-4 has-text-weight-light">{{ book.authors.join(', ') }}</p>
          <div class="columns">
            <div class="column is-narrow">
              <p class="subtitle">
              <b-button class="is-primary is-outlined" size="is-medium" expanded>Add to Cart</b-button>
              </p>
              </div>
            <div class="column is-narrow">
              <p class="subtitle">
              <b-button class="is-primary" size="is-medium" expanded>Buy Now</b-button>
              </p>
            </div>
          </div>
            <p class="has-text-left-mobile">
              {{ book.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Book } from '@/store/index'

export default class BookDetails extends Vue {
  get book (): Book {
    return this.$store.getters.bookByIsbn13(this.$route.params.isbn13)
  }
}
</script>
