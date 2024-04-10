import headerImg from '../assets/images/header-img.png'
import Carousel from './Carousel';

const Header = () => {
    return (
        
        <div className="container mx-auto max-w-7xl py-10">
            <div className="grid grid-cols-2">
                <div className="flex flex-row gap-32">
                    <div className="col-span-6">
                        <div className="flex flex-col">
                            <hr className="w-48"/>
                            <h1 className="text-[75px] font-semibold">
                                Discover And<br/>Create NFTs
                            </h1>
                            <span className="whitespace text-[#676767] pb-8">
                                Discover, Create and Sell NFTs On Our NFT Marketplace<br/>With Over Thousands Of NFTs And Get a <span className="text-[black] font-bold">$20 bonus.</span>
                            </span>
                        </div>
                        <div className="flex flex-row gap-6">
                            <button type="button" className="bg-black py-3 rounded-[12px]">
                                <span className="text-[#FFFFFF] text-xl px-5 uppercase">
                                    Explore More
                                </span>
                            </button>
                            <button type="button" className="bg-[white] border border-[black] py-3 rounded-[12px]">
                                <span className="text-[black] text-xl px-5 uppercase">
                                    Create NFT
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-row gap-20 py-16">
                            <div className="flex-col">
                                <h1 className="text-[36px] font-semibold">430K+</h1>
                                <span className="text-[#848586]">Art Works</span>
                            </div>                  
                            <div className="flex-col">
                                <h1 className="text-[36px] font-semibold">159K+</h1>
                                <span className="text-[#848586]">Creators</span>
                            </div>                  
                            <div className="flex-col">
                                <h1 className="text-[36px] font-semibold">87K+</h1>
                                <span className="text-[#848586]">Collections</span>
                            </div>                  
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;