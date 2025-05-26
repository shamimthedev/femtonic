'use client';

export default function MobileMockup() {
  return (
    <div className="relative flex justify-center items-center w-[390px] h-[426px] md:w-[666px] md:h-[679px]">
      <img
        src="/images/phone-mockup.png"
        alt="Mobile App Mockup"
        className="block"
        style={{
          width: '390px',
          height: '426px',
        }}
        srcSet="/images/phone-mockup.png 666w"
        sizes="(min-width: 768px) 666px, 390px"
      />
      <style jsx>{`
        @media (min-width: 768px) {
          img[alt="Mobile App Mockup"] {
            width: 666px !important;
            height: 679px !important;
          }
        }
      `}</style>
    </div>
  );
}
