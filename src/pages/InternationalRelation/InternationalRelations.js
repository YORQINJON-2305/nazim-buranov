import { useEffect, useState } from "react";
import { BlogList } from "../../components/BlogList/BlogList";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import axios from "axios";

export const InternationalRelations = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/international_relations/")
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
    <div className="news-wrap">
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
        <div className="news-info-wrap">
          {data.length > 0 ? (
            <ul className="blog-list">
              {data.map(item => (
                <BlogList key={item.id} data={item} />
              ))}
            </ul>
          ) : (
            <h3 className="post-no-data-text">Xabarlar mavjud emas!</h3>
          )}
          <div className="author-wrap">
            <UserInfo />
            <TopButton />
          </div>
        </div>
      )}
    </div>
  );
};
