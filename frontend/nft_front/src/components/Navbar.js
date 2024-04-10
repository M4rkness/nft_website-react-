import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className="">
            <div className="mx-auto max-w-7xl px-2 py-8">
                <div className="flex items-left justify-left space-x-11 place-items-center">
                    <div className="flex flex-shrink-0">
                        <img src={logo} />
                    </div>
                    <div className="flex space-x-10">
                        <a href="#" className="text-xl uppercase text-[#606060]">Discover</a>
                        <a href="#" className="text-xl uppercase text-[#606060]">Creators</a>
                        <a href="#" className="text-xl uppercase text-[#606060]">Sell</a>
                        <a href="#" className="text-xl uppercase text-[#606060]">Stats</a>
                    </div>
                    <form className="max-w-md ps-14">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" className="p-3 ps-12 pe-16 bg-[#EDEDED] rounded-[14px]" placeholder="Search Art Work / Creator" />
                        </div>
                    </form>
                    <button type="button" className="bg-[#141416] py-3 rounded-[14px]">
                        <span className="text-[#FFFFFF] text-[16] font-semibold uppercase px-5">Connect wallet</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;