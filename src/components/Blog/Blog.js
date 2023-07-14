import { Link } from "react-router-dom";
import "./blog.css";
import { Button } from "@mui/material";

export const Blog = ({ data }) => {

	const { category, picture, title, text, id, created_at } = data
	const splitText = text?.split(" ").slice(0, 30).join(" ");


	return (
		<>
			{Object.keys(data).length > 0 ? (
				<div className='blog-card'>
					<img className='blog-img' src={picture} alt='' />
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
						<span className='blog-time'>{created_at?.slice(0, 10)}</span>
					</div>
				</div>
			) : ""}
		</>
	);
};
