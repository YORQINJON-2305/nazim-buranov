import axios from "axios"
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material"
import { Pagination } from "../../../components/Pagination/Pagination";
import { AdminPostCard } from "../../../components/AdminPostCard/AdminPostCard";

export const Magazines = () => {

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
        `https://nazimburanov.uz/magazines/?page=${pageNumber}`
      );
      if (res.status === 200) {
        setData(res.data);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, []);

  return (
    <div className='my-container'>
      {
        loading ? (<div className="loader-wrap"><CircularProgress size={80} /></div>) :
          (<div className="posts-wrap">
            <h2 className="posts-headline">Jurnallar</h2>
            {results?.length > 0 ? (<div>
              <ul className="posts-list">
                {results?.map(item =>
                  <AdminPostCard key={item.id} data={item} fetchData={fetchData} />
                )}
              </ul>
              <Pagination totalPage={total_pages} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchData={fetchData} />
            </div>) : (<div className="no-data-wrap"><h3>Ma'lumotlar yoq</h3></div>)}
          </div>)
      }
    </div>
  )
}
