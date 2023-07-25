import { useEffect, useState } from "react";
import "./certificates.css";
import axios from "axios";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import { Button } from "@mui/material";

export const Certificates = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/certificates")
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
        <div className="certificates-wrap">
          {data.length > 0 ? (
            <div className="certificates-wrap">
              <div className="certificates-info-wrap">
                <h2 className="certificates-title">Sertifikatlar</h2>
                <ul className="certificates-list">
                  {data?.map(item => (
                    <li key={item.id} className="certificates-item">
                      <div className="certificates-img-wrap">
                        <img
                          className="certificates-img"
                          src={item.picture}
                          alt={item.text}
                        />
                        <div className="certificates-dowload-wrap">
                          {item.file ? (
                            <a href="/" download={item.file}>
                              <Button variant="contained">Yuklab olish</Button>
                            </a>
                          ) : (
                            <p className="certificates-no-file-text">
                              Fayl mavjud emas!
                            </p>
                          )}
                        </div>
                        <div className="certificates-overlay"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <h3 className="post-no-data-text">Sertifikatlar mavjud emas!</h3>
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
