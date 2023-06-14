import "./skeleton-large.css";
import { Skeleton } from "@mui/material";

export const SkeletonLarge = () => {
	return (
		<div className='skeleton-wrap-large'>
			<Skeleton
				width={350}
				height={300}
				variant='rectangular'
				style={{ marginRight: "20px" }}
			/>
			<div className='skeleton-large-text-wrap'>
				<Skeleton width='20%' />
				<Skeleton width='70%' height={40} />
				<Skeleton width='50%' height={40} style={{ marginBottom: "30px" }} />
				<Skeleton width='100%' />
				<Skeleton width='100%' />
				<Skeleton width='100%' />
			</div>
		</div>
	);
};
