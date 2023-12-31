import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Pagination } from "../../../components/Pagination/Pagination";
import { AdminVideoCard } from "../../../components/AdminVideoCard/AdminVideoCard";

export const Videos = () => {
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
        `https://nazimburanov.uz/videos/?page=${pageNumber}`
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
          <h2 className="posts-headline">Videolar</h2>
          {results?.length > 0 ? (
            <div>
              <ul className="posts-list">
                {results?.map(item => (
                  <AdminVideoCard
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
              <h3>Videolar yoq</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
