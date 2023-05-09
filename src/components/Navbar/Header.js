import React from "react";
import { TextInput, Header, Button } from "@mantine/core";
import "./Navbar.css";
export const Headerbar = () => {
  return (
    <>
      <TextInput className="Search_Box" placeholder="Search" />
      <Button className="Profile_Box" h={30}>
        Your Profile
      </Button>
    </>
  );
};
