import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full h-[80vh] relative">

            {/* Background Image */}
            <Image
                src="/Hero.png"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 w-full">

                    <div className="max-w-xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Upgrade Your Skills Today 🚀
                        </h1>

                        <p className="text-lg opacity-90 mb-6">
                            Learn from industry experts and build real-world skills in Web Development, Design, Marketing and more.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium">
                                Explore Courses
                            </button>

                            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                                Learn More
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;