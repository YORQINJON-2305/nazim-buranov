import { Link } from "react-router-dom";
import "./recommendation.css";

export const Recommendation = ({ data }) => {
	const { category, title, picture, id, created_at } = data;
	const sliceTitle = title.split(" ").slice(0, 10).join(" ");
	const sliceTime = created_at?.slice(0, 10);
	return (
		<li className='recommendation-item'>
			<Link
				className='recommendation-link'
				to={`${category}/${id}`}
				onClick={() => window.scrollTo(0, 500)}
			>
				<img className='recommendation-img' src={picture} alt={title} />
				<h3 className='recommendation-title'>{sliceTitle}...</h3>
				<p className='recommendation-time'>{sliceTime}</p>
			</Link>
		</li>
	);
};
