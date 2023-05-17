import React, { useContext, useState } from "react";
import { Modal, TextInput, Button, Alert } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../Navbar/Navbar";

export const UploadModal = (props) => {
  const description = React.createRef();
  const navigate = useNavigate();

  const [Post, setPost] = useState({
    description: "",
  });

  const handleControlledInputChange = () => {
    const newPost = { ...Post };
    newPost.description = description.current.value;

    setPost(newPost);
  };

  const handleClickSavePost = (event) => {
    event.preventDefault();

    if (Post.description === "") {
      // window.alert("Please select an item");
    } else {
      // LOOK HERE
      console.log(Post);
      navigate("/");
    }
  };

  return (
    <>
      <Modal
        size="lg"
        opened={props.show}
        onClose={props.close}
        title="Upload!"
        centered
      >
        {
          <>
            <TextInput
              required
              placeholder="Video Url"
              size="md"
              label="Video Url"
              withAsterisk
            />
            <TextInput
              required
              placeholder="Title"
              size="md"
              label="Title"
              withAsterisk
            />
            <TextInput
              required
              placeholder="Description"
              size="md"
              label="Description"
              withAsterisk
              ref={description}
              type="text"
              id="description"
              className="textfield"
              value={Post.description}
              onChange={handleControlledInputChange}
            />
            <TextInput
              required
              placeholder="Game"
              size="md"
              label="Game"
              withAsterisk
            />
            <Button
              onClick={handleClickSavePost}
              style={{ marginTop: "2%", marginLeft: "85%" }}
            >
              Upload
            </Button>
          </>
        }
      </Modal>
    </>
  );
};
