import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const admin = true;
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex  items-center justify-between h-14">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold md:font-extrabold">BurgerIn</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6  ">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Profile</Link>
            <Link to={"/"}>Order</Link>
          
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to={"/admin/"}>
                    <MenubarItem>Restaurant</MenubarItem>{" "}
                  </Link>
                  <Link to={"/admin/"}>
                    <MenubarItem>Menu</MenubarItem>
                  </Link>
                  <Link to={"/admin/"}>
                    <MenubarItem>Order</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="flex items-center gap-4" >
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to={"/cart"} className="relative cursor-pointer ">
          <ShoppingCart/>
          <Button size={'icon'} className="absolute -inset-y-3 left-4 text-sm w-4 h-4 rounded-full bg-red-500 "  >1</Button>
           </Link>  
           <div>
            <Avatar>
                <AvatarImage/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
           </div>
           <div>
            <Button className="hover:bg-yellow-700" >Logout</Button>
           </div>
        </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
