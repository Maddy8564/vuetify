export default {
  name: 'v-card',
  props: {},
  components: [
    {
      name: 'v-card-title',
      value: 'Card title',
    },
    {
      name: 'v-card-subtitle',
      value: 'Subtitle text',
    },
    {
      name: 'v-card-text',
      value: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    },
    {
      name: 'v-card-actions',
      components: [
        {
          name: 'vx-btn',
          value: 'Action 1',
          props: {
            text: true,
            color: 'primary',
          },
        },
        {
          name: 'vx-btn',
          value: 'Action 2',
          props: {
            text: true,
            color: 'primary',
          },
        },
      ],
    },
  ],
}
