import { useEffect, useState } from "react";
import "./photos.css"
import axios from "axios";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Photos = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/photos")
      .then((res) => setPhotosData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="photos-wrap">
      {photosData?.length !== 0 ? (
        <div className='photos-info-wrap'>
          <ul className="photos-list">
            {photosData.map((item) => (
              <li className="photos-item">
                <img className="photos-img" src={item.picture} alt={item.title} />
                <Link className="photos-link" to={`${item.id}`}>
                  <Button variant="outlined" onClick={() => window.scrollTo(0, 500)} style={{ color: "#fff", borderColor: "#fff" }}>Batafsil</Button>
                </Link>
                <div className="photos-item-inner">
                </div>
              </li>
            ))}
          </ul>
          <div className="author-wrap">
            <UserInfo />
            <TopButton />
          </div>
        </div>
      ) : (
        <div className='progress-wrap'>
          <Dna
            visible={true}
            height='120'
            width='120'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      )}
    </div>
  )
}
