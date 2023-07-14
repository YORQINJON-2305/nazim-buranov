import "./add-certificates.css";
import { Button } from "@mui/material";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

export const AddCertificates = () => {
  const [firstFile, setFirstFiles] = useState("");
  const [secondFile, setSecondFile] = useState("");

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handlePostSubmit = evt => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("picture", firstFile);
    formData.append("file", secondFile);

    fetch("https://nazimburanov.uz/certificates/", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data).length >= 2) {
          toast.success("Sertifikat qo'shildi ✅");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleFileUpload = () => {
    if (input1Ref.current.files[0]) {
      setFirstFiles(input1Ref.current.files[0]);
    }
    if (input2Ref.current.files[0]) {
      setSecondFile(input2Ref.current.files[0]);
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
        <h2 className="posts-headline">Sertifikat qo'shish</h2>
        <form onSubmit={handlePostSubmit}>
          <ul className="certificate-file-input-list">
            <li className="file-input-item">
              <input
                type="file"
                id="file-input1"
                ref={input1Ref}
                onChange={() => handleFileUpload()}
                className="file-input__input"
              />
              <label
                className="certificate-file-input__label"
                htmlFor="file-input1">
                <FaUpload />
                <span>Upload image</span>
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
              <label
                className="certificate-file-input__label"
                htmlFor="file-input2">
                <FaUpload />
                <span>Upload file </span>
              </label>
              <p className="file-input-name">
                {secondFile ? secondFile.name : "No choose file"}
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
