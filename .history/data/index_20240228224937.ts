import { AlignRightIcon, ExternalLinkIcon, EyeIcon, ShapesIcon } from "lucide-react"

export const fontWeights = [500,600,700,800,900]

export const navigationItems = [
    {
        label: "Info",
        icon: AlignRightIcon,
        pathname: "/d",
        href: "/",
        preview: false
    },
    {
        label: "Appearance",
        icon: ShapesIcon,
        pathname: "/d",
        href: "/appearance",
        preview: false
    },
    {
        label: "Preview",
        icon: EyeIcon,
        pathname: "/",
        href: "",
        preview: true
    }
]