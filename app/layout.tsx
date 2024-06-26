import type {Metadata} from "next";
import {Outfit} from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const outfit = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sliding Puzzles Game",
    description: "Online game platform with sliding puzzles, featuring a catalog and the ability to upload custom images.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${outfit.className} bg-white text-font-dark antialiased`}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </body>
        </html>
    );
}
