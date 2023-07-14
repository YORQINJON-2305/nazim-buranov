import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Modal } from "../Modal/Modal";

export const AdminBookCard = ({ data, fetchData }) => {
  const [showModal, setShowModal] = useState(false);

  const titleRef = useRef();
  const descrRef = useRef();
  const authorRef = useRef();

  const { title, text, author, id } = data;

  const splitText = text?.split(" ").slice(0, 30).join(" ");

  const handleDeleteBook = () => {
    axios
      .delete(`https://nazimburanov.uz/books/${id}`)
      .then(res => {
        if (res.status === 204) {
          fetchData();
          toast.error("Ma'lumot o'chirildi!");
        }
      })
      .catch(err => console.log(err));
  };

  const handlePostSubmit = evt => {
    evt.preventDefault();

    axios
      .patch(`https://nazimburanov.uz/books/${id}`, {
        title: titleRef.current.value,
        text: descrRef.current.value,
        author: authorRef.current.value,
      })
      .then(res => {
        if (res.status === 200) {
          fetchData();
          setShowModal(false);
          toast.success("Ma'lumot tahrirlandi!");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <li className="posts-item">
        <div className="posts-info">
          <h3 className="posts-title">{title}</h3>
          <p className="posts-descr">{splitText}...</p>
          <span style={{ display: "block", marginBottom: "15px" }}>
            <strong>{author}</strong>
          </span>
        </div>
        <div className="posts-control">
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{ marginRight: 2 }}
            onClick={() => setShowModal(true)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleDeleteBook}>
            Delete
          </Button>
        </div>
      </li>
      {showModal ? (
        <Modal title="Ma'lumotni tahrirlash" setShowModal={setShowModal}>
          <form onSubmit={handlePostSubmit}>
            <TextField
              style={{ width: "100%", marginBottom: "15px" }}
              required
              multiline
              maxRows={5}
              id="outlined-required"
              label="Title"
              inputRef={titleRef}
              defaultValue={title}
            />
            <TextField
              style={{ width: "100%", marginBottom: "15px" }}
              required
              multiline
              maxRows={8}
              id="outlined-required"
              label="Text"
              inputRef={descrRef}
              defaultValue={text}
            />
            <TextField
              style={{ width: "100%", marginBottom: "15px" }}
              label="Author"
              inputRef={authorRef}
              defaultValue={author}
            />
            <div className="edit-btn-wrap">
              <Button
                className="mt-3 me-3"
                onClick={() => setShowModal(false)}
                variant="contained"
                color="error">
                Cancel
              </Button>
              <Button
                className="mt-3"
                onClick={handlePostSubmit}
                variant="contained"
                color="success">
                Edit
              </Button>
            </div>
          </form>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
