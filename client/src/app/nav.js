"use client";

import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [{ href: "/about", name: "Who We Are" }];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <h1>
        <Link href="/">
          <Image
            src="/HHH-Logo.jpg"
            alt="HHH-Logo"
            width={50}
            height={50}
          ></Image>
        </Link>
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
