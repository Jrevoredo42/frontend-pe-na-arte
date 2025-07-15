
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}