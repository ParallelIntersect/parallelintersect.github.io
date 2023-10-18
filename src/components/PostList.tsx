import type { CollectionEntry } from "astro:content";
import Post from "./Post.tsx";
type Props = {
  blog: CollectionEntry<"posts">[];
};

const PostList = () => {
  const { blog } = Astro.props;
  return (
    <div className="text-gray-900 flex flex-wrap mb-auto items-center justify-center m-2">
      {blog.map((post) => (
        <Post blog={post} />
      ))}
    </div>
  );
};
