"use client"

import Toast_Item from "@/components/toast/Toast_Item"

export default function Toast_Container({ toasts, removeToast }) {
    return (
        <div className="toast_container">
            {toasts.map((toast) => (
                <Toast_Item
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    )
}
