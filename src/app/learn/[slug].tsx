// ---
// import Layout from '../../layouts/Layout.astro'
// import {Image} from 'astro:assets';
// import {getCollection} from 'astro:content';
// import type {CollectionEntry} from 'astro:content';

// export  const getStaticPaths =  ( async() => {
//     const posts= await getCollection('posts');
//     const paths = posts.map(post =>{
//         return {params:{
//             slug:post.slug
//         },props:{post}}
//     })

//     return paths;
// })

// type Props={
//     post: CollectionEntry<"posts">;
// }

// const {post}= Astro.props;
// const {Content} = await post.render()

// ---

// <Layout title={post.data.title}>

//     <h1 className='text-5xl m-5 font-bold'>{post.data.title}</h1>
//     <Image src={post.data.image} alt={post.data.title} format="webp" width={600} height={600/2} className='rounded' />

//     <div className='prose prose-2xl overflow-visible relative mb-20'>
//     <Content/>
//     </div>
// </Layout>
