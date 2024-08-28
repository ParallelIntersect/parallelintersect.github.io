// import { Image } from "astro:assets";
// import {
//   getEntryBySlug,
//   type CollectionEntry,
//   getCollection,
// } from "astro:content";
// // import images from '../content/posts/'

// type Props = {
//   blog: CollectionEntry<"posts">;
// };

// const Post = () => {
//   // const blog = await getCollection('blog')
//   const { blog } = Astro.props;

//   return (
//     <article className="bg-gray-500 flex flex-col p-4 items-center m-5 border border-gray-950 rounded-lg">
//       <a href={`blog/${blog.slug}`}>
//         <Image
//           src={blog.data.image.src}
//           width={300}
//           height={300 / 1.5}
//           alt={blog.data.image.alt}
//           format="webp"
//           className="rounded-lg"
//         />
//       </a>
//       <a href={`blog/${blog.slug}`}>
//         <h2 className="text-2xl font-bold m-2">{blog.data.title}</h2>
//       </a>
//       <p className="mx-5 line-clamp-3">{blog.body}</p>
//     </article>
//   );
// };
