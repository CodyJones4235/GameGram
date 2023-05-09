import React, { useState } from "react";
import { NavLink, Box, TextInput, Header, Button } from "@mantine/core";
import { LoginModal } from "../Post/UploadModal";

export const Nav_bar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <NavLink
        label="Upload!"
        onClick={() => setShowLogin(true)}
        variant="filled"
        active
      />
      <LoginModal
        show={showLogin}
        close={() => setShowLogin(false)}
        padding={0}
      />
    </>
  );
};
