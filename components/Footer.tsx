// import Image from "next/image";
// import Link from "next/link";
// import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Products", href: "/#products" },
//   { label: "Blog", href: "/#blog" },
//   { label: "Contact", href: "/#contact" },
// ];

// const serviceLinks = [
//   "Private Labeling",
//   "White Labeling",
//   "Bulk Export",
//   "Custom Packaging",
// ];

// const socialLinks = [
//   { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
//   { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
//   { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#f8f2e7] text-[#5d4334]">
//       <div className="absolute inset-x-0 top-0 z-10 h-9 bg-[#fbfbf9] [clip-path:polygon(0_0,0_72%,4%_82%,8%_68%,12%_84%,16%_66%,20%_82%,24%_68%,28%_86%,32%_70%,36%_84%,40%_68%,44%_82%,48%_66%,52%_84%,56%_70%,60%_82%,64%_68%,68%_86%,72%_70%,76%_84%,80%_66%,84%_82%,88%_68%,92%_84%,96%_70%,100%_82%,100%_0)]" />
//       <div className="absolute inset-0 bg-[url('/about-texture1.jpg')] bg-cover bg-center opacity-[0.18]" />

//       <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-8">
//         <div className="grid gap-8 lg:grid-cols-[1.75fr_0.7fr_0.82fr_0.35fr] lg:gap-6">
//           <div className="max-w-[33rem]">
//             <Link href="/" className="inline-flex items-start gap-1 -mt-2">
//               <Image
//                 src="/Logo_shadow.png"
//                 alt="Opelion Global Private Limited"
//                 width={152}
//                 height={152}
//                 className="-mt-4 h-24 w-auto object-contain"
//               />
//               <div className="-ml-3 pt-0.5">
//                 <p className="whitespace-nowrap font-serif text-[1.72rem] leading-none text-[#0c7289]">
//                   Opelion Global Private Limited
//                 </p>
//                 <p className="mt-0 whitespace-nowrap text-[15px] uppercase tracking-[0.16em] text-[#c79a2b]">
//                   Where Quality Meets Trust
//                 </p>
//               </div>
//             </Link>

//             <div className="-mt-5 space-y-1.5 pl-[5.7rem] text-[15px] leading-7 text-[#124b5a]">
//               <div className="flex items-start gap-3">
//                 <Phone className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
//                 <p>+91 99253 51966</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
//                 <p>info@opelionglobal.com</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
//                 <p>
//                 27M2 Aatman, Madhuram Arcade 2, Madhuram Circle,
//                   <br />
//                   Dindoli, Surat, Gujarat 394210
                 
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:pl-8">
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
//               Menu
//             </p>
//             <div className="space-y-2.5">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="block text-[15px] text-[#124b5a] transition hover:text-[#8c5c38]"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="lg:pl-4">
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
//               Services
//             </p>
//             <div className="space-y-2.5">
//               {serviceLinks.map((service) => (
//                 <p key={service} className="text-[15px] text-[#124b5a]">
//                   {service}
//                 </p>
//               ))}
//             </div>
//           </div>

