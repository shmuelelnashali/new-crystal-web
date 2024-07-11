import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Search from "./components/Search";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`h-screen p-2 flex flex-col text-blue_color  ${open_sans.className}`}
      >
        <Header />
        <div className="flex-1 px-4 overflow-hidden ">{children}</div>
        <div className="text-center pt-1 text-[#A5A5A5]">
          פותח ע"י מסגרת אמ"ת{" "}
        </div>
      </body>
    </html>
  );
}
