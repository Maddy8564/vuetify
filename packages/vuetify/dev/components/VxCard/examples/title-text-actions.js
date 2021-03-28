export default {
    name: "v-card",
    props: {
        color: "#26c6da",
        class: "mx-auto",
        dark: true,
        'max-width': "400",
    },
    components: [
        {
            name: "v-card-title",
            value: "Twitter",
            components: [{
                name: 'v-icon',
                value: 'mdi-twitter'
            }]
        },
        {
            name: "v-card-text",
            value:
                '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
            props: {
                class: "headline font-weight-bold",
            }
        },
        {
            name: "v-card-actions",
            props: {
                class: 'justify-end'
            },
            components: [
                {
                    name: "vx-btn",
                    props: {
                        icon: "mdi-heart",
                        label: "256",
                    },
                },
                {
                    name: "vx-btn",
                    props: {
                        icon: "mdi-share-variant",
                        label: "45",
                    },
                },
            ],
        },
    ],
}