import { LucideIcon } from "lucide-react";

export type ProjectStateType = {
    title:string,
    desc:string,
    url:string,
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
    preview:boolean,
    pathname: string,
    href: string;
}

export type ExperienceResume = {
    jobTitle: string;
    company: string;
    description: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type EducationResume = {
    degree: string;
    institution: string;
    major: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type SkillResume = {
    name: string;
}

export type AwardResume = {
    title: string;
    description: string;
    date: Date | null;
    issuingOrg: string;
}

export type CertificationResume = {
    title: string;
    description: string;
    date: Date | null;
    issuingOrg: string;
}

export type ProjectResume = {
    
}


export type RouteHandlerConfig = {
    /**
     * The URL to where your route handler is hosted. This is called via webhook
     * after your file is uploaded. UploadThing attempts to automatically detect
     * this value based on the request URL and headers. You can override this if
     * the automatic detection fails.
     */
    callbackUrl?: string;
    /**
     * Your UploadThing app id. You can find this on the UploadThing dashboard.
     * @default `env.UPLOADTHING_APP_ID`
     */
    uploadthingId?: string;
    /**
     * Your UploadThing API key. You can find this on the UploadThing dashboard.
     * @default `env.UPLOADTHING_KEY`
     */
    uploadthingSecret?: string;
    /**
     * Enable more verbose logging.
     * @default `info`
     * @since v6.2
     */
    logLevel?: "error" | "warn" | "info" | "debug" | "trace";
    /**
     * Used to determine whether to run dev hook or not
     * @default `env.NODE_ENV === "development" || env.NODE_ENV === "dev"`
     * @since v6.3
     */
    isDev?: boolean;
    /**
     * Used to override the fetch implementation
     * @default `globalThis.fetch`
     * @since v6.3
     */
    // fetch?: FetchEsque;
  };