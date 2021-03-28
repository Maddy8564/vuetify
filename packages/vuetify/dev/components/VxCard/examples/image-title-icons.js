export default {
    name: "vx-card",
    props: {
        class: "mx-auto",
        'max-width': "500",
    },
    components: [
        {
            name: "vx-img",
            props: {
                class: "white--text align-end",
                height: "200",
                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            },
            components: [{
                name: 'v-card-title',
                value: 'Pre-fab homes'
            }]
        },
        {
            name: "v-card-actions",
            props: {
                class: "justify-end",
            },
            components: [
                {
                    name: "vx-btn",
                    props: {
                        icon: "mdi-heart",
                    },
                },
                {
                    name: "vx-btn",
                    props: {
                        icon: "mdi-bookmark",
                    },
                },
                {
                    name: "vx-btn",
                    props: {
                        icon: "mdi-share-variant",
                    },
                },
            ],
        },
    ],
}