import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationsImage = ({dataDes}) => {
    return (
        <div className="relative w-full h-[50vh]">
            <Link href={dataDes.attributes.Website} target="_blank">
                {/* <img
                    src={`https://phpstack-841991-2983120.cloudwaysapps.com/${dataDes.attributes.Image.data.attributes.formats.large.url}`}
                    alt={
                        dataDes.attributes.Image.data.attributes.alternativeText
                    }
                    className="custom-image2"
                /> */}
                <Image
                    src={`https://phpstack-841991-2983120.cloudwaysapps.com/${dataDes.attributes.Image.data.attributes.formats.small.url}`}
                    alt={
                        dataDes.attributes.Image.data.attributes.alternativeText
                    }
                    fill
                    className="object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-white font-mrseaves text-lg">
                        {dataDes.attributes.Title}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default DestinationsImage;
