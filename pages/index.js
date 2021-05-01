import { useState } from 'react';
import { connectToKbDatabase } from '../utils/connectToKbDatabase'
import Head from 'next/head'
import { getData } from '../utils/fetchData'
import KeyboardItem from '../components/keyboard/KeyboardItem'


const Home = (props) => {
  const [keyboards, setKeyboards] = useState(props.keyboards)

  return(
    <div className= "keyboards">
      <Head>
        <title>Home Page</title>
      </Head>

      {
        (keyboards === undefined || keyboards.length === 0)
        ? <h2>No Products</h2>
        : keyboards.map(kb => (
          <KeyboardItem key={kb._id} keyboard={ kb } />
        ))
      }
    </div>
  )
}

/* export async function getServerSideProps() {
  const { db } = await connectToKbDatabase();

  const keyboards = await db.collection("Keyboards").find({}).toArray();

  return {
    props: {
      keyboards: JSON.parse(JSON.stringify(keyboards)),
    }, // will be passed to the page component as props
  }
}    */

 export async function getServerSideProps() {
  var res = await getData('keyboard')
  console.log(res)

  if(res.keyboards === undefined) {
    res = await getData('keyboard')
  }

  /* if(res.keyboards === undefined) {
    return {
      props: {
      }, // will be passed to the page component as props
    }
  } */
  return {
    props: {
      keyboards: JSON.parse(JSON.stringify(res.keyboards)),
      result: res.result
    }, // will be passed to the page component as props
  }
}  

export default Home;  