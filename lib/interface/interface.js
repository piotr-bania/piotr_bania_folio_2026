export const INTERFACE = {
    slug: "interface",
    title: "Interface & Collaboration",
    category: "static",

    root: {
        title: "Contact & project discussion",
        description: `This is the collaboration entry point. Whether building a new SaaS product, modernising internal tooling, or requiring production ownership across frontend and backend, this is where structured conversations begin.`,
    },

    form: {
        title: "Start a conversation",
        fields: [
            { name: "name", label: "Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "company", label: "Company (optional)", type: "text" },
            {
                name: "message",
                label: "What are you building?",
                type: "textarea",
                required: true,
            },
        ],
    },
}
