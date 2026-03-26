export default function ProductsLineArt() {
  return (
    <div className="mx-auto mt-8 flex max-w-5xl items-center justify-center overflow-hidden rounded-[34px] border border-[#dfcfb1] bg-white/60 px-8 py-5 shadow-[0_10px_30px_rgba(18,75,90,0.05)] backdrop-blur-sm">
      <svg
        viewBox="0 0 1120 150"
        className="h-[88px] w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <PeaPod x={28} />
        <GrainSprig x={146} />
        <Garlic x={286} />
        <Ginger x={414} />
        <BowlOfLentils x={536} />
        <ScoopOfSeeds x={690} />
        <Chili x={842} />
        <SeedScatter x={960} />
      </svg>
    </div>
  );
}

const line = "#6f6254";
const accent = "#b99145";

function PeaPod({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 48)`}>
      <path d="M8 24C18 10 32 4 52 6C48 24 34 34 14 36" stroke={line} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="22" r="3.5" stroke={accent} strokeWidth="1.5" />
      <circle cx="30" cy="20" r="3.5" stroke={accent} strokeWidth="1.5" />
      <circle cx="40" cy="18" r="3.5" stroke={accent} strokeWidth="1.5" />
    </g>
  );
}

function GrainSprig({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 22)`}>
      <path d="M30 96C30 72 30 44 36 10" stroke={line} strokeWidth="1.9" strokeLinecap="round" />
      <path d="M36 24C48 24 56 30 62 40C48 40 40 34 36 24Z" stroke={line} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M34 42C46 42 54 48 60 58C46 58 38 52 34 42Z" stroke={line} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M30 60C42 60 50 66 56 76C42 76 34 70 30 60Z" stroke={line} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M26 30C18 30 10 36 4 46C14 46 22 40 26 30Z" stroke={accent} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 48C14 48 6 54 0 64C12 64 20 58 24 48Z" stroke={accent} strokeWidth="1.4" strokeLinejoin="round" />
    </g>
  );
}

function Garlic({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 34)`}>
      <path d="M24 2C16 12 15 22 18 34" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 32C-2 44 -4 58 2 72C8 86 16 92 24 92C32 92 40 86 46 72C52 58 50 44 40 32" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 34C17 42 15 54 18 68C20 82 22 92 24 92C26 92 28 82 30 68C33 54 31 42 24 34Z" stroke={accent} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 40C10 48 10 60 14 74" stroke={line} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 40C38 48 38 60 34 74" stroke={line} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

function Ginger({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 46)`}>
      <path d="M10 38C4 28 8 12 20 10C30 8 34 16 34 24C36 12 48 8 56 12C64 16 62 26 56 34C66 30 76 34 80 42C84 52 76 60 64 60C50 60 44 54 40 48C38 58 30 66 18 66C8 66 2 58 4 48C4 44 6 40 10 38Z" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 20C20 28 20 38 24 48" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 20C46 28 44 36 44 46" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

function BowlOfLentils({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 30)`}>
      <path d="M16 54C18 76 30 90 58 90C86 90 98 76 100 54" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M10 54C18 44 36 38 58 38C80 38 98 44 106 54" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 54H98" stroke={accent} strokeWidth="1.4" />
      {[
        [28, 34], [40, 28], [52, 30], [66, 28], [78, 34], [34, 42], [48, 40],
        [60, 42], [72, 40], [26, 48], [38, 50], [52, 48], [66, 50], [80, 48],
      ].map(([cx, cy]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="4" ry="3" stroke={line} strokeWidth="1.2" />
      ))}
    </g>
  );
}

function ScoopOfSeeds({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 34)`}>
      <path d="M12 62C28 52 44 48 62 48C74 48 84 50 92 54C92 70 80 82 60 84C42 86 24 80 12 62Z" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M62 48L88 16" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <path d="M88 16C94 12 102 12 108 18" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
      {[
        [26, 62], [36, 58], [48, 60], [58, 58], [70, 62], [32, 70], [44, 68],
        [56, 70], [68, 68],
      ].map(([cx, cy]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="3.6" ry="2.6" stroke={line} strokeWidth="1.2" />
      ))}
    </g>
  );
}

function Chili({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 38)`}>
      <path d="M10 12C18 4 30 4 38 12" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38 14C26 24 18 38 16 62C30 62 44 52 52 34C56 24 50 16 38 14Z" stroke={line} strokeWidth="2.2" strokeLinejoin="round" />
    </g>
  );
}

function SeedScatter({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 28)`}>
      {[
        [8, 16], [30, 12], [48, 24], [18, 40], [42, 46], [10, 66], [30, 74], [54, 62],
      ].map(([cx, cy]) => (
        <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="5" ry="3.3" stroke={line} strokeWidth="1.4" transform={`rotate(${(cx + cy) % 45} ${cx} ${cy})`} />
      ))}
    </g>
  );
}
