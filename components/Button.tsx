import { ReactNode } from 'react'

interface Props {
    variant?: "primary" | "secondary",
    children: ReactNode
}

export default function Button({ variant = "primary", children, ...props }: Props) {
    const variantClasses = {
        primary: "bg-blue-500 text-white border rounded-lg p-3 w-full max-w-48 font-semibold hover:bg-blue-600 transition-colors duration-200",
        secondary: "border-2 border-gray-300 rounded-lg p-3 w-full max-w-48 font-semibold"
    }

    return (
        <button className={variantClasses[variant]}>
            {children}
        </button>
    )
}