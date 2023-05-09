import React from 'react';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';
import BlogLayout from '@/layouts/blogLayout';

async function getData() {
    const filePath = path.join(process.cwd(), '/src/data', 'data.json');
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData.toString());

    return data;
}

export const getStaticProps = async (context) => {
    const blogID = context.params?.slugBlog;
    const data = await getData();
    const foundBlog = data.blogs.find((blog) => blogID === blog.slug);
  
    if (!foundBlog) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      blogData: foundBlog
    }
  }
}

export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.blogs.map((blog) => ({ params: { slugBlog: blog.slug }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

function projectPage({ blogData, hasError }) {
      const router = useRouter();
    
      if (hasError) {
        return <h1>Error - please try another parameter</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }
    
      return (
        <BlogLayout>
            <div className='m-12 flex flex-col'>
                <h1 className='text-4xl my-4'>{blogData.title}</h1>
                <span className="block h-[0.2px] bg-gray-400 my-10 rounded-full"></span>
                <div>{[blogData.text].map((text) => {
                    return (
                        <div key={text.id} className='flex flex-col gap-6 text-md mt-12'>
                            <p>1. {blogData.text.p1}</p>
                            <p>2. {blogData.text.p2}</p>
                            <p>3. {blogData.text.p3}</p>
                            <p>4. {blogData.text.p4}</p>
                            <p>5. {blogData.text.p5}</p>
                            <p>6. {blogData.text.p6}</p>
                        </div>
                    )
                })}</div>
            </div>
        </BlogLayout>
      )
    }
    
    export default projectPage;