import styled from "styled-components";
import Button from "./Button";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

const links = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "Services",
    href: "#services",
  },
  {
    id: 3,
    title: "Our Work",
    href: "#our_works",
  },
  {
    id: 4,
    title: "Testimonials",
    href: "#testimonials",
  },
];

const Navigation = () => {
  return (
    <Navbar>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <DesktopNavigation className="hidden md:flex" />
        <MobileNavigation className="block md:hidden" />
      </div>
    </Navbar>
  );
};

function DesktopNavigation({ className = "" }) {
  return (
    <>
      <NavList className={className}>
        {links.map((link) => (
          <NavLinks key={link.id}>
            <Link href={link.href} className="tracking-wider text-indigo-500">
              {link.title}
            </Link>
          </NavLinks>
        ))}
      </NavList>
      <Button className={className}>Contact Us</Button>
    </>
  );
}

function MobileNavigation({ className = "" }) {
  const [isExpand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((prev) => !prev);
  }

  return (
    <div className={className}>
      <div className="bg-indigo-500 p-1 rounded -z-20" onClick={handleExpand}>
        <AlignRight className="text-white " />
      </div>

      {isExpand && (
        <>
          <div className="fixed inset-0 w-2/3 p-10 z-10 flex flex-col justify-between bg-white opacity-100 transition-all duration-900">
            <Logo />
            <NavList
              className={"self-center flex flex-col items-center gap-y-2"}
            >
              {links.map((link) => (
                <NavLinks key={link.id}>
                  <Link
                    href={link.href}
                    className="tracking-wider text-indigo-500 py-2 px-3"
                    onClick={handleExpand}
                  >
                    {link.title}
                  </Link>
                </NavLinks>
              ))}
            </NavList>
            <X
              className="self-end text-white bg-indigo-500 rounded-full p-1 h-10 w-10"
              onClick={handleExpand}
            />
          </div>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur"
            onClick={handleExpand}
          />
        </>
      )}
    </div>
  );
}

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  padding: 1.5rem 2rem;
  z-index: 10;
`;

const NavList = styled.ul`
  column-gap: 2rem;
`;

const NavLinks = styled.li`
  display: flex;
  column-gap: 2rem;
`;

const Link = styled.a`
  font-size: 14px;
`;
export default Navigation;
