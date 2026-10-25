import type { Metadata } from "next";
import Shell from "./components/Shell";
import "./globals.css";
export const metadata: Metadata = {title:{default:"Saqlain — AI & Backend Engineer",template:"%s | Saqlain"},description:"I build backend systems and AI applications. Distributed systems, intelligent agents, and machine learning research. Saqlain, IIIT Allahabad."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Shell>{children}</Shell></body></html>}
