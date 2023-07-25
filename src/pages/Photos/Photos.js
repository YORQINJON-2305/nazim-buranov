import { useEffect, useState } from "react";
import "./photos.css";
import axios from "axios";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Photos = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/photos")
      .then(res => {
        if (res.status === 200) {
          setData(res.data.results);
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="progress-wrap">
          <Dna
            visible={true}
            height="120"
            width="120"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="photos-wrap">
          {data.length > 0 ? (
            <ul className="photos-list">
              {data?.map(item => (
                <li key={item.id} className="photos-item">
                  <img
                    className="photos-img"
                    src={item.picture}
                    alt={item.title}
                  />
                  <Link className="photos-link" to={`${item.id}`}>
                    <Button
                      variant="outlined"
                      onClick={() => window.scrollTo(0, 500)}
                      style={{ color: "#fff", borderColor: "#fff" }}>
                      Batafsil
                    </Button>
                  </Link>
                  <div className="photos-item-inner"></div>
                </li>
              ))}
            </ul>
          ) : (
            <h3 className="post-no-data-text">Rasmlar mavjud emas!</h3>
          )}
          <div className="author-wrap">
            <UserInfo />
            <TopButton />
          </div>
        </div>
      )}
    </>
  );
};
