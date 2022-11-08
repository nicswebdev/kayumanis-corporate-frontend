import React from "react";
import Hero from "../../components/Hero";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";

const details = ({awardsDetailData}) => {
    return (
        <>
            <Head>
                <title>
                    {awardsDetailData.data[0].attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        awardsDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={
                        awardsDetailData.data[0].attributes.SEO.SEO_Keyword
                    }
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-4 pb-4">
                        <div className="col-span-2">
                            <h1 className="text-xl font-medium text-[#ac8642] pb-4">
                                {awardsDetailData.data[0].attributes.Title}
                            </h1>
                            <p className="text-xs">Friday, November 29, 2019</p>
                            <p className="text-xs pb-4">By PR Corp Kayumanis</p>
                            {ReactHtmlParser(
                                awardsDetailData.data[0].attributes.Description
                            )}
                        </div>
                        <div className="col-span-1">
                            <div className="bg-black">
                                <h1 className="text-base font-medium text-white p-2">
                                    Other Post
                                </h1>
                            </div>
                            <div className="py-4 border-b border-[#cecece]">
                                <p className="text-xs">
                                    Friday, November 29, 2019
                                </p>
                                <p className="text-xs text-[#ac8642]">
                                    Distinguished Guidebook Features Kayumanis
                                    Restaurants
                                </p>
                            </div>
                            <div className="py-4 border-b border-[#cecece]">
                                <p className="text-xs">
                                    Friday, November 29, 2019
                                </p>
                                <p className="text-xs text-[#ac8642]">
                                    Distinguished Guidebook Features Kayumanis
                                    Restaurants
                                </p>
                            </div>
                            <div className="py-4 border-b border-[#cecece]">
                                <p className="text-xs">
                                    Friday, November 29, 2019
                                </p>
                                <p className="text-xs text-[#ac8642]">
                                    Distinguished Guidebook Features Kayumanis
                                    Restaurants
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.id;

    const awardsDetailData = await fetch(
        `https://phpstack-841991-2983120.cloudwaysapps.com/api/awards?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            awardsDetailData,
        },
    };
}
