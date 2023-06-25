import React, { useId, useState, useContext } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { AsyncSelect } from "react-select/async";
import Select, { components } from "react-select";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import bikePic from "../assets/bike.png";
import searchIcon from "../assets/search_24px.png";
import arrowIcon from "../assets/icon.svg";
import SiteContext from "./SiteContext";

function Sites({ options }) {
    const cities = {
        台北市: [
            "大安區",
            "大同區",
            "士林區",
            "文山區",
            "中正區",
            "中山區",
            "內湖區",
            "北投區",
            "松山區",
            "南港區",
            "信義區",
            "萬華區",
            "臺大專區",
        ],
        新北市: ["三重區", "永和區", "新莊區", "中和區", "新店區"],
        桃園市: [
            "中壢區",
            "八德區",
            "平鎮區",
            "大溪區",
            "楊梅區",
            "龜山區",
            "蘆竹區",
            "大園區",
            "觀音區",
        ],
        新竹縣: ["關西鎮"],
        新竹市: ["北區"],
        台中市: ["大甲區"],
        嘉義市: ["東區"],
        嘉義縣: ["水上鄉"],
    };

    const ctx = useContext(SiteContext);
    const [districtList, setDistrictList] = useState([]);
    const [checked, setChecked] = useState(districtList);

    // const loadOptions = (searchValue, callback) => {
    //     setTimeout(() => {
    //         const filterOptions = options.filter(( option) =>
    //             option.label.toLowerCase().includes(searchValue.toLowerCase())
    //         );
    //         console.log("loadOptions", searchValue, filterOptions);
    //         callback(filterOptions);
    //     }, 0);
    // };
    const sareaOptions = Object.keys(cities).map((city) => ({
        value: city,
        label: city,
    }));

    const dropdownIndicatorStyles = (base, state) => {
        let changes = {
            // all your override styles
            backgroundColor: "blue",
        };
        return Object.assign(base, changes);
    };

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#B5CC22" : "#323232",
            backgroundColor: state.isSelected ? "#F3F3F3" : "#F3F3F3",
            "&:hover": {
                color: "#B5CC22",
            },
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#F3F3F3",
            height: "40px",
            weight: "175px",
            paddingLeft: "8px ",
            border: "none",
            boxShadow: "none",
            borderRadius: "8px",
            fontSize: "16px",
        }),
        menu: (base) => ({
            ...base,
            // override border radius to match the box
            borderRadius: 8,
            // kill the gap
            marginTop: 0,
        }),
        menuList: (base) => ({
            ...base,
            // kill the white space on first and last option
            padding: 0,
        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: "#323232",
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#323232", // Custom colour
            "&:hover": {
                color: "red",
            },
            marginTop: 0,
        }),
        clearIndicator: (base) => ({
            ...base,
            padding: 0,
        }),
    };
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <Image src={arrowIcon} alt="arrow" className="pl-0 mr-2" />
            </components.DropdownIndicator>
        );
    };

    const handleCheckAllChange = (e) => {
        if (e.target.checked) {
            setChecked(districtList);
        } else {
            setChecked([]);
        }
    };
    const handleDistrictChange = (e, d) => {
        if (e.target.checked) {
            setChecked([...checked, d]);
        } else {
            setChecked(checked.filter((item) => item !== d));
        }
    };

    // console.log(checked);
    return (
        <>
            <div className="grid min-[1141px]:grid-cols-2 px-8 md:px-[124px] mb-6">
                <div className="">
                    <p className="mt-6 mb-4 md:my-8 text-[#B5CC22] text-[18px] md:text-[24px] font-bold tracking-[0.2em] ">
                        站點資訊
                    </p>
                    <div className="relative flex max-sm:flex-col-reverse">
                        <div className="relative mr-4 max-sm:mt-2 bg-[#F6F6F6] rounded-[8px] w-[311px] sm:w-[175px] h-[40px]">
                            <Select
                                options={sareaOptions}
                                placeholder="選擇縣市"
                                instanceId={useId()}
                                menuPosition="fixed"
                                menuPlacement="auto"
                                isClearable
                                className="relative bg-[#F6F6F6] "
                                styles={customStyles}
                                components={{ DropdownIndicator }}
                                onChange={(e) => {
                                    if (e) {
                                        setDistrictList(cities[e["value"]]);
                                        setChecked(cities[e["value"]]);
                                        console.log("!!" + checked);
                                    } else {
                                        setDistrictList([]);
                                    }
                                }}
                            />
                        </div>
                        <div
                            className="relative flex justify-between bg-[#F6F6F6] border-[#000000] sm:border-[1px] border-solid box-border  
                        rounded-[8px] max-sm:mt-2 w-[311px] md:w-[277px] h-[40px]"
                        >
                            <input
                                type="search"
                                className="relative flex flex-grow bg-transparent outline-none focus:outline-none shadow-none 
                                focus:shadow-none px-2 border-none rounded-[8px] bg-[#F6F6F6] 
                                placeholder:text-[#AEAEAE] placeholder:font-[18px] placeholder:pl-2"
                                placeholder="搜尋站點"
                                onChange={(e) =>
                                    ctx.setSearchSiteInput(e.target.value)
                                }
                                value={ctx.searchSiteInput}
                            />
                            <Image
                                src={searchIcon}
                                alt="searchIcon"
                                width={18}
                                height={18}
                                className=" m-[11px] mr-[16px]"
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            className={
                                districtList.length === 0
                                    ? "hidden"
                                    : "mt-4 px-2 py-3 flex items-center gap-[5px]"
                            }
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-[#B5CC22] rounded-sm border-2 mr-2 border-[#AEAEAE]"
                                name="全部勾選"
                                checked={checked.length === districtList.length}
                                onChange={handleCheckAllChange}
                            />
                            <p className="min-w-[20px] text-[#323232] text-[16px] md:text-[18px] ">
                                全部勾選
                            </p>
                        </div>
                        <div className="p-0 grid grid-cols-3 lg:grid-cols-4 justify-center">
                            {districtList.map((district) => (
                                <div
                                    key={district}
                                    className="py-3 px-2 flex items-center space-x-2 "
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-[#B5CC22] font-[400] rounded-sm border-2 mr-2 border-[#AEAEAE]"
                                        onChange={(e) =>
                                            handleDistrictChange(e, district)
                                        }
                                        checked={checked.includes(district)}
                                    />
                                    <p className="min-w-[20px] whitespace-nowrap text-[#323232] md:text-[18px]">
                                        {district}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden min-[1141px]:flex md:items-end justify-end ">
                    <Image
                        src={bikePic}
                        alt="bikePic"
                        width={502}
                        height={172}
                        priority
                    />
                </div>
            </div>
        </>
    );
}

export default Sites;
