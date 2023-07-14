import { useState } from "react";
import "./certificates.css";
import { CircularProgress } from "@mui/material";
import { Pagination } from "../../../components/Pagination/Pagination";
import { useEffect } from "react";
import axios from "axios";
import { AdminCertificatesCard } from "../../../components/AdminCertificatesCard/AdminCertificatesCard";

export const Certificates = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { total_pages, results } = data;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (pageNumber = 1) => {
    try {
      const res = await axios.get(
        `https://nazimburanov.uz/certificates/?page=${pageNumber}`
      );
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="my-container">
      {loading ? (
        <div className="loader-wrap">
          <CircularProgress size={80} />
        </div>
      ) : (
        <div className="posts-wrap">
          <h2 className="posts-headline">Sertifikatlar</h2>
          {results?.length > 0 ? (
            <div>
              <ul className="posts-list">
                {results?.map(item => (
                  <AdminCertificatesCard
                    key={item.id}
                    data={item}
                    fetchData={fetchData}
                  />
                ))}
              </ul>
              <Pagination
                totalPage={total_pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                fetchData={fetchData}
              />
            </div>
          ) : (
            <div className="no-data-wrap">
              <h3>Sertifikatlar yoq</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
