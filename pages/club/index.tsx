import Link from "next/link";
import React, { useState } from "react";

export default function Club({ posts }: { posts: any }) {
	const [selectedButton, setSelectedButton] = useState<String>("elClub");
	const [activeTab, setActiveTab] = useState(1);

	const handleButtonClick = (buttonName: String) => {
		setSelectedButton(buttonName);
	};

	const handleTabClick = (tabIndex: any) => {
		setActiveTab(tabIndex);
	};
	return (
		<section className="container mx-auto py-12 md:py-6 md:pt-0 text-center border-b">
			<div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:pt-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="relative flex pt-20 md:py-5 items-center">
					<div className="flex-grow border-t border-gray-400"></div>
					<span className="font-anton flex-shrink -skew-x-12 mx-4 text-[2rem] text-black">
						EL CLUB
					</span>
					<div className="flex-grow border-t border-gray-400"></div>
				</div>
			</div>
			{/* <div className="flex justify-center items-center">
				<div className="flex">
					<button
						onClick={() => handleButtonClick("elClub")}
						className={`text-base rounded-r-none focus:outline-none flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-purple-900 ${
							selectedButton === "elClub" ? "bg-purple-900" : "bg-purple-600"
						} text-white border duration-200 ease-in-out transition`}
					>
						<div className="flex leading-5 pl-2">El Club</div>
					</button>
					<button
						onClick={() => handleButtonClick("escuelas")}
						className={`text-base rounded-l-none border-l-0 focus:outline-none flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-purple-900 ${
							selectedButton === "escuelas" ? "bg-purple-900" : "bg-purple-600"
						} text-white border duration-200 ease-in-out transition`}
					>
						<div className="flex leading-5">Escuelas</div>
					</button>
				</div>
			</div> */}
			<div className="flex justify-center">
				<div className="max-md max-w-full inline-flex flex-wrap justify-center bg-white rounded-[20px] p-1 mb-8 min-[480px]">
					<button
						className={`flex-1 text-lg font-medium h-8 px-4 rounded-2xl whitespace-nowrap ${
							activeTab === 1
								? "bg-purple-700 text-white"
								: "text-black bg-transparent"
						}`}
						onClick={() => handleTabClick(1)}
					>
						El Club
					</button>
					<button
						className={`flex-1 text-lg font-medium h-8 px-4 rounded-2xl whitespace-nowrap ${
							activeTab === 2 ? "bg-purple-700 text-white" : "text-black"
						}`}
						onClick={() => handleTabClick(2)}
					>
						Escuelas
					</button>
				</div>
			</div>
		</section>
	);
}
