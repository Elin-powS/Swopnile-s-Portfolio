import { Outfit, Ovo } from "next/font/google"; 
import "./globals.css";


const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Swopnile's Portfolio",
  description: "A showcase of Swopnile's projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${ovo.className} ${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white `}
         suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
