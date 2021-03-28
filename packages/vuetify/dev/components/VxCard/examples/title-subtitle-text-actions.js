export default {
    name: "vx-card",
    components: [
        {
            name: "v-card-title",
            value: "Card title",
        },
        {
            name: "v-card-subtitle",
            value: "Subtitle text",
        },
        {
            name: "v-card-text",
            value:
                "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
        },
        {
            name: "v-card-actions",
            components: [
                {
                    name: "vx-btn",
                    props: {
                        label: "Action 1",
                        text: true,
                        color: 'primary'
                    },
                },
                {
                    name: "vx-btn",
                    props: {
                        label: "Action 2",
                        text: true,
                        color: 'primary'
                    },
                },

            ],
        },
    ],
}