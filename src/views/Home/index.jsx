import hyRequest from '@/services'
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
  // 定义状态
  const [data, setData] = useState({})

  // 网络请求
  useEffect(() => {
    console.log(hyRequest);
    hyRequest.get({url: "/home/highscore"}).then(res => {
      console.log(res);
      setData(res)
    })
  }, [])
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <ul>
        {
          data.list?.map(({name, id}) => <li key={id}>{name}</li>)
        }
      </ul>
    </div>
  )
})

export default Home