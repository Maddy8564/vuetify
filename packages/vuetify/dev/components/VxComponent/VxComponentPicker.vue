<template>
  <v-card outlined class="pa-0">
    <v-card-subtitle class="text-center">Component Picker</v-card-subtitle>
    <v-card-text>
      <v-autocomplete
        v-model="component"
        :items="components"
        outlined
        item-text="name"
        item-value="name"
        dense
        label="Components"
        @change="$emit('add', component)"
      ></v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>
import components from './components'

export default {
  name: 'VxComponentPicker',
  props: {
    // preview: { type: Boolean, required: true },
    // component: { type: Object, required: true },
  },
  data() {
    return {
      components: Object.values(components),
      component: null,
    }
  },
}
</script>
