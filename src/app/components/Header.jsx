import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        {/* ICRACS 2024 */}
                        <Image src="/pietLogo.png" height={80} width={220}></Image>
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <ul
                        className={`flex-col sm:flex-row sm:flex space-x-0 sm:space-x-8 space-y-2 sm:space-y-0 absolute sm:relative bg-white sm:bg-transparent top-16 left-0 sm:top-0 w-full sm:w-auto items-center sm:items-center py-4 sm:py-0 transition-all duration-200 ease-in-out ${isOpen ? "flex" : "hidden sm:flex"
                            }`}
                    >
                        <li>
                            <Link href="/" className="text-blue-600 hover:text-blue-800">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/callforpaperspage" className="text-blue-600 hover:text-blue-800">
                                Call For Papers
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/about" className="text-blue-600 hover:text-blue-800">
                                About
                            </Link>
                        </li> */}

                        <li>
                            <Link href="/registration" className="text-blue-600 hover:text-blue-800">
                                Registration
                            </Link>
                        </li>

                        <li>
                            <Link href="/committee" className="text-blue-600 hover:text-blue-800">
                                Committee
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/importantdates" className="text-blue-600 hover:text-blue-800">
                                Important Dates
                            </Link>
                        </li> */}


                        <li>
                            <Link href="/uploadpaper" className="text-blue-600 hover:text-blue-800">
                                Upload Paper
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/speakers" className="text-blue-600 hover:text-blue-800">
                                Speakers
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/speakers" className="text-blue-600 hover:text-blue-800">
                                Achive
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/archieve" className="text-blue-600 hover:text-blue-800">
                                Archieve
                            </Link>
                        </li>

                        {/* <li>
                            <Link href="/callforpapers" className="text-blue-600 hover:text-blue-800">
                                Call For Papers
                            </Link>
                        </li> */}

                        {/* <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer">
                                    Committee <ChevronDown className="ml-1 h-4 w-4" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem asChild>
                                    <Link href="/advisorycommittiees" className="w-full">
                                        Advisory Committees
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/organizingcommittiees" className="w-full">
                                        Organizing Committees
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </li> */}



                    </ul>
                    {/* <li>
                            <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                                Contact
                            </Link>
                        </li> */}

                    {/* Register Button (Only visible on larger screens) */}
                    <Button variant="outline" className="hidden sm:block">
                        Register Now
                    </Button>
                </nav>
            </header>
        </div>
    )
}

export default Header
