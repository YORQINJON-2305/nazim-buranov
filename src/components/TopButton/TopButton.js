import "./top-button.css";
import { AiOutlineArrowUp } from "react-icons/ai";

export const TopButton = () => {
	const handleScrollTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button className='site-top-link' onClick={handleScrollTop}>
			<span className='top-link-icon'>
				<AiOutlineArrowUp />
			</span>
		</button>
	);
};
