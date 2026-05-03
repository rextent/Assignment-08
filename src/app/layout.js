import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.8.4']);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'animate.css';


const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "SkillSphere – Online Learning Platform",
  description: "SkillSphere – Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme='light'
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <ToastContainer position="top-right" autoClose={2000} />
        <Footer></Footer>
        </body>
    </html>
  );
}
