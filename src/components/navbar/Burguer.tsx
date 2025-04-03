type Props = {}

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#feature" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
  { name: "Blog", href: "/#blog" },
];

const Burguer = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden"><MenuIcon /></SheetTrigger>
      <SheetContent className="border-none">
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
        <nav className="w-full h-full py-20 border ">
          <ul className="flex flex-col justify-between h-full">
            {
              navItems.map((item) => (
                <a href={item.href} className="w-full h-full flex justify-center items-center">
                  <li className="">
                    {item.name}
                  </li>
                </a>
              ))
            }
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Burguer