"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Logo from '@/assets/logo.png'
import Image from "next/image";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Nossas Soluções",
      link: "solucoes",
    },
    {
      name: "Segurança & App",
      link: "#pricing",
    },
    {
      name: "Planos & Tarifas",
      link: "planos",
    },
      {
      name: "Depoimentos",
      link: "depoimentos",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <Navbar className="top-5 pb-2 flex">
        <NavBody className="shadow-lg bg-white">
         <Image className="ml-2" src={Logo} width={50} height={50} alt=""/>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button className="bg-brand-blue-50 font-semibold text-white hover:bg-brand-blue-100 p-2 rounded-lg cursor-pointer">Abrir conta</button>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <Image src={Logo} width={40} height={40} alt=""/>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
            <button className="bg-brand-blue-50 font-semibold text-white hover:bg-brand-blue-100 p-2 rounded-lg cursor-pointer">Abrir conta</button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  );
}

