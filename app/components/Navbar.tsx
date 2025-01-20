import { Link } from "@remix-run/react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";


const baseNavigation = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "https://drive.google.com/file/d/1mtDfg42ipZmoid2htrKIir9CO6pmvIEJ/view?usp=drive_link" },
]

export function Navbar() {
    return (
        <NavigationMenu className="mx-auto my-4 min-w-full">
            <NavigationMenuList>
                <NavigationMenuItem className="font-bold mr-2"> dtavana</NavigationMenuItem>

                {baseNavigation.map((item) => (
                    <NavigationMenuItem key={item.name}>
                        <Link className={navigationMenuTriggerStyle()} to={item.href}>{item.name}</Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}