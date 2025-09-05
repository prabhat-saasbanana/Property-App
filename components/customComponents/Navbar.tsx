import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

export default function Navbar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/" className="text-2xl">TheProperty</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>

                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Home</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">About</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Properties</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Services</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Agents</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Blog</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xl">More Pages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className="text-xl ">Property Details</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">Service Details</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">Agent Profile</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">Blog Details</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">Terms</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">Privacy</NavigationMenuLink>
                            <NavigationMenuLink className="text-xl ">404</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink className="text-xl ">Contact</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><Button className=""><NavigationMenuLink href="/" className="text-xl">Get Started</NavigationMenuLink></Button></NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}