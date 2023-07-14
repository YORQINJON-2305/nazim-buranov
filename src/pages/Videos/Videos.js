import { useEffect, useState } from "react";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import axios from "axios";
import "./videos.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const Videos = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/videos")
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
        <div className="videos-info-wrap">
          {data.length > 0 ? (
            <ul className="videos-list">
              {data?.map(item => (
                <li key={item.id} className="videos-item">
                  <div className="videos-wrap">
                    <ReactPlayer
                      width="100%"
                      style={{ maxWidth: "600px" }}
                      url={item.video}
                      controls
                    />
                  </div>
                  <div className="videos-info">
                    <h3 className="videos-title">{item.title}</h3>
                    <p className="videos-descr">
                      {item.text?.split(" ").slice(0, 30).join(" ")}...
                    </p>
                    <Button
                      className="blog-list-more-btn"
                      variant="outlined"
                      onClick={() => window.scrollTo(0, 500)}>
                      <Link
                        className="blog-list-more-link"
                        to={`/Videolar/${item.id}`}>
                        Batafsil
                      </Link>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h3>Xabarlar mavjud emas!</h3>
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
