"use client"

import { createContext, useState, useCallback } from "react"
import Toast_Container from "@/components/toast/Toast_Container"

export const ToastContext = createContext(null)

export default function Toast_Provider({ children }) {
    const [toasts, setToasts] = useState([])

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    const addToast = useCallback(
        (message, type = "default", duration = 4000) => {
            const id = crypto.randomUUID()

            const newToast = {
                id,
                message,
                type,
            }

            setToasts((prev) => [...prev, newToast])

            if (duration !== 0) {
                setTimeout(() => {
                    removeToast(id)
                }, duration)
            }
        },
        [removeToast]
    )

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <Toast_Container toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    )
}
