<template>
  <v-row v-bind="$attrs" v-on="$listeners">
    <v-col v-for="(column, index) in columns" :key="index"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "vxGrid",
  props: {
    columns: { type: Array, required: true },
  },
};
</script>
