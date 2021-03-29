<template>
  <fragment>
    <template v-for="(component, index) in components">
      <component
        class="position-relative"
        :is="component.name"
        :key="index"
        v-bind="component.props"
        @click.stop="onClick(component)"
      >
        <v-toolbar
          absolute
          height="20"
          color="grey lighten-3"
          class="mb-4 left border-bottom-right-radius"
          dense
          flat
          v-if="!preview && component.toolbar"
        >
          <v-toolbar-title class="text-caption text-bold">{{
            component.toolbar.title
          }}</v-toolbar-title>
        </v-toolbar>

        <v-btn
          v-if="!preview && component.toolbar"
          absolute
          right
          x-small
          color="error"
        >
          Remove
        </v-btn>

        <div v-if="component.html" v-html="component.value"></div>

        <template v-else-if="component.value && !component.right">
          {{ component.value }}
        </template>

        <template v-if="component.components">
          <vx-component
            :depth="depth + 1"
            :components="component.components"
            :preview="preview"
          >
          </vx-component>
        </template>

        <template v-if="component.value && component.right">
          {{ component.value }}
        </template>
      </component>
    </template>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          {{ getName(component) }}
        </v-card-title>

        <v-card-subtitle v-if="component.value">
          {{ component.value }}
        </v-card-subtitle>

        <v-card-text>
          <v-row>
            <v-col
              cols="6"
              v-for="(prop, index) in getProps(component)"
              :key="index"
            >
              <vx-input
                outlined
                dense
                hide-details
                :label="prop.name"
                :type="getType(prop)"
                @change="event => onChangeProp(event, prop)"
                v-model="component.props[prop.name]"
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </fragment>
</template>

<script>
import _ from "lodash";
import { Fragment } from "vue-fragment";
import webTypes from "../../../dist/json/web-types.json";

export default {
  name: "VxComponent",
  components: { Fragment },
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
    onClick(component) {
      this.dialog = true;
      this.component = component;
    },
    onChangeProp(event, prop) {
      this.component.props[prop.name] = event
      this.$forceUpdate()
    },
    getName(component) {
      return _.startCase(component.name).replace(/\s/g, "").replace("Vx", "V");
    },
    getType(attribute) {
      if (Array.isArray(attribute.value.type)) {
        return attribute.value.type[0];
      } else {
        return attribute.value.type;
      }
    },
    getProps(component) {
      const name = this.getName(component);
      const tag = webTypes.contributions.html.tags.find((x) => x.name === name);
      if (tag) {
        return _.sortBy(tag.attributes, "value.type");
      }
    },
  },
};
</script>
