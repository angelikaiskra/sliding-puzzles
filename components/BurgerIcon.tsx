
interface Props {
    className?: string,
    isOpen: boolean,
    onClick: () => void
}

export default function BurgerIcon({ className, isOpen, onClick }: Props) {

    return (
        <button className={`flex flex-col justify-center items-center ${className}`} onClick={onClick}>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}
            `}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isOpen ? 'opacity-0' : 'opacity-100'}
            `}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}
            `}></span>
        </button>
    )
}