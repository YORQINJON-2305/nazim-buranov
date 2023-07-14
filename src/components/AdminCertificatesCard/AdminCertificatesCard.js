import "./admin-certificates-card.css";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminCertificatesCard = ({ data, fetchData }) => {
  const { picture, text, id } = data;

  const handleDeletePost = () => {
    axios
      .delete(`https://nazimburanov.uz/certificates/${id}`)
      .then(res => {
        if (res.status === 204) {
          fetchData();
          toast.error("Ma'lumot o'chirildi!");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <li className="admin-certificates-item">
      <div className="admin-certificates-img-wrap">
        <img className="admin-certificates-img" src={picture} alt={text} />
      </div>
      <div className="admin-certificates-control">
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={handleDeletePost}>
          Delete
        </Button>
      </div>
    </li>
  );
};
