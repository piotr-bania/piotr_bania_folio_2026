"use client"

export default function Toast_Item({ message, type, onClose }) {
    return (
        <div
            className={`toast_item toast_${type}`}
            role="status"
            aria-live="polite"
        >
            <span>{message}</span>
            <button onClick={onClose} className="toast_close">
                ×
            </button>
        </div>
    )
}
