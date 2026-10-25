import type { Metadata } from "next";
import Shell from "./components/Shell";
import "./globals.css";
export const metadata: Metadata = {title:{default:"Saqlain — AI Engineer",template:"%s | Saqlain"},description:"AI Engineer with backend systems and ML research foundations. AI applications, agent memory, distributed systems, and efficient inference. Saqlain, IIIT Allahabad."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Shell>{children}</Shell></body></html>}
