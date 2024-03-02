import { LucideIcon } from "lucide-react";

export type ProjectStateType = {
    title:string,
    url:string,
    desc:string,
}

export type UserPageType = {
    id: string;
    username:string;
    title:string;
    bio:string;
    githubUrl:string | null,
    instagramUrl: string | null;
    linkedinUrl: string | null,
    colorSchemeId:number | 1;
    skills: string[],
    fontWeight: number | null,
    fontItalic: boolean,
}

export type ProjectType = {
    id:string,
    userPageId:string,
    projectTitle:string,
    projectDesc:string,
    projectUrl:string,
}

export type ColorSchemeType = {
    id: number;
    name: string;
    firstBgColor: string;
    secondBgColor: string | null;
    thirdBgColor: string | null;
    fgColor: string;
    cardColor: string;
    cardFgColor: string;
    buttonBgColor: string;
    buttonFgColor: string;
}


export type ExperienceType = {
    id: string,
    userPageId:string,
    jobTitle:string,
    jobDesc:string,
    jobOrg:string,
    startDate: Date
    endDate:Date | null
}

export type NavItemType = {
    label: string,
    icon: LucideIcon,
    preview: boolean;
    pathname: string,
    href: string;
}