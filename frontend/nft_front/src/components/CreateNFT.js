import Footer from "./Footer";
import Navbar from "./Navbar";

const CreateNFT = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center py-24">
                <h1 className="text-black text-[45px] font-semibold">Create Your NFT</h1>
            </div>
            <div className="flex flex-row justify-between mx-auto max-w-7xl py-10 gap-10">
                <div className="w-full">
                    <form className="max-w-7lg mx-auto ">
                        <div className="flex flex-col mb-5">
                            <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Name</label>
                            <input id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="ArtWork Name" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Description</label>
                            <textarea id="artworkName" className="w-full h-32 bg-[#EFEFEF] rounded-[12px] p-4" placeholder="Enter Your Description"></textarea>
                        </div>
                        <div className="flex flex-row gap-8 mb-5">
                            <div className="flex flex-col">
                                <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Royalty</label>
                                <select id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="Enter Your Description">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Size</label>
                                <input id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="Ex - 100 x 100"></input>
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Tags</label>
                            <input id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="Beautiful Castle, Monkeys ETC" />
                        </div>
                        <div className="flex flex-row gap-8 mb-5">
                            <div className="flex flex-col mb-5 w-full">
                                <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">Price</label>
                                <input id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="ArtWork Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-4 text-[20px] font-medium" htmlFor="artworkName">In Stock</label>
                                <select id="artworkName" className="w-full bg-[#EFEFEF] rounded-[12px] p-4" placeholder="Enter Your Description">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[20px] font-medium">
                                    Put On Sale
                                </h1>
                                <span className="text-[#9596A6] text-[13px]">
                                    People Will Bids On Your NFT Project
                                </span>
                            </div>
                            <div className="flex items-center">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:ring-4  rounded-full peer dark:bg-[#E7E4E4] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#000000]"></div>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[20px] font-medium">
                                    Direct Sale
                                </h1>
                                <span className="text-[#9596A6] text-[13px]">
                                    No Bids - Only Direct Salling
                                </span>
                            </div>
                            <div className="flex items-center">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:ring-4  rounded-full peer dark:bg-[#E7E4E4] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#000000]"></div>
                                </label>
                            </div>
                        </div>

                    </form>
                    <div className="w-full">
                        <button className="bg-black w-full py-4 rounded-[12px]">
                            <span className="text-white">Create</span>
                        </button>
                    </div>
                </div>

                {/******************************************** add file ********************************************/}

                <div className="w-full">
                    <div class="flex items-center justify-center w-full shadow-2xl rounded-[30px] mb-10">
                        <label for="dropzone-file" class="flex flex-row items-center justify-center w-full h-64 rounded-[30px] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-white-700">
                            <div class="flex flex-row items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                    <button className="bg-black w-full py-4 rounded-[12px]">
                        <span className="text-white">Create</span>
                    </button>

                </div>
            </div>


            <Footer />
        </div >
    )
}

export default CreateNFT;