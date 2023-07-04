import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Banner } from "../../components/Banner/Banner";
import { Blog } from "../../components/Blog/Blog";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import { SkeletonEdit } from "../../components/SkeletonSmall/SkeletonSmall";
import { SkeletonLarge } from "../../components/SkeletonLarge/SkeletonLarge";

export const Home = () => {
	const [articlesData, setArticlesData] = useState([]);
	const [scientificArticle, setScientificArticle] = useState([]);
	const [relationsData, setRelationsData] = useState([]);
	const [newsData, setNewsData] = useState([]);
	const [storiesData, setStoriesData] = useState([]);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/articles/")
			.then((res) =>
				setArticlesData(res.data.results[res.data.results.length - 1])
			)
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/scientific_articles/")
			.then((res) =>
				setScientificArticle(res.data.results[res.data.results.length - 1])
			)
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/stories/")
			.then((res) =>
				setStoriesData(res.data.results[res.data.results.length - 1])
			)
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/international_relations/")
			.then((res) => setRelationsData(res.data.results.slice(-3)))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/news/")
			.then((res) => setNewsData(res.data.results.slice(-3)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Banner />
			<div className='home-wrapper'>
				<div className="author-wrap">
					<UserInfo />
					<TopButton />
				</div>
				<div className='home-info-wrap'>
					{articlesData?.length !== 0 ? (
						<Blog
							category={articlesData.category}
							img={articlesData.picture}
							title={articlesData.title}
							text={articlesData.text}
							id={articlesData.id}
							time={articlesData.created_at}
						/>
					) : (
						<SkeletonLarge />
					)}
					{
						<>
							<h2 className='recommendation-category-text'>
								Xalqaro munosabatlar
							</h2>

							{relationsData?.length !== 0 ? (
								<ul className='recommendation-list'>
									{relationsData?.map((item) => (
										<Recommendation key={item.id} data={item} />
									))}
								</ul>
							) : (
								<SkeletonEdit />
							)}
						</>
					}
					{scientificArticle?.length !== 0 ? (
						<Blog
							category={scientificArticle.category}
							img={scientificArticle.picture}
							title={scientificArticle.title}
							text={scientificArticle.text}
							id={scientificArticle.id}
							time={scientificArticle.created_at}
						/>
					) : (
						<SkeletonLarge />
					)}
					{
						<>
							<h2 className='recommendation-category-text'>Yangiliklar</h2>
							{relationsData?.length !== 0 ? (
								<ul className='recommendation-list'>
									{newsData?.map((item) => (
										<Recommendation key={item.id} data={item} />
									))}
								</ul>
							) : (
								<SkeletonEdit />
							)}
						</>
					}
					{storiesData?.length !== 0 ? (
						<Blog
							category={storiesData.category}
							img={storiesData.picture}
							title={storiesData.title}
							text={storiesData.text}
							id={storiesData.id}
							time={storiesData.created_at}
						/>
					) : (
						<SkeletonLarge />
					)}
				</div>
			</div>
		</div>
	);
};
