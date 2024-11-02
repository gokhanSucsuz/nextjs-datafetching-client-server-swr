"use client";
import SkeletonComp from "@/components/Skeleton";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Home() {
	const [datas, setDatas] = useState<any[]>([]);
	const [isLoading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [filteredDatas, setFilteredDatas]=useState(datas)

	useEffect(() => {
		fetch("/api").then(res => res.json()).then(data => {
			setDatas(data);
			setLoading(false);
		});
	}, []);
	useEffect(() => {
		setFilteredDatas(datas.filter((data)=>data.title.toLowerCase().includes(search.toLowerCase())))
	},[search, datas])
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	if (isLoading) return (
    <SkeletonComp/>
  )
	if (!datas) return <p>No profile data</p>;
	return (
		<div>
			<div className="flex gap-2 p-4 max-w-md">
				<Input
					placeholder="Search"
					value={search}
					onChange={handleSearch}
				/>
			</div>
			{filteredDatas.map((data, index) =>
				<Card key={index}>
					<CardHeader>
						<CardTitle>
							{data?.title}
						</CardTitle>
						<CardDescription>
							{data.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>
							{data.content}
						</p>
					</CardContent>
					<CardFooter>
						<p>
							{data.footer}
						</p>
					</CardFooter>
				</Card>
			)}
		</div>
	);
}
