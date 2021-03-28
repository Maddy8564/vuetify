<template>
  <span
    v-bind="$attrs"
    v-on="$listeners"
    :class="{
      'float-right': right,
      'primary--text': primary,
      'cursor-pointer': pointer,
      'text-bold': bold,
      'text-decoration-underline': underline,
    }"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vxSpan',
  props: {
    bold: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    pointer: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
  },
};
</script>
