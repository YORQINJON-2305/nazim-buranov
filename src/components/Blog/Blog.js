import { Link } from "react-router-dom";
import "./blog.css";
import { Button } from "@mui/material";

export const Blog = ({ category, img, title, text, id, time }) => {
	const splitText = text?.split(" ").slice(0, 30).join(" ");

	return (
		<div className='blog-card'>
			<img className='blog-img' src={img} alt='' />
			<div className='blog-info'>
				<Link
					to={category}
					className='blog-category-text'
					onClick={() => window.scrollTo(0, 500)}
				>
					{category}
				</Link>
				<h3 className='blog-title'>{title}</h3>
				<p className='blog-descr'>{splitText}...</p>
				<Button
					className='blog-more-btn'
					variant='outlined'
					onClick={() => window.scrollTo(0, 500)}
				>
					<Link className='blog-more-link' to={`/${category}/${id}`}>
						Batafsil
					</Link>
				</Button>
				<span className='blog-time'>{time?.slice(0, 10)}</span>
			</div>
		</div>
	);
};
