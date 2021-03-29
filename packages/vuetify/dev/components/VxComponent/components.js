import _ from 'lodash'

export const components = {
  VContainer: {
    name: 'v-container',
    picker: true,
    toolbar: {
      title: 'Container',
      add: {
        text: 'Add row',
        value: 'v-row',
      },
      hideRemove: true,
    },
    components: [],
  },
  VRow: {
    name: 'v-row',
    toolbar: {
      title: 'Row',
      add: {
        text: 'Add column',
        value: 'v-col',
      },
    },
    components: [],
  },
  VCol: {
    name: 'v-col',
    picker: true,
    toolbar: {
      title: 'Column',
    },
    components: [],
  },
  VCard: {
    name: 'v-card',
    picker: true,
    toolbar: {
      title: 'Card',
    },
    components: [],
  },
  VCardTitle: {
    name: 'v-card-title',
    value: 'Card title',
  },
  VCardSubtitle: {
    name: 'v-card-subtitle',
    value: 'Subtitle text',
  },
  VCardText: {
    name: 'v-card-text',
    value: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    type: 'textarea'
  },
  VCardActions: {
    name: 'v-card-actions',
    components: [],
  },
  VBtn: {
    name: 'vx-btn',
    value: 'Action 1',
    props: {
      text: true,
      color: 'primary',
    },
  },
}

export const getComponent = name => {
  return _.cloneDeep(components[name])
}

components.VRow.components = [getComponent('VCol')]
components.VCard.components = [
  getComponent('VCardTitle'),
  getComponent('VCardSubtitle'),
  getComponent('VCardText'),
  getComponent('VCardActions'),
]
components.VCardActions.components = [getComponent('VBtn')]

export const componentsArray = _.map(components, (value, key) => {
  components[value.name] = getComponent(key)
  value.props = {};
  value.title = key
  return value
})