export default function AnnouncementBar() {
  return (
    <div
      className="w-full py-[10px] px-4 text-center text-base md:text-[22px] font-extrabold text-white tracking-wide"
      style={{
        background: 'linear-gradient(90deg, #FC004E 0%, #00E7F9 100%)',
      }}
    >
      <span role="img" aria-label="rocket">🚀</span>
      <span className="ml-1 text-[#00E7F9]">FRESH BEGINNINGS SALE:</span>
      <span className="ml-2 text-sm md:text-[22px] font-bold">
        Extra 25% OFF, Limited Spots - start your journey today!
      </span>
    </div>
  );
}
