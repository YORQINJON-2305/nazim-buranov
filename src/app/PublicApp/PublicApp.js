import "./public-app.css";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import { PublicHome } from "../../pages/PublicHome/PublicHome";
import { News } from "../../pages/News/News";
import { Articles } from "../../pages/Articles/Articles";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SingleNews } from "../../components/SingleNews/SingleNew";
import { SingleArticles } from "../../components/SingleArticles/SingleArticles";
import { ScientificArticles } from "../../pages/ScientificArticles/ScientificArticles";
import { SingleScientificArticles } from "../../components/SingleScientificArticles/SingleScientificArticles";
import { Story } from "../../pages/Story/Story";
import { SingleStory } from "../../components/SingleStory/SingleStory";
import { Magazines } from "../../pages/Magazines/Magazines";
import { SingleMagazines } from "../../components/SingleMagazines/SingleMagazines";
import { Books } from "../../pages/Books/Books";
import { SingleInternationRelations } from "../../components/SingleInternationalRelations/SingleInternationRelations";
import { AboutAuthor } from "../../components/AboutAuthor/AboutAuthor";
import { Certificates } from "../../pages/Certificates/Certificates";
import { Photos } from "../../pages/Photos/Photos";
import { SinglePhoto } from "../../components/SinglePhoto/SinglePhoto";
import { Videos } from "../../pages/Videos/Videos";
import { SingleVideos } from "../../components/SingleVideos/SingleVideos";
import { Login } from "../../pages/Login/Login";
import { InternationalRelations } from "../../pages/InternationalRelation/InternationalRelations";

export const PublicApp = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Navbar />
      <div className="my-container">
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/Sertifikatlar" element={<Certificates />} />
          <Route path="/Videolar" element={<Videos />} />
          <Route path="/Videolar/:id" element={<SingleVideos />} />
          <Route path="/Foto_lavhalar" element={<Photos />} />
          <Route path="/Foto_lavhalar/:id" element={<SinglePhoto />} />
          <Route path="/Yangiliklar" element={<News />} />
          <Route path="/Yangiliklar/:id" element={<SingleNews />} />
          <Route path="/Maqolalar" element={<Articles />} />
          <Route path="/Maqolalar/:id" element={<SingleArticles />} />
          <Route path="/Ilmiy_Maqolalar" element={<ScientificArticles />} />
          <Route
            path="/Ilmiy_Maqolalar/:id"
            element={<SingleScientificArticles />}
          />
          <Route
            path="/Xalqaro_munosabatlar/:id"
            element={<SingleInternationRelations />}
          />
          <Route path="/Hikoyalar" element={<Story />} />
          <Route path="/Hikoyalar/:id" element={<SingleStory />} />
          <Route path="/Jurnallar" element={<Magazines />} />
          <Route path="/Jurnallar/:id" element={<SingleMagazines />} />
          <Route
            path="/Xalqaro_Munosabatlar"
            element={<InternationalRelations />}
          />
          <Route path="/kitoblar" element={<Books />} />
          <Route path="/muallif-haqida" element={<AboutAuthor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
