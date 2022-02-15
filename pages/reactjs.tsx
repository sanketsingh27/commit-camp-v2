import { useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allReactjs } from '.contentlayer/data';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog – Sanket Singh"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          React JS Fundamentals
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`React is the most popular Frontend development library.
          In this series we will learn the basics of react by making 5 small 
          projects and and a big project to solidify all the concepts`}
        </p>

        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          React JS Fundamentals - Curriculum
        </h3>
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  console.log('allBlog =', allReactjs.length);
  const posts = allReactjs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );
  return { props: { posts } };
}
