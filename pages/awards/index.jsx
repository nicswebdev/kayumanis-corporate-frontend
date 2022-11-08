import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";

const award = ({awardPageData, awardsData}) => {
    return (
        <>
            <Head>
                <title>{awardPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={awardPageData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={awardPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="text-center px-16">
                <h1 className="text-[#333333] py-4 font-mrseaves">
                    {awardPageData.data.attributes.Title}
                </h1>
            </div>
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                {awardsData.data.map((item, index) => {
                    return (
                        <>
                            <div>
                                <h1 className="text-xl font-medium text-[#ac8642]">
                                    <Link
                                        href={`/awards/${item.attributes.Slug}`}
                                    >
                                        {item.attributes.Title}
                                    </Link>
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-4 pb-4">
                                    <div className="col-span-1">
                                        <img
                                            src={`https://phpstack-841991-2983120.cloudwaysapps.com/${item.attributes.Award_Image.data.attributes.url}`}
                                            alt={
                                                item.attributes.Award_Image.data
                                                    .attributes.alternativeText
                                            }
                                            className="custom-image3"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <p>{item.attributes.Excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default award;

export async function getStaticProps() {
    const awardPageData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/awards-page?populate=*"
    ).then((res) => res.json());

    const awardsData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/awards?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            awardPageData,
            awardsData,
        },
    };
}
