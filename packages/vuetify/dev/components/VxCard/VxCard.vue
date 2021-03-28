<template>
  <v-card v-bind="value.props">
    <vx-component :components="value.components"> </vx-component>
  </v-card>
</template>

<script>
export default {
  name: "vxCard",
  props: {
    value: { type: Object, required: true },
  },
};
</script>
