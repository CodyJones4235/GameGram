import React from 'react';
import Modal from 'react-modal';
import "./CreatePost.css"
export const CreatePost = () => {

    const modalStyle = {
        content: {
          width:"fit-content",
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };    
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}  style={modalStyle}>
          <form className='Container'>
          <button id='closeBtn' onClick={closeModal}>X</button>
          <h1>Upload!</h1>
          <h3 id='fileTxt'>Choose File!</h3>
          <input id='fileUpload' type="file" name="filename"/>
          <input id='submitBtn' type="submit"/>
          <h3 id='descriptionTxt'>Title!</h3>
          <input id='descriptionBox' type="text" name="fname"></input>
          </form>
        </Modal>
      </div>
    );
  }