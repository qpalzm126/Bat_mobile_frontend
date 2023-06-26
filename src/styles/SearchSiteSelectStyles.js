import Image from "next/image";
import searchIcon from "../assets/search_24px.png";
import { components } from "react-select";

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
        height: "35px",
        weight: "277px",
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
            <Image src={searchIcon} alt="searchIcon" className="pl-0 mr-2" />
        </components.DropdownIndicator>
    );
};
export default customStyles;
