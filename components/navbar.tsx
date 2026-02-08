import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#105B48] text-white h-[82px] flex items-center ">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-6 text-lg font-semibold">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={200}
            height={26}
            priority
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          <button className="hover:opacity-80">
            <Image
              src="/icons/Budgeting.png"
              alt="Budgeting"
              width={32}
              height={32}
              priority
            />
          </button>

          <button className="hover:opacity-80">
            <Image
              src="/icons/calendar.png"
              alt="Calendar"
              width={32}
              height={32}
              priority
            />
          </button>

          <button className="hover:opacity-80">
            <Image
              src="/icons/document-text.png"
              alt="Document"
              width={32}
              height={32}
              priority
            />
          </button>
          <button className="hover:opacity-80">
            <Image
              src="/icons/Payout Center.png"
              alt="Marketplace"
              width={32}
              height={32}
              priority
            />
          </button>

          <button className="hover:opacity-80">
            <Image
              src="/icons/Marketplace.png"
              alt="Marketplace"
              width={32}
              height={32}
              priority
            />
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#105B48] font-bold">
            D
          </div>
        </div>
      </div>

    </header>
  );
}
