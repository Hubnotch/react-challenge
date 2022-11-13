export interface IInput {
    name: string;
    placeholder:string;
    type:string;
    value:string;
    for:string;
    label:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButton {
    title: string;
}