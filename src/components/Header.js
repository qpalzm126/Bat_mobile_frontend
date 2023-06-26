import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../assets/logo_180x180 1.png";
import menu from "../assets/menu_24px.png";
import close from "../assets/close_24px.png";

function Header() {
    const router = useRouter();
    const [extendBar, setExtendBar] = useState(false);
    return (
        <header className="sticky top-0 z-50 flex border-b-[1px] bg-white px-8 py-4 md:py-8 md:px-[124px] justify-between ">
            <div className="relative flex items-center justify-start  h-12 w-16 md:h-14 md:w-24 my-auto mr-20 lg:flex min-[795px]:hidden cursor-pointer">
                <Image
                    src={logo}
                    alt="logo"
                    width={95}
                    height={95}
                    // sizes="100vw"
                    className="object-contain object-left "
                    onClick={() => router.push("/")}
                />
            </div>
            <div
                className={
                    extendBar
                        ? "absolute top-[81px] h-[calc(100vh_-_81px)] left-0 flex-col w-full pl-8 pt-8 space-y-7  bg-[#B5CC22] tracking-[0.2rem]"
                        : "hidden min-[795px]:flex grow space-x-10 text-[18px] md:text-xl text-[#677511] break-keep justify-start items-center"
                }
            >
                <p
                    className={
                        extendBar
                            ? "text-white hover:text-white cursor-pointer "
                            : "hover:text-[#B5CC22] cursor-pointer transition transform duration-150 ease-out "
                    }
                    onClick={() => {
                        router.push("/");
                        setExtendBar(false);
                    }}
                >
                    使用說明
                </p>
                <p
                    className={
                        extendBar
                            ? "text-white hover:text-white cursor-pointer"
                            : "hover:text-[#B5CC22] cursor-pointer transition transform duration-150 ease-out "
                    }
                    onClick={() => {
                        router.push("/");
                        setExtendBar(false);
                    }}
                >
                    收費方式
                </p>
                <p
                    className={
                        extendBar
                            ? "text-[#677510] cursor-pointer"
                            : "text-[#B5CC22] font-[700] cursor-pointer"
                    }
                    onClick={() => {
                        router.push("/");
                        setExtendBar(false);
                    }}
                >
                    站點資訊
                </p>
                <p
                    className={
                        extendBar
                            ? "text-white hover:text-white cursor-pointer"
                            : "hover:text-[#B5CC22] cursor-pointer transition transform duration-150 ease-out "
                    }
                    onClick={() => {
                        router.push("/");
                        setExtendBar(false);
                    }}
                >
                    最新消息
                </p>
                <p
                    className={
                        extendBar
                            ? "text-white hover:text-white "
                            : "hover:text-[#B5CC22] cursor-pointer transition transform duration-150 ease-out "
                    }
                    onClick={() => {
                        router.push("/");
                        setExtendBar(false);
                    }}
                >
                    活動專區
                </p>
            </div>
            <div
                className={
                    extendBar
                        ? "absolute top-[596px] left-[32px] w-[81px] h-[40px] flex items-center justify-center text-[#B5CC22] text-[16px] bg-white rounded-[100px] "
                        : "hidden min-[795px]:flex text-[18px] max-xl:text-md text-white bg-[#B5CC22] hover:bg-[#677511] \
                        transition transform duration-150 ease-out w-[85px] h-[40px] rounded-[100px] items-center px-6 py-2 ml-5 my-auto break-keep cursor-pointer "
                }
            >
                <p>登入</p>
            </div>
            <div className="flex min-[795px]:hidden items-center justify-end">
                <Image
                    src={menu}
                    alt="menu"
                    className={
                        extendBar
                            ? "hidden"
                            : "h-8 fill-[#B5CC22] stroke-2 cursor-pointer"
                    }
                    onClick={() => setExtendBar((prev) => !prev)}
                />
                <Image
                    src={close}
                    alt="close"
                    width={24}
                    height={24}
                    className={
                        extendBar
                            ? " fill-[#B5CC22] stroke-2 cursor-pointer"
                            : "hidden"
                    }
                    onClick={() => setExtendBar((prev) => !prev)}
                />
            </div>
        </header>
    );
}

export default Header;
