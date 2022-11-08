import React from "react";
import Hero from "../components/Hero";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";

const custom = ({pageDetailData}) => {
    return (
        <>
            <Head>
                <title>{pageDetailData.data[0].attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        pageDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={pageDetailData.data[0].attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                <h1 className="text-xl font-medium text-[#ac8642] pb-16 text-center">
                    {pageDetailData.data[0].attributes.Title}
                </h1>
                {ReactHtmlParser(pageDetailData.data[0].attributes.Content)}
            </div>
        </>
    );
};

export default custom;

export async function getStaticProps({params}) {
    const slug = params.id;

    const pageDetailData = await fetch(
        `https://phpstack-841991-2983120.cloudwaysapps.com/api/pages?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            pageDetailData,
        },
    };
}
