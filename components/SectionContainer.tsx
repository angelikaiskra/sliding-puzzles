import { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    className: string
}

export default function SectionContainer({ children, className, ...props }: Props) {
    return (
        <section className={`mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl xl:px-0 ${className}`} {...props}>
            {children}
        </section>
    )
}