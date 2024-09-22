import React, { useEffect, useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate, useLocation } from "react-router-dom";
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';

export default function Header() {
    const [headText, setHeadText] = useState(" Create Post");
    const navigate = useNavigate();
    const location = useLocation();
    const [ , path] = location.pathname.split("/");
    const [isMobile, setIsMobile] = useState(false);
    const [explore, setExplore] = useState(true);

    //For Create Post Button Text
    useEffect(() => {
        if(window.innerWidth < 800) {
            setHeadText("");
        } else if (window.innerWidth < 845) {
            setHeadText(" Post");
        }
    }, []);

    window.addEventListener("resize", () => {
        if(window.innerWidth < 800) {
            setHeadText("");
        } else if (window.innerWidth < 855) {
            setHeadText(" Post");
        } else{
            setHeadText(" Create Post");
        }
    });

    //For Explore Button Text
    useEffect(() => {
        if(window.innerWidth < 808) {
            setExplore(false);
        }
    }, []);

    window.addEventListener("resize", () => {
        if(window.innerWidth < 808) {
            setExplore(false);
        } else {
            setExplore(true);
        }
    });

    useEffect(() => {
        if(window.innerWidth < 795) {
            setHeadText("");
        } else if (window.innerWidth < 837) {
            setHeadText(" Post");
        }
    }, []);

    return (
        <nav className="roboto bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-12">
                        {/* <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
                        <a href="/"><h1 id="logo"><span id="logo" className="text-white text-3xl font-bold mr-1">Imagin</span><span id="logo" className ="text-red-600 text-3xl font-bold">AI</span><span id="logo" className="text-white text-3xl font-bold">ry</span></h1></a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 nav-items flex items-baseline space-x-4">
                            <button onClick={() => navigate("/")} className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-md font-medium">Home</button>
                            <button onClick={() => navigate("/explore")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-md font-medium">Posts</button>
                            <button onClick={() => navigate("/about")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-md font-medium">About</button>
                            <button onClick={() => navigate("/contact")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-md font-medium">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="ml-4 flex btn-con items-center ml-6">

                        { path === "create-post" ?   (<div className="flex align-center"><button onClick={() => navigate("/explore")} type="button" id="head-btn" className=" bg-gray-800 px-5 py-2 rounded-lg text-white hover:bg-red-600 focus:outline-none"><ExploreRoundedIcon/>{explore && " Explore"}</button> 
                        
                        <button onClick={() => setIsMobile(!isMobile)} type="button" className="md:hidden bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> </div>)
                        :
                        (<div className="flex align-center"><button onClick={() => navigate("/create-post")} id="head-btn" type="button" className="bg-gray-800 px-5 py-2 rounded-lg text-white hover:bg-red-600 focus:outline-none"> <AddRoundedIcon />{headText}</button> 
                        
                        <button onClick={() => setIsMobile(!isMobile)} type="button" className="md:hidden bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button></div>)
                        }

                        {/* <!-- Profile dropdown --> */}
                        {/* <div className="ml-3 relative">
                            <div>
                                <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isMobile && (<div id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
                <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Posts</a>
                <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
        </div>)}
    </nav>
    );
}