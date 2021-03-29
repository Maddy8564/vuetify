<template>
  <v-dialog v-model="dialog" scrollable width="500" @click:outside="dialog = false">
    <v-card>
      <v-card-title>
        {{ component.title }}
      </v-card-title>

      <v-divider />

      <v-card-text style="height: 500px" class="pa-4">
        <v-row>
          <v-col cols="12">
            <vx-input
              v-if="component.value"
              outlined
              dense
              hide-details
              label="Value"
              v-model="component.value"
              :type="component.type"
            />
          </v-col>

          <v-col cols="6" v-for="(prop, index) in getProps(component)" :key="index">
            <vx-input
              outlined
              dense
              hide-details
              :label="prop.name"
              :type="prop.type"
              @change="event => onChangeProp(event, prop)"
              v-model="component.props[prop.name]"
            >
              <template v-slot:append-outer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                  </template>
                  {{ prop.description }}
                </v-tooltip>
              </template>
            </vx-input>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
        <v-btn color="error" text @click="$emit('remove')"> Remove </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import _ from 'lodash'
import webTypes from '../../../dist/json/web-types.json'

export default {
  name: 'VxComponentDialog',
  props: {
    value: { type: Boolean, required: true },
    component: { type: Object, required: true },
  },
  data() {
    return {
      dialog: this.value,
    }
  },
  watch: {
    value(value) {
      this.dialog = value
    },
    dialog(value) {
      this.$emit('input', value)
    },
  },
  methods: {
    onChangeProp(event, prop) {
      if (prop.type === 'boolean') {
        this.component.props[prop.name] = event
        this.$emit('forceUpdate')
      }
    },
    getType(attribute) {
      if (Array.isArray(attribute.value.type)) {
        if (attribute.value.type.includes('string')) {
          return 'text'
        } else if (attribute.value.type.includes('boolean')) {
          return 'boolean'
        } else {
          console.log('getType', attribute.name)
          return 'text'
        }
      } else if (attribute.value.type === 'any') {
        return 'text'
      } else {
        return attribute.value.type
      }
    },
    getProps(component) {
      const tag = webTypes.contributions.html.tags.find(x => x.name === component.title)

      if (tag) {
        const attributes = tag.attributes.map(x => {
          x.type = this.getType(x)
          return x
        })

        const addOnAttributes = [
          {
            name: 'class',
            description: 'Sets the DOM class on the component',
            type: 'string',
          },
        ]

        return _.sortBy([...attributes, ...addOnAttributes], x => [x.type, x.name])
      }
    },
  },
}
</script>
