<template>
  <fragment>
    <template v-for="(component, index) in components">
      <component :is="component.name" :key="index" v-bind="component.props" @click.stop="onEdit(component, index)">
        <VxComponentToolbar
          :preview="preview"
          :component="component"
          @edit="onEdit(component, index, true)"
          @add="name => onAdd(component, name)"
          @remove="onRemove(index)"
        />

        <div v-if="component.html" v-html="component.value"></div>

        <template v-else-if="component.value && !component.right">
          {{ component.value }}
        </template>

        <template v-if="component.components && component.components.length">
          <vx-component :depth="depth + 1" :components="component.components" :preview="preview"> </vx-component>
        </template>

        <template v-if="component.picker">
          <v-col cols="12" class="pa-0" v-if="component.name === 'v-row'">
            <VxComponentPicker @add="name => onAdd(component, name)" />
          </v-col>

          <VxComponentPicker v-else @add="name => onAdd(component, name)" />
        </template>

        <template v-if="component.value && component.right">
          {{ component.value }}
        </template>
      </component>
    </template>

    <VxComponentDialog
      v-model="dialog"
      :component="component"
      @forceUpdate="$forceUpdate()"
      @remove="onRemove(index)"
    />
  </fragment>
</template>

<script>
import _ from 'lodash'
import { Fragment } from 'vue-fragment'

import { getComponent } from './components'

import VxComponentDialog from './VxComponentDialog'
import VxComponentPicker from './VxComponentPicker'
import VxComponentToolbar from './VxComponentToolbar'

export default {
  name: 'VxComponent',
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
      index: 0,
      dialog: false,
      component: {},
    }
  },
  methods: {
    onEdit(component, index, skip) {
      if (skip || !component.toolbar) {
        this.dialog = true
        this.index = index
        this.component = component
      }
    },
    onRemove(index) {
      this.components.splice(index, 1)
      this.$root.$emit('forceUpdate')
    },
    onAdd(component, name) {
      const item = getComponent(name)

      if (item) {
        component.components.push(item)
        this.$root.$emit('forceUpdate')
      }
    },
  },
}
</script>
