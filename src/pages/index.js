import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Sites from "@/components/Sites";
import SiteTable from "@/components/SiteTable";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ siteData }) {
    const [searchSite, setSearchSite] = useState("");

    const arData = siteData.map(({ ar }) => {
        return { value: ar, label: ar };
    });
    const tableData = siteData.map(({ sarea, ar, sbi, bemp }) => {
        return {
            city: "台北市",
            sarea: sarea,
            ar: ar,
            sbi: sbi,
            bemp: bemp,
        };
    });

    return (
        <div>
            <Header />
            <Sites options={arData} />
            <SiteTable tableData={tableData} />
        </div>
    );
}

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
    );
    const siteData = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: { siteData },
    };
}
