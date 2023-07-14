import "./admin-video-card.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { Modal } from "../Modal/Modal";

export const AdminVideoCard = ({ data, fetchData }) => {
  const { title, text, video, id } = data;
  const splitText = text?.split(" ").slice(0, 30).join(" ");

  const [showModal, setShowModal] = useState(false);

  const titleRef = useRef();
  const descrRef = useRef();
  const urlRef = useRef();

  const handleDeletePost = () => {
    axios
      .delete(`https://nazimburanov.uz/videos/${id}`)
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
      .patch(`https://nazimburanov.uz/videos/${id}`, {
        title: titleRef.current.value,
        text: descrRef.current.value,
        video: urlRef.current.value,
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
      <li className="admin-video-item">
        <div>
          <div className="admin-video-wrap">
            <ReactPlayer
              width="100%"
              style={{ maxWidth: "600px" }}
              url={video}
              controls
            />
          </div>
          <div className="admin-video-text-wrap">
            <h3 className="admin-video-title">{title}</h3>
            <p className="admin-video-text">{splitText}</p>
          </div>
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
            sx={{ marginRight: 2 }}
            onClick={handleDeletePost}>
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
              required
              id="outlined-required"
              label="Url"
              inputRef={urlRef}
              defaultValue={video}
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
