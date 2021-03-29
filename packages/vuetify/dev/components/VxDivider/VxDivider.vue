<template>
  <v-row align="center" justify="center">
    <v-col cols="5" sm="5" md="5" class="py-0">
      <v-divider />
    </v-col>
    <v-col cols="2" sm="2" md="2" class="py-0" align="center">{{ value }}</v-col>
    <v-col cols="5" sm="5" md="5" class="py-0">
      <v-divider />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'vxDivider',
  props: {
    value: { type: String, required: true },
  },
}
</script>
