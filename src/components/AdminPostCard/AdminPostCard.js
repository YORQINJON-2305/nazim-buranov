import "./admin-post-card.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { Modal } from "../Modal/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminPostCard = ({ data, fetchData }) => {
  const { title, text, category, picture, author, created_at, id } = data;
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(category);

  const titleRef = useRef();
  const descrRef = useRef();
  const authorRef = useRef();

  const splitText = text?.split(" ").slice(0, 30).join(" ");
  const splitTitle = title?.split(" ").slice(0, 8).join(" ");
  const trimDate = created_at?.slice(0, 10);

  const changeCategory = () => {
    if (category === "Yangiliklar") {
      return "news";
    } else if (category === "Maqolalar") {
      return "articles";
    } else if (category === "Ilmiy_Maqolalar") {
      return "scientific_articles";
    } else if (category === "Hikoyalar") {
      return "stories";
    } else if (category === "Jurnallar") {
      return "magazines";
    } else if (category === "Kitoblar") {
      return "books";
    } else if (category === "Foto_lavhalar") {
      return "photos";
    }
  };

  const handleDeletePost = () => {
    axios
      .delete(`https://nazimburanov.uz/${changeCategory()}/${id}`)
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
      .patch(`https://nazimburanov.uz/${changeCategory()}/${id}`, {
        title: titleRef.current.value,
        text: descrRef.current.value,
        category: selectedValue,
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

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <li className="posts-item">
        <div>
          <span className="posts-time">{trimDate}</span>
          <img className="posts-img" src={picture} alt={title} />
          <div className="posts-info">
            <h3 className="posts-title">{splitTitle}</h3>
            <p className="posts-descr">{splitText}...</p>
            <strong className="posts-author">{author}</strong>
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
              label="Author"
              inputRef={authorRef}
              defaultValue={author}
            />
            <select
              className="category-select"
              value={selectedValue}
              defaultValue={category}
              onChange={handleChange}>
              <option value="Yangiliklar">Yangiliklar</option>
              <option value="Maqolalar">Maqolalar</option>
              <option value="Ilmiy_Maqolalar">Ilmiy Maqolalar</option>
              <option value="Hikoyalar">Hikoyalar</option>
              <option value="Jurnallar">Jurnallar</option>
              <option value="Xalqaro_munosabatlar">Xalqaro Munosabatlar</option>
              <option value="Foto_lavhalar">Fotolavhalar</option>
            </select>
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
