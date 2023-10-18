
import Layout from "../layouts/Layout.astro";
import PostList from "../components/PostList.tsx";
import {getCollection} from 'astro:content';
const posts = await getCollection('posts')



<Layout title="Blog-PI">
    <PostList posts={posts}/>
</Layout>