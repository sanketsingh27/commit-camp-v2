import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import { allReactjs } from '.contentlayer/data';
import type { Reactjs } from '.contentlayer/types';

export default function Post({ post }: { post: Reactjs; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allReactjs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allReactjs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
