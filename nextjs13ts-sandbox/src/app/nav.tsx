'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className='bg-white text-black px-5 py-3 flex justify-between items-center'>
            <h1 className='text-xl font-extrabold text-violet-600'>TIAS APP</h1>
            <ul className="flex gap-3">
                <li>
                    <Link href='/' className={pathname == "/" ? "text-violet-600" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/movies" className={pathname == "/movies" ? "text-violet-600" : ""}>Movie</Link>
                </li>
            </ul>
        </nav>
    );
}
