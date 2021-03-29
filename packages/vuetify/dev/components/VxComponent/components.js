import _ from 'lodash'

const components = {
  vContainer: {
    name: 'v-container',
    props: {},
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
  vRow: {
    name: 'v-row',
    picker: true,
    props: {},
    toolbar: {
      title: 'Row',
      add: {
        text: 'Add column',
        value: 'v-col',
      },
    },
    components: [],
  },
  vCol: {
    name: 'v-col',
    picker: true,
    toolbar: {
      title: 'Column',
    },
    props: {},
    components: [],
  },
  vCard: {
    name: 'v-card',
    props: {},
    toolbar: {
      title: 'Card',
    },
    components: [],
  },
  vCardTitle: {
    name: 'v-card-title',
    value: 'Card title',
  },
  vCardSubtitle: {
    name: 'v-card-subtitle',
    value: 'Subtitle text',
  },
  vCardText: {
    name: 'v-card-text',
    value: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
  },
  vCardActions: {
    name: 'v-card-actions',
    components: [],
  },
  vBtn: {
    name: 'vx-btn',
    value: 'Action 1',
    props: {
      text: true,
      color: 'primary',
    },
  },
}

const getComponent = name => {
  return _.cloneDeep(components[name])
}

components.vRow.components = [getComponent('vCol')]
components.vCard.components = [
  getComponent('vCardTitle'),
  getComponent('vCardSubtitle'),
  getComponent('vCardText'),
  getComponent('vCardActions'),
]
components.vCardActions.components = [getComponent('vBtn')]

export default { components, getComponent }
