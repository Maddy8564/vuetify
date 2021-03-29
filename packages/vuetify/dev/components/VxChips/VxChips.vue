<template>
  <v-chip-group v-bind="$attrs" v-on="$listeners">
    <template v-for="(chip, index) in chips">
      <v-chip :key="index">{{ chip }}</v-chip>
    </template>
  </v-chip-group>
</template>

<script>
export default {
  name: 'vxChips',
  props: {
    chips: { type: Array, required: true },
  },
}
</script>
