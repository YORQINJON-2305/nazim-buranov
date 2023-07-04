import "./hero.css";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='my-container'>
				<div className='hero-inner'>
					<h1 className='site-title'>Nazim Buranov</h1>
					<p className='hero-descr'>
						Ilmiy izlanishlar, qo'llanmalar, ma'ruzalar
					</p>
					<ul className='hero-social-list'>
						<li className='hero-social-link-item'>
							<a
								className='hero-social-link'
								href='https://www.facebook.com/profile.php?id=100025366373428'
								target='blank'
							>
								<FaFacebookSquare />
							</a>
						</li>
						<li className='hero-social-link-item'>
							<a
								className='hero-social-link'
								href='https://www.instagram.com/nazim.buranov/'
								target='blank'
							>
								<GrInstagram />
							</a>
						</li>
						<li className='hero-social-link-item'>
							<a
								className='hero-social-link'
								href='https://t.me/NazimNavo'
								target='blank'
							>
								<FaTelegramPlane />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
