export default {
  name: 'v-row',
  props: {},
  toolbar: {
    title: 'Row',
    add: 'Add column',
  },
  components: [
    {
      name: 'v-col',
      toolbar: {
        title: 'Column',
      },
      props: {
        cols: 12,
      },
      components: [
        {
          name: 'v-card',
          props: {},
          toolbar: {
            title: 'Card',
          },
          components: [
            {
              name: 'vx-img',
              props: {
                class: 'white--text align-end',
                height: '200',
                gradient: 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
              },
              components: [
                {
                  name: 'v-card-title',
                  value: 'Pre-fab homes',
                },
              ],
            },
            {
              name: 'v-card-actions',
              props: {
                class: 'justify-end',
              },
              components: [
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-heart',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-bookmark',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-share-variant',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'v-col',
      toolbar: {
        title: 'Column',
      },
      props: {
        cols: 6,
      },
      components: [
        {
          name: 'v-card',
          props: {},
          components: [
            {
              name: 'vx-img',
              props: {
                class: 'white--text align-end',
                height: '200',
                gradient: 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
              },
              components: [
                {
                  name: 'v-card-title',
                  value: 'Pre-fab homes',
                },
              ],
            },
            {
              name: 'v-card-actions',
              props: {
                class: 'justify-end',
              },
              components: [
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-heart',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-bookmark',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-share-variant',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'v-col',
      toolbar: {
        title: 'Column',
      },
      props: {
        cols: 6,
      },
      components: [
        {
          name: 'v-card',
          props: {},
          components: [
            {
              name: 'vx-img',
              props: {
                class: 'white--text align-end',
                height: '200',
                gradient: 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
              },
              components: [
                {
                  name: 'v-card-title',
                  value: 'Pre-fab homes',
                },
              ],
            },
            {
              name: 'v-card-actions',
              props: {
                class: 'justify-end',
              },
              components: [
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-heart',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-bookmark',
                  },
                },
                {
                  name: 'vx-btn',
                  props: {
                    icon: 'mdi-share-variant',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
