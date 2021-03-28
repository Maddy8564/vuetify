<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :href="$attrs.href"
    :to="$attrs.to"
    :rel="rel"
    :target="target"
    :icon="!!icon && !label"
    :depressed="depressed"
    :class="{
      'float-right': right,
      'text-bold': bold,
      'text-decoration-underline': underline,
    }"
  >
    <vx-tooltip v-if="tooltip" :value="tooltip">
      <slot></slot>
    </vx-tooltip>

    <template v-if="icon">
      <v-icon>{{ icon }}</v-icon>
    </template>
    <template v-if="label">{{ label }}</template>
  </v-btn>
</template>

<script>
export default {
  name: "vxBtn",
  props: {
    label: { type: String, required: false },
    icon: { type: String, required: false },
    link: { type: String, required: false },
    bold: { type: Boolean, default: false },
    blank: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    tooltip: { type: String, default: null },
    depressed: { type: Boolean, default: true },
    underline: { type: Boolean, default: false },
  },
  data() {
    return {
      rel: this.blank ? "noopener" : "",
      target: this.blank ? "_blank" : "",
    };
  },
  created() {
    if (this.link) {
      if (this.link.startsWith("http://") || this.link.startsWith("https://")) {
        this.$attrs.href = this.link;
      } else {
        this.$attrs.to = this.link;
      }
    }
  },
};
</script>
