import { Dna } from "react-loader-spinner";
import { TopButton } from "../../components/TopButton/TopButton";
import { UserInfo } from "../../components/userInfo/UserInfo";
import "./books.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

export const Books = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/books")
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
        <div className="books-info-wrap">
          {data.length > 0 ? (
            <ul className="books-list">
              {data.map(item => (
                <li key={item.id} className="books-item">
                  <div>
                    <h3 className="books-title">{item.title}</h3>
                    <p className="books-descr">{item.text}</p>
                    <strong className="books-author">
                      Muallif:{" "}
                      <span className="books-author-name">{item.author}</span>
                    </strong>
                  </div>
                  <a
                    href="/"
                    download={item.file}
                    style={{ textDecoration: "none" }}>
                    <Button variant="contained" className="books-download-btn">
                      Yuklab olish
                      <FaDownload
                        style={{ marginLeft: "10px", marginTop: "-3px" }}
                      />
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <h3 className="post-no-data-text">Kitoblar mavjud emas!</h3>
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
