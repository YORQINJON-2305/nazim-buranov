import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import axios from "axios";

export const AddVideo = () => {
  const [formError, setFormError] = useState([]);

  const titleRef = useRef();
  const descrRef = useRef();
  const authorRef = useRef();

  const handlePostSubmit = evt => {
    evt.preventDefault();

    axios
      .post("https://nazimburanov.uz/videos/", {
        title: titleRef.current.value,
        text: descrRef.current.value,
        video: authorRef.current.value.toString(),
      })
      .then(res => {
        if (Object.keys(res).length >= 3) {
          titleRef.current.value = "";
          descrRef.current.value = "";
          authorRef.current.value = "";
          toast.success("Xabar qo'shildi ✅");
          setFormError([]);
        }
      })
      .catch(error => {
        const uniqueValues = [...new Set(Object.values(error.response.data))];
        setFormError(uniqueValues);
      });
  };
  console.log(formError);

  return (
    <div className="my-container">
      <div className="add-post-page-wrap">
        <Button
          className="admin-back-btn"
          onClick={() => window.history.back()}>
          <IoReturnUpBackOutline />
        </Button>
        <h2 className="posts-headline">Qahramonlarni qo'shish</h2>
        {formError?.flat().map((item, index) => (
          <p key={index} style={{ marginBottom: "8px", textAlign: "center" }}>
            {item}
          </p>
        ))}
        <form onSubmit={handlePostSubmit}>
          <TextField
            style={{ width: "100%", marginBottom: "15px" }}
            required
            multiline
            maxRows={5}
            id="outlined-required"
            label="Title"
            inputRef={titleRef}
          />
          <TextField
            style={{ width: "100%", marginBottom: "15px" }}
            required
            multiline
            maxRows={8}
            id="outlined-required"
            label="Description"
            inputRef={descrRef}
          />
          <TextField
            style={{ width: "100%", marginBottom: "15px" }}
            required
            id="outlined-required"
            label="Url"
            type="url"
            inputRef={authorRef}
          />

          <div className="add-post-form-btn-wrap">
            <Button
              className="add-post-form-btn"
              onClick={handlePostSubmit}
              variant="contained"
              color="success">
              <FaPlus style={{ marginRight: "5px" }} />
              Add Video
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
