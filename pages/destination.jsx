import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";

const destinations = ({destinationPageData, locationData, destinationData}) => {
    return (
        <>
            <Head>
                <title>
                    {destinationPageData.data.attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        destinationPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={
                        destinationPageData.data.attributes.SEO.SEO_Keyword
                    }
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="text-center px-16">
                <h1 className="text-[#333333] py-4 font-mrseaves">
                    {destinationPageData.data.attributes.Title}
                </h1>
            </div>
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
                    {locationData.data.map((item, index) => {
                        return (
                            <>
                                <div>
                                    <h1
                                        key={index}
                                        className="pt-4 pb-4 text-xl font-bold uppercase"
                                    >
                                        {item.attributes.Title}
                                    </h1>
                                    {destinationData.data.map(
                                        (item2, index2) => {
                                            if (
                                                item.id ===
                                                item2.attributes.location.data
                                                    .id
                                            ) {
                                                return (
                                                    <>
                                                        <div
                                                            key={index2}
                                                            className="mb-2"
                                                        >
                                                            <p>
                                                                <Link
                                                                    href={
                                                                        item2
                                                                            .attributes
                                                                            .Website
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    {
                                                                        item2
                                                                            .attributes
                                                                            .Title
                                                                    }
                                                                </Link>
                                                            </p>
                                                            <p>
                                                                {
                                                                    item2
                                                                        .attributes
                                                                        .Address
                                                                }
                                                            </p>
                                                        </div>
                                                    </>
                                                );
                                            }
                                        }
                                    )}
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default destinations;

export async function getStaticProps() {
    const destinationPageData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/destinations-page?populate=*"
    ).then((res) => res.json());

    const locationData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/locations?populate=*"
    ).then((res) => res.json());

    const destinationData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/destinations?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            destinationPageData,
            locationData,
            destinationData,
        },
    };
}
