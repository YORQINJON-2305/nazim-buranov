import { useEffect, useState } from "react";
import "./certificates.css"
import axios from "axios";
import { Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";

export const Certificates = () => {
  const [certificatsData, setCertificatsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nazimburanov.uz/certificates")
      .then((res) => setCertificatsData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {certificatsData?.length !== 0 ? (
        <div className='certificates-wrap'>
          <div className="certificates-info-wrap">
            <h2 className="certificates-title">Sertifikatlar</h2>
            <ul className='certificates-list'>
              {certificatsData.map((item) => (
                <li className="certificates-item">
                  <img className="certificates-img" src={item.picture} alt={item.text} />
                </li>
              ))}
            </ul>
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
}
