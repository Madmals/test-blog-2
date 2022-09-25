import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head'
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const components = { Image };

export default function Post({ postData,result}) {
    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>

            {/* Keep the existing code here */}
            <h1 className='utilStyles.headingXl'>
                {postData.title}
            </h1>
            <br />
            <Date dateString={postData.date} />
            <br />
            <MDXRemote {...result} components={components} />;
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log(params.id)
    const markdown = `

<Image src="/image/${params.id}.jpg" alt="alt text" width={600} height={300} />
`;

    const result = await serialize(markdown);

    return {
        props: {
            postData,
            result
        },
    };


}