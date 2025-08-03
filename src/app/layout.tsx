
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import HomeNav from "@/Components/nav";


// Fontes Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${poppins.className}`}
    >
      <head>
        <title>PE na Arte</title>
      </head>
      <body>
        <HomeNav/>
      <div
        className="fixed inset-0 w-full h-full -z-10"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/pattern cordas.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        }}
        >
          <div className="absolute inset-0 bg-gray-100/80"></div>
        </div>
      {children}
      </body>
    </html>
  );
}