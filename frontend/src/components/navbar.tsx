"use client";
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />

    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      <Menu setActive={setActive}>
    
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        <HoveredLink href="/" className="text-sm/6 font-semibold text-gray-900">
        Home
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Product">
          <div className="  text-sm grid grid-cols-1 gap-5 p-4">
            <ProductItem
              title="Missminutes"
            //   href="https://algochurn.com"
            href="https://missminutes.in/"
              src="https://missminutesblob.blob.core.windows.net/missminutesbucket/thumbnail.jpg"
              description="Prepare for Your interviews like never before."
            />
       
       
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>   */}
      
        <HoveredLink href="/about" className="text-sm/6 font-semibold text-gray-900">
        Company
        </HoveredLink>
        <HoveredLink href="/blog" className="text-sm/6 font-semibold text-gray-900">
        Blog
        </HoveredLink>
      </Menu>
   
       
    </div>
  );
}
