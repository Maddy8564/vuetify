<template>
  <img v-if="native" width="100%" v-bind="$attrs" v-on="$listeners" v-lazy="src" />

  <v-img
    :height="block ? '100%' : $attrs['height']"
    v-else
    :src="{
      src,
    }"
    :aspect-ratio="aspectRatio"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:placeholder v-if="loading && src">
      <v-skeleton-loader height="100%" type="image"></v-skeleton-loader>
    </template>

    <slot></slot>
  </v-img>
</template>

<script>
export default {
  name: 'vxImg',
  props: {
    native: { type: Boolean, default: false },
    src: { type: String, default: '' },
    block: { type: Boolean, default: false },
    loading: { type: Boolean, default: true },
    banner: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    rectangle: { type: Boolean, default: false },
    rectanglePro: { type: Boolean, default: false },
    rectangleXS: { type: Boolean, default: false },
    rectangleLG: { type: Boolean, default: false },
  },
  computed: {
    aspectRatio() {
      if (this.square) {
        return 1
      } else if (this.banner) {
        return 10 / 4
      } else if (this.rectangle) {
        return 16 / 9
      } else if (this.rectanglePro) {
        if (this.breakpoint.xs) {
          return 16 / 9
        } else if (this.breakpoint.sm || this.breakpoint.md) {
          return 16 / 9
        } else {
          return 10 / 4
        }
      } else if (this.rectangleXS) {
        if (this.breakpoint.xs) {
          return 1
        } else if (this.breakpoint.sm || this.breakpoint.md) {
          return 1.75
        } else {
          return 2.5
        }
      } else if (this.rectangleLG) {
        if (this.breakpoint.xs) {
          return 1
        } else {
          return 1.75
        }
      } else {
        return this.$attrs['aspect-ratio']
      }
    },
  },
}
</script>
