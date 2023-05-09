import React from "react";
import { Modal, Group, Input } from "@mantine/core";

export const LoginModal = (props) => {
  return (
    <>
      <Modal
        size="lg"
        opened={props.show}
        onClose={props.close}
        title="Upload!"
      >
        {<Input size="s" />}
      </Modal>
    </>
  );
};
