import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Skeleton } from 'antd';
import Sidebar from '../pages/Sidebar'
import Table from '../pages/Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [posts, setPosts] = useState([]);

  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = axios.get('http://127.0.0.1:8000/api/post').then(res => {
      setPosts(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
     <Layout>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {
            loading ? <Skeleton/>
            :
            <Table dataSource={posts} ></Table>
          }      </Layout>
     </Layout>
    </>
  )
}
