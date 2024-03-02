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
    "showcase"
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
    "screw"
];