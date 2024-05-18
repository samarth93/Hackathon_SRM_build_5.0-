import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Expense from "@/pages/expense"; // Correct import statement for the Expense component

export default function App() {
  const urlObj = {}; // Example object, replace with your actual URL object

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">CashByte</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/pages/expense">
            Expenses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Savings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}