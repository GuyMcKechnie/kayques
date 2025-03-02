import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

import { ChevronRight, Menu, Ribbon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#howItWorks",
        label: "How it Works",
    },
    {
        href: "#packages",
        label: "Packages",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <a
                            rel="noreferrer noopener"
                            href="/"
                            className="ml-2 font-bold font-mono text-xl flex items-center gap-2"
                        >
                            <Ribbon className="text-primary" />
                            Kayques
                        </a>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                >
                                    <span className="sr-only">Menu Icon</span>
                                </Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl">
                                        Kayques
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                    {routeList.map(
                                        ({ href, label }: RouteProps) => (
                                            <a
                                                rel="noreferrer noopener"
                                                key={label}
                                                href={href}
                                                onClick={() => setIsOpen(false)}
                                                className={buttonVariants({
                                                    variant: "ghost",
                                                })}
                                            >
                                                {label}
                                            </a>
                                        )
                                    )}
                                    <Button className="w-full md:w-1/3">
                                        <a href="https://wa.me/qr/JPGEATOPYQMIH1">
                                            Get Started
                                        </a>
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </span>

                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <Button className="w-full">
                            <a href="https://wa.me/qr/JPGEATOPYQMIH1">
                                Get Started
                            </a>
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};
