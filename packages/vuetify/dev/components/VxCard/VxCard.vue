<template>
  <v-card v-bind="value.props">
    <component
      :is="component.name"
      v-for="(component, index) in value.components"
      :key="index"
      v-bind="component.props"
      :components="component.components"
    >
      <template v-if="component.value">{{ component.value }}</template>

      <template v-if="component.components">
        <vx-component :components="component.components"> </vx-component>
      </template>
    </component>
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
