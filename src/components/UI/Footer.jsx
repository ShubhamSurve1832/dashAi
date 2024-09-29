import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/images/Footer_logo.svg'

const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] py-4 mt-20">
            <div className="mx-auto text-center flex gap-2 justify-center items-center">
                <p className="text-sm text-[#00000066]">Powered by</p>
                <div className="flex justify-center items-center">
                    <Image src={Logo} alt="Logo" width={50} height={50} />
                </div>
            </div>
        </footer>
    )
}

export default Footer