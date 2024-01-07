import { PiBaby, PiCarProfileLight, PiDevicesLight, PiDressLight, PiMouseThin, PiShirtFolded, PiVolleyballThin, PiWatchLight } from "react-icons/pi";
import { GiEmptyWoodBucketHandle, GiLipstick } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";

export const CategoreyData = [
    {
        name: "Women's & Girls' Fashion",
        link: "#",
        icon: <PiDressLight />,
        subCategorey: [
            {
                name: "Traditional Wear",
                link: "#",
            },
            {
                name: "Muslim Wear",
                link: "#",
            },
            {
                name: "Western Wear",
                link: "#",
            },
            {
                name: "Innerwear",
                link: "#",
            },
            {
                name: "Shoes",
                link: "#",
            },
        ]
    },
    {
        name: "Health & Beauty",
        link: "#",
        icon: <GiLipstick />,
    },
    {
        name: "Watches, Bags, Jewellery",
        link: "#",
        icon: <PiWatchLight />,
    },
    {
        name: "Men's & Boys' Fashion",
        link: "#",
        icon: <PiShirtFolded />,
        subCategorey: [
            {
                name: "Traditional Wear",
                link: "#",
            },
            {
                name: "Muslim Wear",
                link: "#",
            },
            {
                name: "Western Wear",
                link: "#",
            },
            {
                name: "Innerwear",
                link: "#",
            },
            {
                name: "Shoes",
                link: "#",
            },
        ]
    },
    {
        name: "Mother & Baby",
        link: "#",
        icon: <PiBaby />,
    },
    {
        name: "Electronics Devices",
        link: "#",
        icon: <PiDevicesLight />,
    },
    {
        name: "TV & Home Appliances",
        link: "#",
        icon: <BiFridge />,
    },
    {
        name: "Electronic Accessories",
        link: "#",
        icon: <PiMouseThin />,
    },
    {
        name: "Groceries",
        link: "#",
        icon: <GiEmptyWoodBucketHandle />,
    },
    {
        name: "Home & Lifestyle",
        link: "#",
        icon: <TbSofa />,
        subCategorey: [
            {
                name: "Traditional Wear",
                link: "#",
            },
            {
                name: "Muslim Wear",
                link: "#",
            },
            {
                name: "Western Wear",
                link: "#",
            },
            {
                name: "Innerwear",
                link: "#",
            },
            {
                name: "Shoes",
                link: "#",
            },
        ]
    },
    {
        name: "Sports & Outdoors",
        link: "#",
        icon: <PiVolleyballThin />,
    },
    {
        name: "Automotive & Motorbike",
        link: "#",
        icon: <PiCarProfileLight />,
    },
]

export const brandData = [
    {
        name: "Aarong"
    },
    {
        name: "Yellow"
    },
    {
        name: "Ecstasy"
    },
    {
        name: "Cats Eye"
    },
    {
        name: "Le Reve"
    },
]

export const priceData = [
    {
        name: "$0.00 - $9.99"
    },
    {
        name: "$10.00 - $19.99"
    },
    {
        name: "$20.00 - $29.99"
    },
    {
        name: "$30.00 - $49.99"
    },
    {
        name: "$50.00 - $99.99"
    },
]