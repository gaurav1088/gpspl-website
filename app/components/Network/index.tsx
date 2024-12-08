import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/jaipur.png",
        country: "Jaipur",
        paragraph: 'Hub for geospatial and environmental solutions, driving sustainability and smart city initiatives.',

    },
    {
        imgSrc: "/assets/network/delhi.png",
        country: "Delhi",
        paragraph: 'Leading urban planning and environmental management with advanced tech solutions.',

    },
    {
        imgSrc: "/assets/network/mumbai.png",
        country: "Mumbai",
        paragraph: 'Innovating with custom software, AI, and IoT solutions for diverse industries.',

    },
    {
        imgSrc: "/assets/network/bengaluru.png",
        country: "Bengaluru",
        paragraph: 'Pioneering AI-powered solutions and data analytics to drive industry growth.',

    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Connecting India  <br /> with Innovation.</h3>

                <Image src={'/assets/network/new-map-image.png'} alt={"new-map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
