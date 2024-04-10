import Logo from '../assets/images/logo_footer.png'
import Insta from '../assets/images/instagram.png'
import Linkedin from '../assets/images/linkedin.png'
import Twitter from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'

const Footer = () => {
    return (
        <footer className="bg-black mt-7">
            <div className="flex flex-row items-center justify-between mx-auto max-w-7xl py-10">
                {/* <div className="flex flex-row items-center justify-between"> */}
                    <div className="col-span-6">
                        <div className="flex flex-row place-items-center">
                            <img src={Logo} />
                            <span className="text-white text-[30px] font-semibold px-2">DiveSea</span>
                        </div>
                    </div>
                    <div className="col-span-6 flex gap-14">
                        <span className="text-[#B9B9B9] text-[18px] font-medium ">
                            Privacy Policy
                        </span>
                        <span className="text-[#B9B9B9] text-[18px] font-medium ">
                            Term & Conditions
                        </span>
                        <span className="text-[#B9B9B9] text-[18px] font-medium ">
                            About Us
                        </span>
                        <span className="text-[#B9B9B9] text-[18px] font-medium ">
                            Contact
                        </span>
                    {/* </div> */}
                </div>
            </div>
            <hr className=""></hr>
            <div className="flex flex-row items-center justify-between mx-auto max-w-7xl py-8">
                {/* <div className="flex flex-row items-center justify-between"> */}
                    <div className="col-span-6">
                        <div className="flex flex-row place-items-center">
                            <span className="text-[#999999] text-[17px] font-medium px-2">© 2023 EATLY All Rights Reserved.</span>
                        </div>
                    </div>
                    <div className="col-span-6 flex gap-14">
                        <img src={Insta} />
                        <img src={Linkedin} />
                        <img src={Facebook} />
                        <img src={Twitter} />
                    {/* </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;