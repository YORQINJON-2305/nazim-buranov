import axios from "axios";
import "./news.css";
import { useEffect, useState } from "react";
import { BlogList } from "../../components/BlogList/BlogList";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";

export const News = () => {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/news/")
			.then((res) => setNewsData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='news-wrap'>
			{newsData?.length !== 0 ? (
				<div className='news-info-wrap'>
					<ul>
						{newsData.map((item) => (
							<BlogList key={item.id} data={item} />
						))}
					</ul>
					<div>
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
		</div>
	);
};
