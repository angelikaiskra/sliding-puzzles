import {JSX} from "react/jsx-runtime";

interface Props {
    title: string,
    level: number
}

export default function Title({title, level = 2}: Props) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={"font-semibold text-3xl md:text-5xl"}>
            {title}
        </Tag>
    )
}