//           <div className="lg:justify-self-end">
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
//               Follow Us
//             </p>
//             <div className="flex flex-row items-center gap-3">
//               {socialLinks.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label={item.label}
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a1] bg-white/80 text-[#124b5a] transition hover:border-[#c79a2b] hover:text-[#8c5c38]"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 );
//               })}
//               <a
//                 href="https://x.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="X"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a1] bg-white/80 text-[#124b5a] transition hover:border-[#c79a2b] hover:text-[#8c5c38]"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                   className="h-4 w-4 fill-current"
//                 >
//                   <path d="M18.9 2H21l-6.55 7.49L22 22h-5.96l-4.67-6.11L6.02 22H3.9l7-8-7.2-12h6.1l4.22 5.58L18.9 2Zm-1.04 18h1.16L9.17 3.9H7.92L17.86 20Z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-[#dfcfb1] pt-6 text-center text-sm text-[#8b6d5a]">
//           <p>Copyright &copy; 2026 Opelion Global Pvt. Ltd. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Products", href: "/#products" },
//   { label: "Blog", href: "/#blog" },
//   { label: "Contact", href: "/#contact" },
// ];

// const serviceLinks = [
//   "Private Labeling",
//   "White Labeling",
//   "Bulk Export",
//   "Custom Packaging",
// ];

// const socialLinks = [
//   { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
//   { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
//   { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#f8f2e7] text-[#124b5a]">

//       {/* 🔥 Torn Paper */}
//       <div className="absolute top-[-1px] left-0 w-full z-20 pointer-events-none">
//         <img
//           src="/Footer_texture.png"
//           alt="torn edge"
//           className="w-full h-[70px] object-cover drop-shadow-[0_-3px_6px_rgba(0,0,0,0.12)]"
//         />
//       </div>

//       {/* 🌿 Paper Texture */}
//       <div className="absolute inset-0 bg-[url('/about-texture.jpg')] opacity-[0.07]" />

//       <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">

//         <div className="grid gap-10 lg:grid-cols-[1.8fr_0.7fr_0.9fr_0.5fr]">

//           {/* LEFT - BRAND */}
//           <div className="max-w-[34rem]">
//             <Link href="/" className="flex items-start gap-2">
//               <Image
//                 src="/Logo_shadow.png"
//                 alt="Opelion"
//                 width={140}
//                 height={140}
//                 className="h-20 w-auto object-contain"
//               />
//               <div>
//                 <p className="font-serif text-[1.6rem] leading-tight text-[#0c7289]">
//                   Opelion Global Private Limited
//                 </p>
//                 <p className="text-[13px] uppercase tracking-[0.18em] text-[#c79a2b]">
//                   Where Quality Meets Trust
//                 </p>
//               </div>
//             </Link>

//             {/* CONTACT */}
//             <div className="mt-6 space-y-3 text-[15px] text-[#124b5a]">
//               <div className="flex items-start gap-3">
//                 <Phone className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>+91 99253 51966</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>info@opelionglobal.com</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>
//                   27M2 Aatman, Madhuram Arcade 2, Madhuram Circle,
//                   <br />
//                   Dindoli, Surat, Gujarat 394210
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MENU */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Menu
//             </p>
//             <div className="space-y-2">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="block text-[15px] hover:text-[#8c5c38] transition"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Services
//             </p>
//             <div className="space-y-2">
//               {serviceLinks.map((service) => (
//                 <p key={service} className="text-[15px]">
//                   {service}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* SOCIAL */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Follow Us
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a1] bg-white/70 hover:border-[#c79a2b] transition"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-12 border-t border-[#e5d6bc] pt-6 text-center text-sm text-[#8b6d5a]">
//           <p>Copyright © 2026 Opelion Global Pvt. Ltd. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Products", href: "/#products" },
//   { label: "Blog", href: "/#blog" },
//   { label: "Contact", href: "/#contact" },
// ];

// const serviceLinks = [
//   "Private Labeling",
//   "White Labeling",
//   "Bulk Export",
//   "Custom Packaging",
// ];

// const socialLinks = [
//   { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
//   { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
//   { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden text-[#124b5a]">

//       {/* 🔥 SINGLE BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/Footer_wheat.png"   // 👈 your merged image
//           alt="footer background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* 🔥 CONTENT LAYER */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-10">

//         <div className="grid gap-10 lg:grid-cols-[1.8fr_0.7fr_0.9fr_0.5fr]">

//           {/* LEFT - BRAND */}
//           <div className="max-w-[34rem]">
//             <Link href="/" className="flex items-start gap-2">
//               <Image
//                 src="/Logo_shadow.png"
//                 alt="Opelion"
//                 width={140}
//                 height={140}
//                 className="h-20 w-auto object-contain"
//               />
//               <div>
//                 <p className="font-serif text-[1.6rem] leading-tight text-[#0c7289]">
//                   Opelion Global Private Limited
//                 </p>
//                 <p className="text-[13px] uppercase tracking-[0.18em] text-[#c79a2b]">
//                   Where Quality Meets Trust
//                 </p>
//               </div>
//             </Link>

//             {/* CONTACT */}
//             <div className="mt-6 space-y-3 text-[15px]">
//               <div className="flex items-start gap-3">
//                 <Phone className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>+91 99253 51966</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>info@opelionglobal.com</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="mt-1 h-4 w-4 text-[#c79a2b]" />
//                 <p>
//                   27M2 Aatman, Madhuram Arcade 2, Madhuram Circle,
//                   <br />
//                   Dindoli, Surat, Gujarat 394210
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MENU */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Menu
//             </p>
//             <div className="space-y-2">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="block text-[15px] hover:text-[#8c5c38] transition"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Services
//             </p>
//             <div className="space-y-2">
//               {serviceLinks.map((service) => (
//                 <p key={service} className="text-[15px]">
//                   {service}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* SOCIAL */}
//           <div>
//             <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c79a2b]">
//               Follow Us
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a1] bg-white/70 hover:border-[#c79a2b] transition"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-12 border-t border-[#e5d6bc] pt-6 text-center text-sm text-[#8b6d5a]">
//           <p>Copyright © 2026 Opelion Global Pvt. Ltd. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


















"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  "Private Labeling",
  "White Labeling",
  "Bulk Export",
  "Custom Packaging",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/Opelionglobal/?rdid=4FXo2GA4QBFXI9T3", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/opelionnglobal/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/opelion-global-private-limited", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8f2e7] text-[#5d4334]">

      {/* 🔥 Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/Footer_edit.jpeg"   // 👈 your merged image
          alt="footer background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* 🔥 Torn Paper Top Effect */}
          <div className="absolute top-0 left-0 w-full z-10">
            <img
              src="/Footer_final.jpeg"
              alt="torn effect"
              className="hidden w-full h-120 object-top lg:block"
            />
            <img
              src="/Footer_mobile.png"
              alt="torn effect mobile"
              className="block w-full h-250 object-top lg:hidden"
            />
          </div>

          

      {/* 🔥 Existing Torn Effect (kept as is) */}
      {/* <div className="absolute inset-x-0 top-0 z-10 h-9 bg-[#fbfbf9] [clip-path:polygon(0_0,0_72%,4%_82%,8%_68%,12%_84%,16%_66%,20%_82%,24%_68%,28%_86%,32%_70%,36%_84%,40%_68%,44%_82%,48%_66%,52%_84%,56%_70%,60%_82%,64%_68%,68%_86%,72%_70%,76%_84%,80%_66%,84%_82%,88%_68%,92%_84%,96%_70%,100%_82%,100%_0)]" /> */}

      {/* 🔥 Content */}
      {/* <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-8"> */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:pl-2 lg:pr-6">
          {/* <div className="relative z-10 mx-auto max-w-7xl px-7 pt-24 pb-8"> */}
      {/* <div className="relative z-10 max-w- pl- pr-6 pt-24 pb-8"> */}
        <div className="grid gap-8 lg:grid-cols-[1.75fr_0.7fr_0.82fr_0.35fr] lg:gap-6">

          {/* LEFT */}
          <div className="max-w-[33rem] justify-self-start">
            <Link href="/" className="inline-flex max-w-full items-start gap-1 -mt-2">
              <Image
                src="/Logo_shadow.png"
                alt="Opelion Global Private Limited"
                width={152}
                height={152}
                className="-mt-4 h-20 w-auto object-contain sm:h-24"
              />
              <div className="-ml-2 min-w-0 pt-0.5 sm:-ml-3">
                <p className="font-serif text-[1.45rem] leading-none text-[#0c7289] sm:text-[1.6rem] lg:whitespace-nowrap lg:text-[1.72rem]">
                  Opelion Global Private Limited
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[#c79a2b] sm:text-[13px] sm:tracking-[0.14em] lg:mt-0 lg:whitespace-nowrap lg:text-[15px] lg:tracking-[0.16em]">
                  Where Quality Meets Trust
                </p>
              </div>
            </Link>

            <div className="mt-4 space-y-2 pl-10 text-[15px] leading-7 text-[#124b5a] sm:-mt-1 sm:pl-[4.5rem] lg:-mt-5 lg:space-y-1.5 lg:pl-[5rem]">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
                <p>+91 99253 51966</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
                <p>info@opelionglobal.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#c79a2b]" />
                <p>
                  27M2 Aatman, Madhuram Arcade 2, Madhuram Circle,
                  <br />
                  Dindoli, Surat, Gujarat 394210
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="lg:pl-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
              Menu
            </p>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] text-[#124b5a] transition hover:text-[#8c5c38]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:pl-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
              Services
            </p>
            <div className="space-y-2.5">
              {serviceLinks.map((service) => (
                <p key={service} className="text-[15px] text-[#124b5a]">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div className="lg:justify-self-end">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c79a2b]">
              Follow Us
            </p>
            <div className="flex flex-row items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7a1] bg-white/80 text-[#124b5a] transition hover:border-[#c79a2b] hover:text-[#8c5c38]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[#dfcfb1] pt-6 text-center text-sm text-[#8b6d5a]">
          <p>Copyright © 2026 Opelion Global Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
