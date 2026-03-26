// import "./globals.css";

// export const metadata = {
//   title: "Opelion Global",
//   description: "Premium Agricultural Exports",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import "./globals.css"; 
import { Playfair_Display, Inter } from "next/font/google"; 

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"], 
  variable: "--font-playfair", 
}); 

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
}); 

export const metadata = { 
  title: "Opelion Global", 
  description: "Premium Agricultural Exports", 
}; 

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return ( 
    // <html lang="en" className={${playfair.variable} ${inter.variable}}> 
     <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)]">{children}</body> 
    </html> 
  ); 
}