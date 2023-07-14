import { Button, TextField } from "@mui/material";
import "./add-posts-page.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

export const AddPostsPage = () => {
  const [selectedValue, setSelectedValue] = useState("Yangiliklar");
  const [firstFile, setFirstFiles] = useState("");
  const [secondFile, setSecondFile] = useState("");
  const [thirdFile, setThirdFile] = useState("");
  const [formError, setFormError] = useState([]);

  const titleRef = useRef();
  const descrRef = useRef();
  const authorRef = useRef();
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handlePostSubmit = evt => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("text", descrRef.current.value);
    formData.append("author", authorRef.current.value);
    formData.append("category", selectedValue);
    formData.append("picture", firstFile);
    formData.append("picture2", secondFile);
    formData.append("picture3", thirdFile);

    fetch("https://nazimburanov.uz/home/", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data).length > 5) {
          titleRef.current.value = "";
          descrRef.current.value = "";
          authorRef.current.value = "";
          toast.success("Xabar qo'shildi ✅");
          setFormError([]);
        } else {
          const uniqueValues = [...new Set(Object.values(data))];
          setFormError(uniqueValues);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleFileUpload = () => {
    if (input1Ref.current.files[0]) {
      setFirstFiles(input1Ref.current.files[0]);
    }
    if (input2Ref.current.files[0]) {
      setSecondFile(input2Ref.current.files[0]);
    }
    if (input3Ref.current.files[0]) {
      setThirdFile(input3Ref.current.files[0]);
    }
  };

  return (
    <div className="my-container">
      <div className="add-post-page-wrap">
        <Button
          className="admin-back-btn"
          onClick={() => window.history.back()}>
          <IoReturnUpBackOutline />
        </Button>
        <h2 className="posts-headline">Xabar qo'shish</h2>
        <form onSubmit={handlePostSubmit}>
          {formError?.flat().map((innerArray, index) => (
            <p key={index} style={{ marginBottom: "8px", textAlign: "center" }}>
              {innerArray}
            </p>
          ))}
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
            id="outlined-required"
            label="Author"
            inputRef={authorRef}
          />
          <select
            className="category-select"
            value={selectedValue}
            onChange={handleChange}>
            <option value="Yangiliklar">Yangiliklar</option>
            <option value="Maqolalar">Maqolalar</option>
            <option value="Ilmiy_Maqolalar">Ilmiy Maqolalar</option>
            <option value="Hikoyalar">Hikoyalar</option>
            <option value="Jurnallar">Jurnallar</option>
            <option value="Xalqaro_munosabatlar">Xalqaro Munosabatlar</option>
            <option value="Foto_lavhalar">Fotolavhalar</option>
          </select>
          <ul className="file-input-list">
            <li className="file-input-item">
              <input
                type="file"
                id="file-input1"
                ref={input1Ref}
                onChange={() => handleFileUpload()}
                className="file-input__input"
              />
              <label className="file-input__label" htmlFor="file-input1">
                <FaUpload />
                <span>Upload file 1</span>
              </label>
              <p className="file-input-name">
                {firstFile ? firstFile.name : "No choose file"}
              </p>
            </li>
            <li className="file-input-item">
              <input
                type="file"
                id="file-input2"
                ref={input2Ref}
                onChange={() => handleFileUpload()}
                className="file-input__input"
              />
              <label className="file-input__label" htmlFor="file-input2">
                <FaUpload />
                <span>Upload file 2</span>
              </label>
              <p className="file-input-name">
                {secondFile ? secondFile.name : "No choose file"}
              </p>
            </li>
            <li className="file-input-item">
              <input
                type="file"
                id="file-input3"
                ref={input3Ref}
                onChange={() => handleFileUpload()}
                className="file-input__input"
              />
              <label className="file-input__label" htmlFor="file-input3">
                <FaUpload />
                <span>Upload file 3</span>
              </label>
              <p className="file-input-name">
                {thirdFile ? thirdFile.name : "No choose file"}
              </p>
            </li>
          </ul>

          <div className="add-post-form-btn-wrap">
            <Button
              className="add-post-form-btn"
              onClick={handlePostSubmit}
              variant="contained"
              color="success">
              <FaPlus style={{ marginRight: "5px" }} />
              Add Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
