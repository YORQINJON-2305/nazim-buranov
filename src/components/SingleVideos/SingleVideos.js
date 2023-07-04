import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import { UserInfo } from "../userInfo/UserInfo";
import { TopButton } from "../TopButton/TopButton";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";

// import required modules
import ReactPlayer from "react-player";

export const SingleVideos = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nazimburanov.uz/videos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);


  const { title, text, video } = post;

  return (
    <>
      {post.length !== 0 ? (
        <div className='single-wrap'>
          <div className='single-info'>
            <ReactPlayer width="100%" height="500px" style={{ marginBottom: "15px" }} url={video} controls />
            <h2 className='single-title'>{title}</h2>
            <p className='single-descr'>{text}</p>
            <div className='back-btn-wrap'>
              <Button
                className='back-btn'
                variant='outlined'
                onClick={() => window.history.back()}
              >
                <TiArrowBack style={{ fontSize: "25px" }} />
                Orqaga
              </Button>
            </div>
          </div>
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
    </>
  );
};
