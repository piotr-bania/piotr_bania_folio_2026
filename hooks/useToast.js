"use client"

import { useContext } from "react"
import { ToastContext } from "@/components/toast/Toast_Provider"

export default function useToast() {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error("useToast must be used inside Toast_Provider")
    }

    return context
}
