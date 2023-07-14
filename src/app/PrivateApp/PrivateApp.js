import "./private-app.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { News } from "../../pages/Admin/News/News";
import { Articles } from "../../pages/Admin/Articles/Articles";
import { ScientificArticles } from "../../pages/Admin/ScientificArticles/ScientificArticles";
import { Stories } from "../../pages/Admin/Stories/Stories";
import { Magazines } from "../../pages/Admin/Magazines/Magazines";
import { Books } from "../../pages/Admin/Books/Books";
import { ToastContainer } from "react-toastify";
import { Home } from "../../pages/Admin/Home/Home";
import { Videos } from "../../pages/Admin/Videos/Videos";
import { Certificates } from "../../pages/Admin/Certificates/Certificates";
import { Photos } from "../../pages/Admin/Photos/Photos";
import { AddPost } from "../../components/AddPost/AddPost";
import { AddPostsPage } from "../../components/AddPostPage/AddPostsPage";
import { AddVideo } from "../../components/AddVideo/AddVideo";
import { AddCertificates } from "../../components/AddCertificate/AddCertificate";
import { AddBook } from "../../components/AddBook/AddBook";

export const PrivateApp = () => {
  return (
    <div>
      <Sidebar />

      <div className="private-home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Yangiliklar" element={<News />} />
          <Route path="/Maqolalar" element={<Articles />} />
          <Route path="/Ilmiy_Maqolalar" element={<ScientificArticles />} />
          <Route path="/Hikoyalar" element={<Stories />} />
          <Route path="/Jurnallar" element={<Magazines />} />
          <Route path="/Kitoblar" element={<Books />} />
          <Route path="/Videolar" element={<Videos />} />
          <Route path="/Foto_lavhalar" element={<Photos />} />
          <Route path="/Sertifikatlar" element={<Certificates />} />
          <Route path="/add_post" element={<AddPost />} />
          <Route path="/xabar_qo'shish" element={<AddPostsPage />} />
          <Route path="/video_qo'shish" element={<AddVideo />} />
          <Route path="/kitob_qo'shish" element={<AddBook />} />
          <Route path="/sertifikat_qo'shish" element={<AddCertificates />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
