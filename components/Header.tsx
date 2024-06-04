"use client";

import Image from "next/image";
import {MENU} from "@/constants/menu";
import Link from "next/link";
import BurgerMenu from "@/components/BurgerIcon";
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <header className="w-full px-4 border-b border-gray-300 sticky top-0">
            <div className={"mx-auto my-8 max-w-screen-xl flex justify-between"}>
                <Image
                    src="/logo.svg"
                    width={248}
                    height={19}
                    alt="Sliding Puzzles Logo"
                />

                <BurgerMenu className={"md:hidden"} isOpen={isOpen} onClick={handleBurgerClick} />

                <nav className={"hidden gap-x-8 md:flex"}>
                    {MENU.map((menuItem) => (
                        <Link key={menuItem.name} href={menuItem.url}>{menuItem.name}</Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}