import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

function Card({dataEx}) {
    return (
        <div
            className="
        flex
        p-6 w-300 h-300 md:p-2 md:w-300 md:h-300
        drop-shadow-md	
        rounded-md"
        >
            <div className="flex flex-col">
                <Link href={dataEx.attributes.Link} target="_blank">
                    {/* <img
                        src={`https://phpstack-841991-2983120.cloudwaysapps.com/${dataEx.attributes.Experience_Image.data.attributes.formats.medium.url}`}
                        alt={
                            dataEx.attributes.Experience_Image.data.attributes
                                .alternativeText
                        }
                        className="w-full h-full"
                    /> */}
                    <div className="relative w-full h-[45vh]">
                        <Image
                            src={`https://phpstack-841991-2983120.cloudwaysapps.com/${dataEx.attributes.Experience_Image.data.attributes.formats.small.url}`}
                            alt={
                                dataEx.attributes.Experience_Image.data
                                    .attributes.alternativeText
                            }
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
                <h3 className="text-lg py-4 font-mrseaves">
                    <Link href={dataEx.attributes.Link} target="_blank">
                        {dataEx.attributes.Title}
                    </Link>
                </h3>
                <p className="font-sans">{dataEx.attributes.Excerpt}</p>
            </div>
        </div>
    );
}

export default Card;
