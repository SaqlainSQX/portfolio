import type { Metadata } from "next";
import Shell from "./components/Shell";
import "./globals.css";
export const metadata:Metadata={title:{default:"Mohammad Saqlain | Software & AI Engineer",template:"%s | Mohammad Saqlain"},description:"Distributed systems, intelligent agents, and efficient AI. Explore Mohammad Saqlain's engineering projects and research."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
