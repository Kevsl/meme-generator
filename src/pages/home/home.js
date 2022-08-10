import { useSelector } from 'react-redux'
import { getMemes } from '../../services/memes'
import React, { useState } from 'react'
import MemeCard from '../../components/memeCard'
import './home.css'

const Home = () => {
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const [datas, setDatas] = useState([])

  getMemes().then((res) => {
    setDatas(res)
  })

  return (
    <div>
      <div className="bg-blue br-9 text-center mb-30 ">
        <h1>Meme Generator </h1>
        <p>Welcome {firstName + ' ' + lastName}</p>
      </div>
      <div className="  flex wrap jc-sa items-center">
        {datas.map((data) => {
          return <MemeCard title={data.name} id={data.id} image={data.url} />
        })}
      </div>
    </div>
  )
}
export default Home