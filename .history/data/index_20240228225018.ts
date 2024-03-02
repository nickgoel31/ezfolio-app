import { AlignRightIcon, ExternalLinkIcon, EyeIcon, ShapesIcon } from "lucide-react"

export const fontWeights = [500,600,700,800,900]

export const navigationItems = [
    {
        label: "Info",
        icon: AlignRightIcon,
        pathname: "/d",
        href: "/"
    },
    {
        label: "Appearance",
        icon: ShapesIcon,
        pathname: "/d",
        href: "/appearance"
    },
    {
        label: "Preview",
        icon: EyeIcon,
        icon2: ExternalLinkIcon,
        pathname: "",
        href: "/"
    }
]