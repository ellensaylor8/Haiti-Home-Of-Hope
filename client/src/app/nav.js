"use client";

import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [{ href: "/about", name: "Who We Are" }];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/">HHH</Link>
      </h1>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-blue" : "text-black"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
