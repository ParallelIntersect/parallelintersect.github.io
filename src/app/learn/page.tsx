import Image from "next/image";
import { getAllPostFile, getMetaData } from "./BlogEngine";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
    const postFiles = getAllPostFile();
    var post_list_html: any = [];
    postFiles.forEach(postFile => {
        const d = getMetaData(postFile);
        post_list_html.push(
            <PostCard key={d.slug} data={d} />
        )
    })

    return (
        <div className="p-1">
            <NavBar title="Learn" />

            <h1 className="text-4xl font-bold text-center">Learn</h1>
            <div className="text-center bg-slate-600 p-20">

                <p>Educate yourself on different topics for FREE.</p>
                <button className="bg-black text-blue-50 rounded-lg p-2">Browse Our Courses</button>
            </div>

            <br />
            <div className="sm:grid grid-cols-2 gap-4 md:grid-cols-3 flex flex-col">{post_list_html}</div>
        </div>
    )
}



function PostCard({ data }: any) {
    const url = "/blog/" + data.slug;
    return (
        <Link href={url} prefetch={true}>
            <div className="shadow-md p-2 rounded-lg w-full">
                <div className="aspect-video relative">
                    <Image className="rounded-lg" src={data.thumbnail} fill={true} alt="featured" />
                </div>
                <div className="p-2">
                    <p className="text-lg font-medium">{data.title}
                    </p>
                    <p className="text-base font-light">{data.description}</p>
                </div>
            </div>

        </Link>
    )
}
