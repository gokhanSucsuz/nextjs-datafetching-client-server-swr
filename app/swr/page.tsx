"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());
export default function SWR() {
	const { data: datas, error } = useSWR("/api", fetcher);

	if (error) return <div>Failed to load</div>;
	if (!datas) return <div>Loading...</div>;

	if (!datas) return <p>No profile data</p>;
	return (
		<div>
			{datas.map((data: any, index: number) =>
				<Card key={index}>
					<CardHeader>
						<CardTitle>
							{data.title}
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
