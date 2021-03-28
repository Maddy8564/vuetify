<template>
  <div v-if="components">
    <component
      :is="component.name"
      v-for="(component, index) in components"
      :key="index"
      v-bind="component.props"
    >
      <template v-if="component.value">{{ component.value }}</template>
    </component>
  </div>
</template>

<script>
export default {
  name: "VxComponent",
  props: {
    components: { type: Array, required: false },
  },
};
</script>
