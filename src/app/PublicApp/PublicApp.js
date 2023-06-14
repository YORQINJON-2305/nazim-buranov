import "./publicApp.css";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import { Home } from "../../pages/Home/Home";
import { News } from "../../pages/News/News";
import { Articles } from "../../pages/Articles/Articles";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SingleNews } from "../../components/SingleNews/SingleNew";
import { SingleArticles } from "../../components/SingleArticles/SingleArticles";

export const PublicApp = () => {
	return (
		<div className='home'>
			<Header />
			<Hero />
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sertificats' element='Sertifikatlar' />
					<Route path='/videos' element='Videolar' />
					<Route path='/photos' element='Fotogalereya' />
					<Route path='/Yangiliklar' element={<News />} />
					<Route path='/Yangiliklar/:id' element={<SingleNews />} />
					<Route path='/maqolalar/:id' element={<SingleArticles />} />
					<Route path='/maqolalar' element={<Articles />} />
					<Route path='/ilmiy-maqolalar' element='<h1>Ilmiy maqolalar<h1/>' />
					<Route path="/she'riyat" element={"<h1>She'riyat<h1/>"} />
					<Route path='/hikoyalar' element={"<h1>Hikoyalar<h1/>"} />
					<Route path='/jurnallar' element={"<h1>Jurnallar<h1/>"} />
					<Route path='/kitoblar' element={"<h1>Kitoblar<h1/>"} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};
