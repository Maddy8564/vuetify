<template>
  <div>
    <component
      :is="component.name"
      v-for="(component, index) in components"
      :key="index"
      v-bind="component.props"
    >
      <template v-if="component.value">{{ component.value }}</template>

      <template v-if="component.components">
        <vx-component :components="component.components"> </vx-component>
      </template>
    </component>
  </div>
</template>

<script>
export default {
  name: "VxComponent",
  props: {
    components: { type: Array, required: true },
  },
};
</script>
