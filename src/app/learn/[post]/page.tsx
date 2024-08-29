// import { getAllPostFile, getHTML, getMetaData } from "../BlogEngine";
// import parse from "html-react-parser";
// import Image from "next/image";


// export async function generateStaticParams() {
//     const posts = getAllPostFile();
//     var mPosts = [];
//     posts.forEach(e => {
//         mPosts.push(e.replace('.md', ''))
//     });

//     return mPosts.map((post) => ({ post: String(post) }))
// }


// export async function generateMetadata({ params }: any) {
//     const metadata = getMetaData(params.post + ".md")
//     return {
//         title: metadata.title,
//         description: metadata.description,
//         category: metadata.category,
//         keywords: String(metadata.tags).split(','),
//         alternates: { canonical: "https://parallelintersect.vercel.app/blog/" + metadata.slug },
//         openGraph: {
//             images: metadata.thumbnail,
//         }
//     }
// }

// export default function BlogPostPage({ params }: any) {
//     const postHTML = getHTML(params.post + ".md")
//     const metadata = getMetaData(params.post + ".md")

//     const tags = String(metadata.tags).split(",")
//     var TagsHTML = [];
//     tags.forEach(tag => {
//         TagsHTML.push(
//             <p>{tag}</p>
//         )
//     })
//     return (<div>
//         <h1>{metadata.title}</h1>
//         <p>{metadata.category}</p>
//         <div>
//             <Image src={metadata.thumbnail}
//                 fill={true}
//                 alt={metadata.title}
//             />
//         </div>
//         <br />
//         <article>{parse(postHTML)}</article>
//         <div>{TagsHTML}</div></div>)
// }

import { getAllPostFile, getHTML, getMetaData } from "../BlogEngine";
import parse from 'html-react-parser';
import Markdoc from "@markdoc/markdoc";
import Image from "next/image";

// export async function generateStaticParams(): Promise<string[]> {
//     const posts = getAllPostFile();

//     const mPosts: string[] = [];
//     posts.forEach((post) => {
//         mPosts.push(post.replace('.md', ''));
//     });

//     return mPosts.map((post) => { post: post.toString() });
// }
export async function generateStaticParams(): Promise<string[]> {
    const posts = getAllPostFile();

    // const mPosts = "";
    const mPosts: string[] = [];
    posts.forEach((post) => {
        mPosts.push(post.replace('.md', ''));
    });

    return mPosts.map((post) => post.toString());
}


// export default function BlogPostPage({ params }: { params: string }) {
export default function BlogPostPage({ params }: any) {
    const postHTML = getHTML(params.post + ".md");
    const metadata = getMetaData(params.post + ".md");

    const tags: any = metadata.tags.split(',');
    // const tags: any = metadata.tags
    const TagsHTML = tags.map((tag: any, index: any) => (
        <p key={index} className="bg-sky-300 rounded-full py-1 px-2 w-fit inline-block m-1">
            {tag}
        </p>
    )
    );
    return (
        <div className="max-w-4xl mx-auto p-2 ">
            <h1 className="text-3xl font-bold">{metadata.title}</h1>
            <p className="bg-emerald-300 rounded-full py-1 px-2 w-fit inline-block m-1 text-sm">
                {metadata.category}
            </p>
            <div className="aspect-video relative max-h-80 mx-auto">
                <Image
                    className="rounded-lg"
                    src={metadata.thumbnail}
                    fill={true}
                    alt={metadata.title}
                />
            </div>
            <br />

            <article className="prose prose-base max-w-4xl mx-auto prose-h1:text-lg prose-p:text-base">

                {parse(postHTML)}
                {/* {Markdoc.renderers(postHTML)} */}
            </article>
            <div className="w-fit text-sm">{TagsHTML}</div>

        </div>
    );
}
// export async function generateMetadata({ params }: { params: string }): Promise<{
export async function generateMetadata({ params }: any): Promise<{
    title: string;
    description: string;
    category: string;
    keywords: string[];
    alternates: {
        canonical: string;
    };
    openGraph: {
        images: string[];
    };
}> {
    const metadata = getMetaData(params.post + ".md");
    console.log("Hello")
    if (!metadata) {
        throw new Error('Metadata not found');
    }
    console.log(metadata.tags)



    return {
        title: metadata.title,
        description: metadata.description,
        category: metadata.category,
        // keywords: metadata.tags.split(", ")
        keywords: metadata.tags.split(",")
        ,
        alternates: {
            canonical: `https://parallelintersect.vercel.app/blog/${metadata.slug}`,
        },
        openGraph: {
            images: [metadata.thumbnail],
        },
    };
}
