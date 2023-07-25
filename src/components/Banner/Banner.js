import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Dna } from "react-loader-spinner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination } from "swiper";
import "./banner.css";

import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Banner = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/news/")
      .then(res => {
        if (res.status === 200) {
          setNewsData(res.data.results);
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
        <div className="banner">
          {newsData?.length > 0 ? (
            <Swiper
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              effect={"fade"}
              modules={[EffectFade, Pagination]}
              className="banner-swiper">
              {newsData?.map(item => (
                <SwiperSlide key={item.id}>
                  <img
                    className="banner-img"
                    src={item.picture}
                    alt={item.title}
                  />
                  <div className="banner-info-wrap">
                    <h1 className="banner-title">{item.title}</h1>
                    <Button className="banner-more-btn" variant="contained">
                      <Link
                        className="banner-more-link"
                        to={`/${item.category}/${item.id}`}>
                        Batafsil
                      </Link>
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};
