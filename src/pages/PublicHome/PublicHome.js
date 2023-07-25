import { useEffect, useState } from "react";
import "./public-home.css";
import axios from "axios";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Banner } from "../../components/Banner/Banner";
import { Blog } from "../../components/Blog/Blog";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import { SkeletonEdit } from "../../components/SkeletonSmall/SkeletonSmall";

export const PublicHome = () => {
  const [loading, setLoading] = useState(true);
  const [articlesData, setArticlesData] = useState([]);
  const [scientificArticle, setScientificArticle] = useState([]);
  const [relationsData, setRelationsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [storiesData, setStoriesData] = useState({});

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/articles/")
      .then(res => {
        if (res.status === 200) {
          setArticlesData(res.data.results[res.data.results.length - 1]);
          setLoading(false);
        } else {
          setArticlesData(null);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/scientific_articles/")
      .then(res => {
        if (res.status === 200) {
          setScientificArticle(res.data.results[res.data.results.length - 1]);
          setLoading(false);
        } else {
          setArticlesData(null);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/stories/")
      .then(res => {
        if (res.status === 200) {
          setStoriesData(res.data.results[res.data.results.length - 1]);
          setLoading(false);
        } else {
          setArticlesData(null);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/international_relations/")
      .then(res => {
        if (res.status === 200) {
          setRelationsData(res.data.results.slice(-3));
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/news/")
      .then(res => setNewsData(res.data.results.slice(-3)))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home-wrapper">
        <div className="author-wrap">
          <UserInfo />
          <TopButton />
        </div>

        <div className="home-info-wrap">
          {articlesData ? <Blog data={articlesData} /> : ""}
          {loading ? (
            <SkeletonEdit />
          ) : relationsData?.length > 0 ? (
            <>
              <h2 className="recommendation-category-text">
                Xalqaro munosabatlar
              </h2>
              <ul className="recommendation-list">
                {relationsData?.map(item => (
                  <Recommendation key={item.id} data={item} />
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
          {scientificArticle ? <Blog data={scientificArticle} /> : ""}
          {loading ? (
            <SkeletonEdit />
          ) : relationsData?.length > 0 ? (
            <>
              <h2 className="recommendation-category-text">
                Xalqaro munosabatlar
              </h2>
              <ul className="recommendation-list">
                {relationsData?.map(item => (
                  <Recommendation key={item.id} data={item} />
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
          {storiesData ? <Blog data={storiesData} /> : ""}
          {loading ? (
            <SkeletonEdit />
          ) : newsData?.length > 0 ? (
            <>
              <h2 className="recommendation-category-text">Yangiliklar</h2>
              <ul className="recommendation-list">
                {newsData?.map(item => (
                  <Recommendation key={item.id} data={item} />
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
