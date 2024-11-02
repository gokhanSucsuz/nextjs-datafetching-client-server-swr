import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonComp = () => {
	return (
		<div className="flex flex-col p-5 space-y-3">
			<Skeleton className="h-4 w-[250px] rounded-xl" />
			<Skeleton className="h-4 w-[250px] rounded-xl" />
			<Skeleton className="h-4 w-[250px] rounded-xl" />
		</div>
	);
};

export default SkeletonComp;
