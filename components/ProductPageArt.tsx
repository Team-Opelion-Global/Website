export default function ProductPageArt() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden xl:block">
      <div className="absolute left-0 top-28 opacity-25">
        <ArtBlock flip={false} />
      </div>
      <div className="absolute right-0 top-[24rem] opacity-25">
        <ArtBlock flip />
      </div>
      <div className="absolute left-4 bottom-40 opacity-20">
        <SmallLeaf flip={false} />
      </div>
      <div className="absolute right-6 bottom-24 opacity-20">
        <SmallLeaf flip />
      </div>
      <div className="absolute left-8 top-[44rem] opacity-15">
        <MiniBloom />
      </div>
      <div className="absolute right-8 top-[10rem] opacity-12">
        <MiniBloom />
      </div>
      <div className="absolute left-[-4rem] top-[18rem] h-40 w-40 rounded-full bg-[#d8b496]/20 blur-3xl" />
      <div className="absolute right-[-3rem] bottom-[22rem] h-44 w-44 rounded-full bg-[#c79a2b]/10 blur-3xl" />
    </div>
  );
}

function ArtBlock({ flip }: { flip: boolean }) {
  return (
    <svg
      width="140"
      height="220"
      viewBox="0 0 140 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={flip ? "-scale-x-100" : ""}
    >
      <path
        d="M10 10C32 42 38 78 24 110C10 142 18 176 52 206"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 52C66 40 86 42 104 64C84 74 62 72 42 52Z"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M28 122C54 110 78 114 98 138C72 146 48 142 28 122Z"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M54 168C74 158 94 160 112 178C92 186 72 184 54 168Z"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14" r="10" stroke="#D8B496" strokeWidth="1.5" />
    </svg>
  );
}

function SmallLeaf({ flip }: { flip: boolean }) {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={flip ? "-scale-x-100" : ""}
    >
      <path
        d="M14 86C30 58 54 42 90 34C82 70 58 92 24 96"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 74C44 66 56 60 72 56"
        stroke="#B97D58"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 18C40 26 46 38 46 56C30 50 22 38 26 18Z"
        stroke="#D8B496"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniBloom() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="48" cy="48" r="6" stroke="#B97D58" strokeWidth="1.5" />
      <path d="M48 16C58 24 60 34 54 46C44 40 42 28 48 16Z" stroke="#B97D58" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M80 48C72 58 62 60 50 54C56 44 68 42 80 48Z" stroke="#B97D58" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M48 80C38 72 36 62 42 50C52 56 54 68 48 80Z" stroke="#B97D58" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 48C24 38 34 36 46 42C40 52 28 54 16 48Z" stroke="#B97D58" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
