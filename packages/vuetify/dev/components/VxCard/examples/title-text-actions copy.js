export default {
  name: 'v-card',
  props: {
    class: 'mx-auto',
    'max-width': '400',
  },
  components: [
    {
      name: 'v-list-item',
      props: {
        'two-line': true,
      },
      components: [
        {
          name: 'v-list-item-content',
          components: [
            {
              name: 'v-list-item-title',
              value: 'San Francisco',
              props: {
                class: 'headline',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'v-card-text',
      components: [
        {
          name: 'v-row',
          props: {
            align: 'center',
          },
          components: [
            {
              name: 'v-col',
              value: '23&deg;C',
              html: true,
              props: {
                class: 'display-3',
                cols: 6,
              },
            },
            {
              name: 'v-col',
              props: {
                cols: 6,
              },
              components: [
                {
                  name: 'v-img',
                  props: {
                    width: 92,
                    alt: 'Sunny imag',
                    src: 'https://cdn.vuetifyjs.com/images/cards/sun.png',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'v-list-item',
      components: [
        {
          name: 'v-list-item-icon',
          components: [
            {
              name: 'v-icon',
              value: 'mdi-send',
            },
          ],
        },
        {
          name: 'v-list-item-subtitle',
          value: '23 km/h',
        },
      ],
    },
    {
      name: 'v-list-item',
      components: [
        {
          name: 'v-list-item-icon',
          components: [
            {
              name: 'v-icon',
              value: 'mdi-cloud-download',
            },
          ],
        },
        {
          name: 'v-list-item-subtitle',
          value: '48%',
        },
      ],
    },
    {
      name: 'v-slider',
      props: {
        max: 6,
        'tick-labels': ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        class: 'mx-4',
        ticks: true,
      },
    },
    {
      name: 'v-list',
      props: {
        class: 'transparent',
      },
      components: [
        {
          name: 'v-list-item',
          components: [
            {
              name: 'v-list-item-title',
              value: 'Tuesday',
            },
            {
              name: 'v-list-item-icon',
              components: [
                {
                  name: 'v-icon',
                  value: 'mdi-white-balance-sunny',
                },
              ],
            },
            {
              name: 'v-list-item-subtitle',
              value: '24\xB0/12\xB0',
              props: {
                class: 'text-right',
              },
            },
          ],
        },
        {
          name: 'v-list-item',
          components: [
            {
              name: 'v-list-item-title',
              value: 'Wednesday',
            },
            {
              name: 'v-list-item-icon',
              components: [
                {
                  name: 'v-icon',
                  value: 'mdi-white-balance-sunny',
                },
              ],
            },
            {
              name: 'v-list-item-subtitle',
              value: '22\xB0/14\xB0',
              props: {
                class: 'text-right',
              },
            },
          ],
        },
        {
          name: 'v-list-item',
          components: [
            {
              name: 'v-list-item-title',
              value: 'Thursday',
            },
            {
              name: 'v-list-item-icon',
              components: [
                {
                  name: 'v-icon',
                  value: 'mdi-cloud',
                },
              ],
            },
            {
              name: 'v-list-item-subtitle',
              value: '25\xB0/15\xB0',
              props: {
                class: 'text-right',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'v-divider',
    },
    {
      name: 'v-card-actions',
      components: [
        {
          name: 'vx-btn',
          value: ' Full Report',
          props: {
            text: true,
          },
        },
      ],
    },
  ],
}
