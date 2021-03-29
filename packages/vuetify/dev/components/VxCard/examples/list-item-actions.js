export default {
    name: "v-card",
    props: {
        class: "mx-auto",
        'max-width': "344",
        outlined: true,
    },
    components: [
        {
            name: "v-list-item",
            props: {
                'three-line': true,
            },
            components: [{
                name: "v-list-item-content",
                components: [{
                    name: "div",
                    value: "OVERLINE",
                    props: {
                        class: 'overline mb-4'
                    }
                }, {
                    name: "v-list-item-title",
                    value: " Headline 5",
                    props: {
                        class: 'headline mb-1'
                    }
                }, {
                    name: "v-list-item-subtitle",
                    value: "Greyhound divisely hello coldly fonwderfully",
                }]
            }, {
                name: "v-list-item-avatar",
                props: {
                    tile: true,
                    size: "80",
                    color: "grey",
                },
            },]
        },
        {
            name: "v-card-actions",
            components: [
                {
                    name: "v-btn",
                    value: 'Button',
                    props: {
                        outlined: true,
                        rounded: true,
                        text: true,
                    },
                },
            ],
        },
    ],
}