import "./user-info.css";
import userPhoto from "../../assets/images/nazim.jpg";
import { Button } from "@mui/material";

export const UserInfo = () => {
	return (
		<div className='user-info-card'>
			<img className='user-img' src={userPhoto} alt="User's img" />
			<h2 className='username-text'>Nazim Buranov</h2>
			<p className='user-descr'>
				Jurnalist, bloger, diplomat, professor, filologiya fanlari doktori
			</p>
			<Button className='user-more-link' variant='outlined'>
				Batafsil
			</Button>
		</div>
	);
};
