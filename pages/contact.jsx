import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";

const contact = ({contactPageData}) => {
    return (
        <>
            <Head>
                <title>{contactPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        contactPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={contactPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="text-center px-16">
                <h1 className="text-[#333333] py-4 font-mrseaves">
                    {contactPageData.data.attributes.Title}
                </h1>
            </div>
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
                    {contactPageData.data.attributes.Contact_Details.map(
                        (item, index) => {
                            return (
                                <>
                                    <div>
                                        <h1 className="pt-4 pb-4 text-sm font-medium uppercase">
                                            {item.Property}
                                        </h1>
                                        <div className="mb-2">
                                            <p>
                                                {item.Address} <br />
                                                E: {item.Email} <br />
                                                P: {item.Phone} <br />
                                                F: {item.Fax} <br />
                                            </p>
                                        </div>
                                    </div>
                                </>
                            );
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default contact;

export async function getStaticProps() {
    const contactPageData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/contact?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            contactPageData,
        },
    };
}
