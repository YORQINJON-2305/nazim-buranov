import "./user-info.css";
import userPhoto from "../../assets/images/nazim.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const UserInfo = () => {
	return (
		<div className='user-info-card'>
			<img className='user-img' src={userPhoto} alt="User's img" />
			<h2 className='username-text'>Nazim Buranov</h2>
			<p className='user-descr'>
				Jurnalist, bloger, diplomat, professor, filologiya fanlari doktori
			</p>
			<Button
				className='user-info-btn'
				variant='outlined'
				onClick={() => window.scrollTo(0, 500)}
			>
				<Link className='user-info-link' to='/muallif-haqida'>
					Batafsil
				</Link>
			</Button>
		</div>
	);
};
