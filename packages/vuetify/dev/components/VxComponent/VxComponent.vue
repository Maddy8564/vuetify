<template>
  <fragment>
    <template v-for="(component, index) in components">
      <component
        :is="component.name"
        :key="index"
        v-bind="component.props"
        @click.stop="onEdit(component)"
      >
        <VxComponentToolbar
          :preview="preview"
          :component="component"
          @edit="onEdit(component, true)"
          @add="(name) => onAdd(component, name)"
          @remove="onRemove(index, components)"
        />

        <div v-if="component.html" v-html="component.value"></div>

        <template v-else-if="component.value && !component.right">
          {{ component.value }}
        </template>

        <template v-if="component.components && component.components.length">
          <vx-component
            :depth="depth + 1"
            :components="component.components"
            :preview="preview"
          >
          </vx-component>
        </template>

        <VxComponentPicker
          v-if="component.picker"
          @add="(name) => onAdd(component, name)"
        />

        <template v-if="component.value && component.right">
          {{ component.value }}
        </template>
      </component>
    </template>

    <VxComponentDialog
      v-model="dialog"
      :component="component"
      @forceUpdate="$forceUpdate()"
    />
  </fragment>
</template>

<script>
import _ from "lodash";
import { Fragment } from "vue-fragment";

import components from "./components";

import VxComponentDialog from "./VxComponentDialog";
import VxComponentPicker from "./VxComponentPicker";
import VxComponentToolbar from "./VxComponentToolbar";

export default {
  name: "VxComponent",
  components: {
    Fragment,
    VxComponentDialog,
    VxComponentToolbar,
    VxComponentPicker,
  },
  props: {
    preview: { type: Boolean, required: true },
    depth: { type: Number, required: true },
    components: { type: Array, required: true },
  },
  data() {
    return {
      key: 0,
      dialog: false,
      component: {},
    };
  },
  methods: {
    onEdit(component, skip) {
      if (skip || !component.toolbar) {
        this.dialog = true;
        this.component = component;
      }
    },
    onRemove(index, components) {
      components.splice(index, 1);
      console.log("onRemove", components);
      this.$root.$emit("forceUpdate");
    },
    onAdd(component, name) {
      const item = components.find((x) => x.name == name);

      if (item) {
        component.components.push(_.cloneDeep(item));
        this.$root.$emit("forceUpdate");
      }
    },
  },
};
</script>
