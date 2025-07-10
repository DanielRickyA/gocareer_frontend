import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const sections = [
    { id: "/", label: "Beranda" },
    { id: "/keranjang", label: "Tes Minat" },
    { id: "/pembelian", label: "Jurusan" },
    { id: "/daftar-preorder", label: "Dukungan" },
    { id: "/kontak", label: "Sekolah" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      console.log(window.scrollY > 20);
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white border-b dark:border-gray-800 dark:bg-gray-950 text-black/70"
            : "bg-[#4298B4] text-white"
        }
        `}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold">Go Career</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`${section.id}`}
              className={` border-b-2 border-transparent hover:scale-110 hover:border-sky-300 transition ease-in-out hover:-translate-y-1`}
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
              <div className="grid gap-4 p-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`#${section.id}`}
                    className="text-muted-foreground border-b-2 border-transparent hover:border-orange-500 transition ease-in-out"
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
