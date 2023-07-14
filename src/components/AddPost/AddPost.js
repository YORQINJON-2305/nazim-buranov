import "./add-post.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const AddPost = () => {
  return (
    <div className="my-container">
      <div className="add-post-wrap">
        <ul className="add-post-list">
          <li className="add-post-item">
            <Link to="/xabar_qo'shish">
              <Button className="add-post-btn" variant="outlined" size="large">
                Xabar <br /> qo'shish
              </Button>
            </Link>
          </li>
          <li className="add-post-item">
            <Link to="/video_qo'shish">
              <Button className="add-post-btn" variant="outlined" size="large">
                Video <br /> qo'shish
              </Button>
            </Link>
          </li>
          <li className="add-post-item">
            <Link to="/kitob_qo'shish">
              <Button className="add-post-btn" variant="outlined" size="large">
                Kitob <br /> qo'shish
              </Button>
            </Link>
          </li>
          <li className="add-post-item">
            <Link to="/sertifikat_qo'shish">
              <Button className="add-post-btn" variant="outlined" size="large">
                Sertifikat <br /> qo'shish
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
