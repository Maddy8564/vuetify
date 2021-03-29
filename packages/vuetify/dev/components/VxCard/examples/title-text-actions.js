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
            right: true,
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
                class: 'justify-end',
            },
            components: [
                {
                    name: "v-list-item",
                    components: [{
                        name: "v-list-item-avatar",
                        props: {
                            color: "grey darken-3",
                        },
                        components: [{
                            name: 'v-img',
                            props: {
                                class: "elevation-6",
                                src: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            }
                        }]
                    },]
                },
                {
                    name: "vx-btn",
                    value: "256",
                    props: {
                        icon: "mdi-heart",
                        style: 'margin-right: 8px'
                    },
                },
                {
                    name: "vx-btn",
                    value: "45",
                    props: {
                        icon: "mdi-share-variant",
                    },
                },
            ],
        },
    ],
}