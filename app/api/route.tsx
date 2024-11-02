import { NextRequest, NextResponse } from "next/server";

const datas = [
	{
		title: "Title 1",
		description: "Description 1",
		content: "Content 1"
	},
	{
		title: "Title 2",
		description: "Description 2",
		content: "Content 2"
	},
	{
		title: "Title 3",
		description: "Description 3",
		content: "Content 3"
	},
	{
		title: "Title 4",
		description: "Description 4",
		content: "Content 4"
	},
	{
		title: "Title 5",
		description: "Description 5",
		content: "Content 5"
	}
];

export function GET(request: NextRequest, response: NextResponse) {
	return NextResponse.json(datas);
}
