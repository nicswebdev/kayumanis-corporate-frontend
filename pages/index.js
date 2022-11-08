import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import {SliderData} from "../components/SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";
import Footer from "../components/Footer";
import DestinationsImage from "../components/DestinationsImage";
import ReactHtmlParser from "react-html-parser";

export default function Home({
    homepageData,
    destinationsData,
    experiencesData,
}) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };
    return (
        <div>
            <Head>
                <title>{homepageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={homepageData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={homepageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Slider slides={SliderData} /> */}
            {/* <Hero /> */}

            <Carousel
                responsive={responsive2}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3200}
                showDots={false}
                className="mb-12"
            >
                {homepageData.data.attributes.Slider.map((image, index) => {
                    return (
                        <>
                            <div className="relative w-full h-screen">
                                <Image
                                    src={`https://phpstack-841991-2983120.cloudwaysapps.com/${image.Slider_Image.data.attributes.formats.large.url}`}
                                    alt={
                                        image.Slider_Image.data.attributes
                                            .alternativeText
                                    }
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </>
                    );
                })}
            </Carousel>

            {/* <div className="mb-12">
                {homepageData.data.attributes.Slider.map((image, index) => {
                    return (
                        <>
                            <div className="relative w-full h-screen">
                                <Image
                                    src={`https://phpstack-841991-2983120.cloudwaysapps.com/${image.Slider_Image.data.attributes.formats.large.url}`}
                                    alt={
                                        image.Slider_Image.data.attributes
                                            .alternativeText
                                    }
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </>
                    );
                })}
            </div> */}

            <div className="text-center px-16">
                <h1 className="text-[#333333] py-4 font-mrseaves">
                    {homepageData.data.attributes.About_Title}
                </h1>
                {ReactHtmlParser(homepageData.data.attributes.About_Kayumanis)}
            </div>

            <div className="max-w-[1240px] mx-auto px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
                    {homepageData.data.attributes.About_Image.map(
                        (item, index) => {
                            return (
                                <>
                                    <div className="">
                                        <div className="relative w-full h-[40vh]">
                                            <Image
                                                src={`https://phpstack-841991-2983120.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                alt={
                                                    item.Image.data.attributes
                                                        .alternativeText
                                                }
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="font-mrseaves text-xl mt-1">
                                            {item.Title}
                                        </p>
                                    </div>
                                </>
                            );
                        }
                    )}
                </div>
            </div>

            <div className="text-center px-1">
                <h1 className="text-[#333333] py-4 font-mrseaves">
                    {homepageData.data.attributes.Destinations_Title}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {destinationsData.data.map((item, index) => {
                        return (
                            <>
                                <DestinationsImage dataDes={item} />
                            </>
                        );
                    })}
                </div>
            </div>

            <div className="text-left px-16 py-16">
                <div className="mx-auto md:grid grid-cols-2 gap-8">
                    <div>
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={`https://phpstack-841991-2983120.cloudwaysapps.com/${homepageData.data.attributes.Concept_Section.Image.data.attributes.formats.large.url}`}
                                alt="test"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-black py-4 text-2xl font-mrseaves">
                            {homepageData.data.attributes.Concept_Section.Title}
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes.Concept_Section
                                .Description
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center px-16">
                <h1 className="text-black pb-4 text-2xl font-mrseaves">
                    {homepageData.data.attributes.Experience_Title}
                </h1>
                <p>{homepageData.data.attributes.Experience_Description}</p>
            </div>

            <div>
                <div className="p-10">
                    <div>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={3200}
                            showDots={false}
                        >
                            {experiencesData.data.map((item, index) => {
                                return (
                                    <>
                                        <Card dataEx={item} />
                                    </>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const homepageData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/home-page?populate[Slider][populate]=*&populate[About_Image][populate]=*&populate[Concept_Section][populate]=*&populate[SEO][populate]=*"
    ).then((res) => res.json());

    const destinationsData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/destinations?populate=*"
    ).then((res) => res.json());

    const experiencesData = await fetch(
        "https://phpstack-841991-2983120.cloudwaysapps.com/api/experiences?populate=*"
    ).then((res) => res.json());

    //console.log(destinationsData.data);
    return {
        props: {
            homepageData,
            destinationsData,
            experiencesData,
        },
    };
}
