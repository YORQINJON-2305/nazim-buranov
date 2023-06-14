import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import { UserInfo } from "../userInfo/UserInfo";
import { TopButton } from "../TopButton/TopButton";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";

export const SingleArticles = () => {
	const [post, setPost] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://nazimburanov.uz/articles/${id}`)
			.then((res) => {
				if (res.status === 200) {
					setPost(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, [id]);

	const { title, picture, text, created_at } = post;

	const trimDate = created_at?.slice(0, 10);

	return (
		<div>
			{post.length !== 0 ? (
				<div className='single-wrap'>
					<div className='single-info'>
						<img className='single-img' src={picture} alt={title} />
						<h2 className='single-title'>{title}</h2>
						<p className='single-descr'>{text}</p>
						<p className='single-time'>{trimDate}</p>
						<div className='back-btn-wrap'>
							<Button
								className='back-btn'
								variant='outlined'
								onClick={() => window.history.back()}
							>
								<TiArrowBack style={{ fontSize: "25px" }} />
								Orqaga
							</Button>
						</div>
					</div>
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
