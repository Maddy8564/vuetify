<template>
  <v-responsive :aspect-ratio="aspectRatio" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-responsive>
</template>

<script>
export default {
  name: 'vxResponsive',
  props: {
    banner: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    rectangle: { type: Boolean, default: false },
    rectanglePro: { type: Boolean, default: false },
    rectangleXS: { type: Boolean, default: false },
  },
  computed: {
    aspectRatio() {
      if (this.square) {
        return 1
      } else if (this.banner) {
        return 2.5
      } else if (this.rectangle) {
        return 1.75
      } else if (this.rectanglePro) {
        if (this.breakpoint.xs) {
          return 9 / 16
        } else if (this.breakpoint.sm || this.breakpoint.md) {
          return 1.75
        } else {
          return 2.5
        }
      } else if (this.rectangleXS) {
        if (this.breakpoint.xs) {
          return 1
        } else if (this.breakpoint.sm || this.breakpoint.md) {
          return 1.75
        } else {
          return 2.5
        }
      } else {
        return this.$attrs['aspect-ratio']
      }
    },
  },
}
</script>
