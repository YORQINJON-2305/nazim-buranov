import Skeleton from "@mui/material/Skeleton";
import "./skeleton-small.css";

export const SkeletonEdit = () => {
	return (
		<ul className='skeleton-list'>
			<li className='skeleton-item'>
				<Skeleton variant='rectangular' width={300} height={200} />
				<Skeleton />
				<Skeleton width='60%' />
			</li>
			<li className='skeleton-item'>
				<Skeleton variant='rectangular' width={300} height={200} />
				<Skeleton />
				<Skeleton width='60%' />
			</li>
			<li className='skeleton-item'>
				<Skeleton variant='rectangular' width={300} height={200} />
				<Skeleton />
				<Skeleton width='60%' />
			</li>
		</ul>
	);
};
