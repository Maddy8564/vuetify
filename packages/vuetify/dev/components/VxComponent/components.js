export default [
    {
        name: "v-container",
        props: {},
        picker: true,
        toolbar: {
            title: "Container",
            add: {
                text: "Add row",
                value: 'v-row'
            },
            hideRemove: true,
        },
        components: [],
    },
    {
        name: "v-row",
        picker: true,
        props: {},
        toolbar: {
            title: "Row",
            add: {
                text: "Add column",
                value: 'v-col'
            },
        },
        components: [{
            name: "v-col",
            picker: true,
            toolbar: {
                title: "Column",
            },
            props: {},
            components: [{
                name: "v-card",
                props: {},
                toolbar: {
                    title: "Card",
                },
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
                                value: "Action 1",
                                props: {
                                    text: true,
                                    color: 'primary'
                                },
                            },
                        ],
                    },
                ],
            }],
        }],
    },
    {
        name: "v-col",
        picker: true,
        toolbar: {
            title: "Column",
        },
        props: {},
        components: [],
    },
    {
        name: "v-card",
        props: {},
        toolbar: {
            title: "Card",
        },
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
                        value: "Action 1",
                        props: {
                            text: true,
                            color: 'primary'
                        },
                    },
                ],
            },
        ],
    }];