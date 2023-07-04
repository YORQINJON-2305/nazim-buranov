import { useEffect, useState } from "react";
import { BlogList } from "../../components/BlogList/BlogList";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { TopButton } from "../../components/TopButton/TopButton";
import { Dna } from "react-loader-spinner";
import axios from "axios";

export const Magazines = () => {
	const [magazinesData, setMagazinesData] = useState([]);

	useEffect(() => {
		axios
			.get("https://nazimburanov.uz/magazines")
			.then((res) => setMagazinesData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='news-wrap'>
			{magazinesData?.length !== 0 ? (
				<div className='news-info-wrap'>
					<ul className="blog-list">
						{magazinesData.map((item) => (
							<BlogList key={item.id} data={item} />
						))}
					</ul>
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
		</div>
	);
};
