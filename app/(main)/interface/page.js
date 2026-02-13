import { INTERFACE } from "@/lib/interface/interface"
import { submitInterfaceForm } from "@/app/(main)/interface/actions"
import Card_Body from "@/components/card/Card_Body"
import Paragraph from "@/components/text/Paragraph"
import Card_Header from "@/components/card/Card_Header"
import Card_Container from "@/components/card/Card_Container"

export default function Interface_Page() {
    const content = INTERFACE

    return (
        <main className="h-[100svh]">
            <Card_Container>
                <Card_Header title={content.title} />

                <Card_Body>
                    {content.root?.description && (
                        <Paragraph
                            className="paragraph_small"
                            text={content.root.description}
                        />
                    )}

                    <div className="mt-6 flex flex-col gap-4">
                        <form
                            className="flex flex-col gap-4"
                            action={submitInterfaceForm}
                        >
                            {content.form.fields.map((field, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1"
                                >
                                    <label className="text-sm opacity-70">
                                        {field.label}
                                    </label>

                                    {field.type === "textarea" ? (
                                        <textarea
                                            name={field.name}
                                            required={field.required}
                                            className="border border-neutral-700 bg-transparent p-3 text-sm outline-none focus:border-white transition-colors"
                                            rows={4}
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            required={field.required}
                                            className="border border-neutral-700 bg-transparent p-3 text-sm outline-none focus:border-white transition-colors"
                                        />
                                    )}
                                </div>
                            ))}

                            <button
                                type="submit"
                                className="mt-2 border border-neutral-700 px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:border-white"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </Card_Body>
            </Card_Container>
        </main>
    )
}
