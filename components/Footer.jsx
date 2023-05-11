"use client";

import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";


const Footer = () => {
    return (
        <nav className='flex-between-footer w-full mb-16 pt-3'>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>

                <div className='flex gap-3 md:gap-5'>
                    <Link href='/' className='black_btn'>
                        ติดต่อ
                    </Link>
                    <Link href='/' className='black_btn'>
                        แจ้งเตือน
                    </Link>
                </div>
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/' className='black_btn'>
                        ติดต่อ
                    </Link>
                    <Link href='/' className='black_btn'>
                        แจ้งเตือน
                    </Link>
                </div>
            </div>

            
        </nav>
    );
};

export default Footer;
