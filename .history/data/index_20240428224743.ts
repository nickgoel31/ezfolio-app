import { AlignRightIcon, BookOpenIcon, ExternalLinkIcon, EyeIcon, HelpCircleIcon, LayoutDashboard, ShapesIcon } from "lucide-react"
import { FaDiscord, FaQuestion } from "react-icons/fa"

export const fontWeights = [300,400,500,600,700,800,900]

export const navigationItems = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        pathname: "/d",
        href: "/",
        preview:false
    },
    {
        label: "Information",
        icon: AlignRightIcon,
        pathname: "/d",
        href: "/info",
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


export const shareText = "No need for a lengthy resume now, let's change the trend by creating Ezfolios!%0aSee my personal ezfolio here%0a"


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

export const vipNames = [
    "harshgoel",
]

export const uniqueNames = [
    "unique",
    "hehe",
    "wow",
]


export const navItems = [
    {
        label: 'Features',
        href:'/s#features',
    },
    {
        label: 'Pricing',
        href:'/s#pricing'
    },
    // {
    //     label: 'Community',
    //     href: process.env.DISCORD_INVITE_LINK || 'https://www.discord.com'
    // }
]


export const featuresList = [
    {
        title: "Tell your story",
        desc: "Captivate with simplistic portfolio but packed with details.",
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
        price: "0",
        buttonLabel: "Get started",
        features: [
            "Your own personal link",
            "Unlimited projects",
            "Limited Customizations",
            "Limited this and that",
        ]
    },
    // {
    //     id: 2,
    //     title: "Pro plan",
    //     desc: "For workign professionals and small businesses looking to test it out",
    //     price: "9",
    //     buttonLabel: "Go Pro",

    //     features: [
    //         "Unlimited Customizations",
    //         "Unlimited this and that",
    //         "Access to over 100+ templates",
    //         "Priority support",
    //         "Better UI",
    //         "Get Hired (Coming Soon)"
    //     ]
    // }
]

export const helpLinks = [
    // {
    //     label: "Documentation",
    //     desc: "Documents describe how things should be done. They have a version history.",
    //     url: "https://docs.ezfolio.social",
    //     btnLabel: "Go to docs",
    //     icon: BookOpenIcon
    // },
    {
        label: "FAQs",
        desc: "Browse through our frequently asked questions to get answer of most of your questions",
        url: "/s/faqs",
        btnLabel: "Go to FAQs",
        icon: HelpCircleIcon
    },
    // {
    //     label: "Community",
    //     desc: "Get in touch with our support team for any queries or issues",
    //     url: "https://www.discord.app",
    //     btnLabel: "Join our community",
    //     icon: FaDiscord
    // }
]


export const sectionsList = [
    {
        label: "Features",
        href: "/s#features"
    },
    {
        label: "Pricing",
        href: "/s#pricing"
    },
    {
        label: "Help Center",
        href: "/s#help"
    },
    {
        label: "About Me",
        href: "/s#aboutme"
    }
]

export const faqsList = [
    {
        id:1,
        question:"What is Ezfolio?",
        answer: "Ezfolio is a platform that allows you to create a personal portfolio in minutes. It is designed to be simple, easy to use and customizable.",
    },
    {
        id:2,
        question:"How do I create a portfolio?",
        answer: "Creating a portfolio is easy. Just sign up, fill in your details, add your projects and you are good to go.",
    },
    {
        id:3,
        question:"What is the cost of using Ezfolio?",
        answer: "Ezfolio is free to use for everybody!",
    },
    {
        id:4,
        question:"Can I use my own domain?",
        answer: "Currently we are working on letting users connect their own domain! Stay tuned for updates.",
    },
    {
        id:5,
        question:"Can I customize my portfolio?",
        answer: "Yes, you can customize your portfolio. You can change the colors, fonts, layout and more.",
    },
    {
        id:7,
        question:"How do I share my portfolio?",
        answer: "You can share your portfolio by sharing the link to your portfolio. You can also share it on social media.",
    },
]