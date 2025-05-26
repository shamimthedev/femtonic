import FeatureList from './FeatureList';
import Button from './Button';
import MobileMockup from './MobileMockup';

function ConsentText() {
    return (
        <>
            <p className="text-xs font-medium text-[#ABABAB] text-center md:text-left">
                By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="mt-3 text-[10px] text-[#ABABAB] text-center md:text-left">
                Fametonic 2025 ©All Rights Reserved.
            </p>
        </>
    );
}

export default function HeroSection() {
    return (
        <section className="
            flex flex-col-reverse md:flex-row items-center justify-between
            max-w-[1120px] mx-auto
            px-4 md:px-10
            pt-8 md:pt-20 pb-12
            bg-black min-h-[80vh]
        ">
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                <h1 className="text-[25px] md:text-[35px] font-extrabold md:font-bold font-urbanist leading-7 md:leading-10 mb-3 text-white">
                    Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="text-[25px] md:text-[35px] font-urbanist font-extrabold md:font-bold leading-7 md:leading-10 mb-5 text-cyan-400 drop-shadow-[2px_2px_0px_#ff00a8]">
                    Discover your way to success with Fametonic:
                </h2>
                <FeatureList />

                {/* Mobile: Consent above button */}
                <div className="block md:hidden w-full mb-4">
                    <ConsentText />
                </div>

                <div className="mt-4 flex flex-col w-full md:w-auto items-center md:items-start">
                    <Button>GET STARTED</Button>
                    <p className="text-xs mt-[10px] text-white w-full text-center">
                        1-minute quiz for personalized Insights
                    </p>
                </div>

                {/* Desktop: Consent below button */}
                <div className="hidden md:block mt-[30px] w-full">
                    <ConsentText />
                </div>
            </div>
            {/* Right: Mobile Mockup */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <MobileMockup />
            </div>
        </section>
    );
}
