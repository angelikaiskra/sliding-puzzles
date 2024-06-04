export interface IMenuItem {
    name: string,
    url: string
}

export const MENU: IMenuItem[] = [
    {
        name: "Catalog",
        url: "/catalog"
    },
    {
        name: "Upload your own",
        url: "/#upload-your-own"
    },
    {
        name: "How to play",
        url: "/#how-it-works"
    },
]