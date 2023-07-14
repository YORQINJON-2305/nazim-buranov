import "./user-info.css";
import userPhoto from "../../assets/images/author-img-4.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const UserInfo = () => {
  return (
    <div className="user-info-card">
      <img className="user-img" src={userPhoto} alt="User's img" />
      <h2 className="username-text">Nazim Bo'ronov</h2>
      <p className="user-descr">
        Jurnalist, bo'lajak filologiya fanlari doktori (PhD)
      </p>
      <Button
        className="user-info-btn"
        variant="outlined"
        onClick={() => window.scrollTo(0, 500)}>
        <Link className="user-info-link" to="/muallif-haqida">
          Batafsil
        </Link>
      </Button>
    </div>
  );
};
