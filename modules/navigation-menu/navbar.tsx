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
                <NavigationMenu className="bg-red-500 flex justify-end min-w-full">
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
                                className="border border-transparent hover:border-black focus:border-black"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DrawerTrigger>

                        <DrawerContent
                            className="h-full w-[70%] max-w-xs rounded-l-none bg-white border-r border-blue-600"
                            showHandle={false}
                        >
                            {/* Close Button */}
                            <DrawerClose asChild>
                                <div className="flex justify-end p-3 border-b border-blue-600/20">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="text-blue-700 hover:bg-blue-600/10"
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
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
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
