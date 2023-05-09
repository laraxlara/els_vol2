import React from 'react';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';
import ServicesLayout from '@/layouts/servicesLayout';
import Service from '@/components/Service';

async function getData() {
    const filePath = path.join(process.cwd(), '/src/data', 'services.json');
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData.toString());

    return data;
}

export const getStaticProps = async (context) => {
    const serviceID = context.params?.serviceSlug;
    const data = await getData();
    const foundservice = data.services.find((service) => serviceID === service.slug);
  
    if (!foundservice) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      serviceData: foundservice
    }
  }
}

export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.services.map((service) => ({ params: { serviceSlug: service.slug }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

function projectPage({ serviceData, hasError }) {
      const router = useRouter();
    
      if (hasError) {
        return <h1>Error - please try another parameter</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }
    
      return (
        <ServicesLayout>
            <div className='m-12 flex flex-col'>
                <Service description={serviceData.description} name={serviceData.name} src1={serviceData.image1} src2={serviceData.image2}  />
            </div>
        </ServicesLayout>
      )
    }
    
    export default projectPage;