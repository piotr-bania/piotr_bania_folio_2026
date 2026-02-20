export const INTERFACE = {
    slug: "interface",
    title: "Agency & Product Collaboration",
    category: "static",

    root: {
        title: "Collaboration Entry Point",
        description: `For teams needing production-grade frontend and full-stack execution.`,
    },

    form: {
        title: "Start a conversation",
        fields: [
            { name: "name", label: "Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "company", label: "Company (optional)", type: "text" },
            {
                name: "message",
                label: "What are you building or improving?",
                type: "textarea",
                required: true,
            },
        ],
    },
}
