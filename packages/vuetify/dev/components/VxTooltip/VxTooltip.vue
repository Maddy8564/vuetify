<template>
  <span v-if="disabled">
    <slot></slot>
  </span>

  <v-tooltip v-else bottom>
    <template v-slot:activator="{ on }">
      <vx-span :bold="bold" v-on="on">
        <slot></slot>
      </vx-span>
    </template>

    <span>{{ value }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'vxTooltip',
  props: {
    value: { type: String, required: true },
    bold: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
};
</script>
