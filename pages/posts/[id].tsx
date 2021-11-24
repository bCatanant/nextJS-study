import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData  } from '../../lib/posts'
import Date from '../../components/date'

type Props = {
  postData: {
    id: string,
    date: string,
    title: string,
    contentHtml: string
  }
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Fetch necessary data for the blog post using params.id

  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
