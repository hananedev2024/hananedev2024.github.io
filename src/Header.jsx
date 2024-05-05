import React from 'react'


function Header() {
    function onToggleMenu(e) {
    }
    return (
        <header>
            <nav className='flex justify-between items-center w-[65%] mx-10'>
                <div>
                    <p href="#home">DECORA</p>
                </div>
                <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-12'>
                        <li>
                            <a className='hover:border-b-2' href='#'>furniture</a>
                        </li>
                        <li>
                            <a className='hover:border-b-2' href="#shop">Shop</a>
                        </li>
                        <li>
                            <a className='hover:border-b-2' href="#about">About Us</a>
                        </li>
                        <li>
                            <a className='hover:border-b-2' href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>

                </div>
            </nav>
        </header>
    )
}

export default Header