import SectionContainer from "@/components/SectionContainer";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";


export default function Hero() {

    return (
        <SectionContainer className={"mt-8 gap-x-12 md:mt-0 md:flex md:justify-between md:items-center md:min-h-[768px]"}>
            <div className={"flex flex-col justify-center items-center text-center md:text-left md:items-start"}>
                <Title title={"Slide, Solve, Succeed!"} level={1} />
                <p className={"block md:text-lg my-4"}>
                    Test your skills with our fun sliding puzzle game.
                </p>
                <div className={"flex w-full gap-x-5 justify-center md:justify-start"}>
                    <Button>Explore</Button>
                    <Button variant={"secondary"}>Create your own</Button>
                </div>
            </div>
            <div className={"mt-12 flex justify-center md:mt-0 md:block"}>
                <Image src={"/cat_puzzle.png"} alt={"Puzzle with cat image"} width={474} height={474} />
            </div>
        </SectionContainer>
    )
}