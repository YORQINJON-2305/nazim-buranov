import { Skeleton } from "@mui/material";
import "./skeleton-large.css";

export const SkeletonLarge = () => {
	return (
		<div className='skeleton-large-wrap'>
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
