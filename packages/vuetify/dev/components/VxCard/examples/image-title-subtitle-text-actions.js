export default {
    name: "vx-card",
    props: {},
    components: [
        {
            name: "v-img",
            props: {
                height: "250",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            },
        },
        {
            name: "v-card-title",
            value: "Cafe Badilico",
        },
        {
            name: "v-card-subtitle",
            value: "$ • Italian, Cafe",
            props: {
                class: "my-4 subtitle-1",
            },
        },
        {
            name: "v-card-text",
            value:
                "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        },
        {
            name: "v-divider",
            props: {
                class: "mx-4",
            },
        },
        {
            name: "v-card-title",
            value: "Tonight's availability",
        },
        {
            name: "vx-chips",
            props: {
                class: "ma-4",
                "active-class": "deep-purple accent-4 white--text",
                column: true,
                chips: ["5:30PM", "7:30PM", "8:00PM", "9:00PM"],
                value: 2,
            },
        },
        {
            name: "v-card-actions",
            components: [
                {
                    name: "vx-btn",
                    props: {
                        label: "Reserve",
                        text: true,
                        color: "deep-purple lighten-2",
                    },
                },
            ],
        },
    ],
}