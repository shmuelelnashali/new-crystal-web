import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Search from "./components/Search";

const open_sans = Open_Sans({ 
  weight:["300","400","500","600","700","800"],
  subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">

      <body className={`h-screen  flex-col px-5 text-[#002A78]  overflow-hidden ${open_sans.className}`}>
        <Header />
        {children}
        <div>פותח ע"י מסגרת אמת </div>
        </body>
    </html>
  );
}
