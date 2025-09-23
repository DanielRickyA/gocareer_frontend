import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const sections = [
    // { id: "/home", label: "Beranda", location: "/home" },
    {
      id: "/asesmen-minat",
      label: "Asesmen Minat",
      location: "/asesmen-minat",
    },
    // { id: "/minat-bakat", label: "Minat Bakat", location: "/minat-bakat" },
    // { id: "/jurusan", label: "Jurusan", location: "/jurusan" },
    // { id: "/dukungan", label: "Dukungan", location: "/dukungan" },
    // { id: "/sekolah", label: "Sekolah", location: "/sekolah" },
    { id: "/tentang-kami", label: "Tentang Kami", location: "/tentang-kami" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-500 ease-in-out bg-white text-black print:hidden
        ${
          scrolled || location.pathname != "/home"
            ? "dark:border-gray-800 dark:bg-gray-950 border-[0.5px] border-b-black/10 shadow-sm"
            : ""
        }
        `}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8 ">
        {/* <Link to="/home" className="flex items-center gap-2"> */}
        <Link to="/asesmen-minat" className="flex items-center gap-2">
          <p className="font-bold text-3xl">
            Go <span className="text-primary">Career</span>
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`${section.id}`}
              className={`border-b-[3px] text-base border-transparent hover:border-primary transition ease-in-out ${
                location.pathname == section.location && "border-b-primary"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4 mt-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`${section.id}`}
                    className={`text-muted-foreground border-b-3 border-transparent hover:border-primary/70 hover:w-full transition ease-in-out ${
                      location.pathname == section.location &&
                      "border-b-primary w-fit"
                    }`}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Nav;
