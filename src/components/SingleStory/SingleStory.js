import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import { UserInfo } from "../userInfo/UserInfo";
import { TopButton } from "../TopButton/TopButton";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const SingleStory = () => {
	const [post, setPost] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://nazimburanov.uz/stories/${id}`)
			.then((res) => {
				if (res.status === 200) {
					setPost(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, [id]);

	const pictureArr = [];

	const { title, picture, picture2, picture3, text, author, created_at } = post;

	const checkImg = () => {
		if (picture) {
			pictureArr.push(picture);
		} else {
			return pictureArr;
		}

		if (picture2) {
			pictureArr.push(picture2);
		} else {
			return pictureArr;
		}

		if (picture3) {
			pictureArr.push(picture3);
		} else {
			return pictureArr;
		}
	};

	checkImg();

	console.log(pictureArr);

	const trimDate = created_at?.slice(0, 10);

	return (
		<div>
			{post.length !== 0 ? (
				<div className='single-wrap'>
					<div className='single-info'>
						<Swiper
							effect={"coverflow"}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={"auto"}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
							className='mySwiper'
						>
							{pictureArr?.map((item) => (
								<SwiperSlide key={item} style={{ background: "transparent" }}>
									<img className='single-img' src={item} alt={title} />
								</SwiperSlide>
							))}
						</Swiper>
						<h2 className='single-title'>{title}</h2>
						<p className='single-descr'>{text}</p>
						<strong className='single-author-name'>{author}</strong>
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
