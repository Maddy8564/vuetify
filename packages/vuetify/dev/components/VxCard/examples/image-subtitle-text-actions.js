export default {
    name: "v-card",
    props: {
        class: "mx-auto",
        'max-width': "400"
    },
    components: [
        {
            name: "v-img",
            props: {
                class: 'white--text align-end',
                height: "200px",
                src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            },
            components: [{
                name: "v-card-title",
                value: "Top 10 Australian beaches",
            }]
        },
        {
            name: "v-card-subtitle",
            value: "Number 10",
            props: {
                class: "pb-0",
            },
        },
        {
            name: "v-card-text",
            props: {
                class: 'text--primary'
            },
            components: [{
                name: "div",
                value: "Whitehaven Beach",
            }, {
                name: "div",
                value: "Whitsunday Island, Whitsunday Islands",
            }]
        },
        {
            name: "v-card-actions",
            components: [
                {
                    name: "vx-btn",
                    props: {
                        label: "Share",
                        text: true,
                        color: "orange",
                    },
                },
                {
                    name: "vx-btn",
                    props: {
                        label: "Explore",
                        text: true,
                        color: "orange",
                    },
                },
            ],
        },
    ],
}