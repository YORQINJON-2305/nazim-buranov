import { useEffect, useState } from "react";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import axios from "axios";
import "./videos.css"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const Videos = () => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/videos")
      .then((res) => setVideosData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(videosData);

  return (
    <div className='videos-head'>
      {videosData?.length !== 0 ? (
        <div className='videos-info-wrap'>
          <ul className="videos-list">
            {videosData.map((item) => (
              <li className="videos-item">
                <div className="videos-wrap">
                  <ReactPlayer width="100%" style={{ maxWidth: "600px" }} url={item.video} controls />
                </div>
                <div className="videos-info">
                  <h3 className="videos-title">{item.title}</h3>
                  <p className="videos-descr">{item.text?.split(" ").slice(0, 30).join(" ")}...</p>
                  <Button
                    className='blog-list-more-btn'
                    variant='outlined'
                    onClick={() => window.scrollTo(0, 500)}
                  >
                    <Link className='blog-list-more-link' to={`/Videolar/${item.id}`}>
                      Batafsil
                    </Link>
                  </Button>
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
  );
};
