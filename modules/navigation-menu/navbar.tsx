'use client';

import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

export const NavBar = () => {
    const isMobile = useIsMobile();
    return (
        <div>
            {' '}
            {!isMobile ? (
                <NavigationMenu className=" flex justify-end min-w-full px-gutter">
                    <NavigationMenuList className="flex gap-6 py-2">
                        <NavigationMenuItem>Home</NavigationMenuItem>
                        <NavigationMenuItem>Blog</NavigationMenuItem>
                        <NavigationMenuItem>Contact</NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            ) : (
                <div>
                    <Drawer direction="left">
                        <DrawerTrigger asChild>
                            <Button
                                variant="ghost"
                                className="border border-transparent hover:border-black focus:border-0"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DrawerTrigger>

                        <DrawerContent
                            className="h-full w-[70%] max-w-xs rounded-l-none"
                            showHandle={false}
                        >
                            {/* Close Button */}
                            <DrawerClose asChild>
                                <div className="flex justify-end p-3 border-b border-blue-600/20">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className=" hover:bg-primary-color"
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                            </DrawerClose>

                            <DrawerTitle className="sr-only">
                                Navigation
                            </DrawerTitle>

                            {/* Navigation */}
                            <header>
                                <nav>
                                    <ul>
                                        <li className="relative group text-center py-2 px-4 cursor-pointer text-gray-700 hover:text-primary-color transition-colors">
                                            Home
                                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-color transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </li>
                                        <li className="text-center py-2">
                                            About
                                        </li>
                                        <li className="text-center py-2">
                                            Blog
                                        </li>
                                        <li className="text-center py-2">
                                            Contact
                                        </li>
                                    </ul>
                                </nav>
                            </header>
                        </DrawerContent>
                    </Drawer>
                </div>
            )}
        </div>
    );
};
