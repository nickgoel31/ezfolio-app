import { AlignRightIcon, ExternalLinkIcon, EyeIcon, ShapesIcon } from "lucide-react"

export const fontWeights = [500,600,700,800,900]

export const navigationItems = [
    {
        label: "Info",
        icon: AlignRightIcon,
        pathname: "/d",
        href: "/",
        preview:false
    },
    {
        label: "Appearance",
        icon: ShapesIcon,
        pathname: "/d",
        href: "/appearance",
        preview:false
    },
    {
        label: "Preview",
        icon: EyeIcon,
        pathname: "",
        href: "/",
        preview:true
    }
]


export const shareText = "No need for a lengthy resume now, let's change the trend by creating DevLinker profile!%0aSee my personal devLink here%0a"


export const reservedWords = [
    "dashboard",
    "home",
    "about",
    "showcase",
    "s",
    "d",
    "appearance",
    "a",
    "p",
    "settings",
    "setting",
    "profile",
    

]

export const bannedWords = [
    "fuck",
    "shit",
    "asshole",
    "bitch",
    "damn",
    "cunt",
    "bastard",
    "dick",
    "cock",
    "pussy",
    "motherfucker",
    "arsehole",
    "bollocks",
    "wanker",
    "prick",
    "twat",
    "slut",
    "whore",
    "crap",
    "screw",
    "bugger",
    "penis",
    "vagina",  
];


export const navItems = [
    {
        label: 'Features',
        href:'/s/features',
    },
    {
        label: 'Pricing',
        href:'/s/pricing'
    },
    // {
    //     label: 'Community',
    //     href: process.env.DISCORD_INVITE_LINK || 'https://www.discord.com'
    // }
]


export const featuresList = [
    {
        title: "Tell your story",
        desc: "Captivate with simplistic portfolio but  packed with details.",
    },
    {
        title: "Short. Simple. Concize.",
        desc: "Easy to read and navigate through but has all the essential details for a portfolio.",
    },
    {
        title: "Customizable",
        desc: "Easy to read and navigate through but has all the essential details for a portfolio.",
    },
]


export const pricingList = [
    {
        id: 1,
        title: "Free plan",
        desc: "For personal use or small businesses looking to test it out",
    }
]