import React from 'react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <div className='logo-text'>
                        <img className='img' src="blue_logo_only.png" alt="image" width="25" height="25" />
                        <h2>
                            BluePineapple
                        </h2>
                    </div>
                </div>

                {/* 2nd menu part  */}
                <div className={"menu-link"}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contactUs">Contact Us</Link>
                        </li>

                    </ul>
                </div>
                <div className='Menu-icon text-6xl'>
                    <GiHamburgerMenu/>
                </div>


            </nav>

            


        </>
    )
}

export default Navbar