import "./blog-list.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const BlogList = ({ data }) => {
	const { category, picture, title, text, created_at, id } = data;
	const splitText = text?.split(" ").slice(0, 30).join(" ");

	return (
		<div className='container'>
			<div className='blog-list-card'>
				<img className='blog-list-img' src={picture} alt={title} />
				<div className='blog-list-info'>
					<h3 className='blog-list-title'>{title}</h3>
					<p className='blog-list-descr'>{splitText}...</p>
					<Button
						className='blog-list-more-btn'
						variant='outlined'
						onClick={() => window.scrollTo(0, 500)}
					>
						<Link className='blog-list-more-link' to={`/${category}/${id}`}>
							Batafsil
						</Link>
					</Button>
					<span className='blog-list-time'>{created_at?.slice(0, 10)}</span>
				</div>
			</div>
		</div>
	);
};
