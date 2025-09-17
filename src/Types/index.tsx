import type { JSX } from "react";

export type Links = {
    text: string;
    targetId: string;
}

export type Dishes = {
    image: string;
    title: string;
    description: string;
}


export type About = {
    header: string;
    content: string;
}

export type Cusines = {
    number: string;
    image: string;
    title: string;
    description: string;
}


export type Review = {
    name: string;
    profession: string;
    content: string;
}

export type Contact = {
    key: string;
    value: string;
}


export type SocialMediaLinks = {
    href: string;
    icon: JSX.Element;
}