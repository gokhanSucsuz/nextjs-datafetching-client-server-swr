"ues server"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
export default async function Home() {
    const res = await fetch("http://localhost:3000/api")
    const datas = await res.json()
	return (
		<div>
			{datas.map((data:any, index:number) =>
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
