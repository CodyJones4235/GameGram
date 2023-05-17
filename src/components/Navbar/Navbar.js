import React, { useState } from "react";
import { NavLink } from "@mantine/core";
import { UploadModal } from "../Post/UploadModal";

export const Nav_bar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavLink
        label="Upload!"
        onClick={() => setShowModal(true)}
        variant="filled"
        active
      />
      <UploadModal
        show={showModal}
        close={() => setShowModal(false)}
        padding={0}
      />
    </>
  );
};
