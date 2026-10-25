"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Shell({children}:{children:React.ReactNode}){const path=usePathname();return <><a className="skip" href="#main">Skip to content</a>{path!=="/"&&<header className="inner-nav"><Link href="/">← Saqlain</Link><nav><Link href="/projects">Projects</Link><Link href="/research">Research</Link><Link href="/contact">Contact</Link></nav></header>}<main id="main">{children}</main></>}
