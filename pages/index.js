import { useState, useEffect } from 'react';
import { connectToKbDatabase } from '../utils/connectToKbDatabase'
import Head from 'next/head'
import { getData } from '../utils/fetchData'
import KeyboardItem from '../components/keyboard/KeyboardItem'
import filterSearch  from '../utils/filterSearch'
import { useRouter } from 'next/router'

const Home = (props) => {
  const [keyboards, setKeyboards] = useState(props.keyboards)
  const [page, setPage] = useState(1)
  const router = useRouter()

  useEffect(() => {
    setKeyboards(props.keyboards)
  }, [props.keyboards])

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1)
  }, [router.query])

  const handleLoadMore = () => {
    setPage(page + 1)
    filterSearch({router, page: page + 1})
  }

  const handleLoadLess = () => {
    if (page > 1){
      setPage(page - 1)
      filterSearch({router, page: page - 1})
    }
  }

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

        <div>
          {
            props.result < page * 12 ? ""
            : <button className="btn btn-outline-info d-block mx-auto mb-4 button"
            onClick={handleLoadMore}>
              Load More
            </button>
          }
        </div>

        <div>
          {
            props.result < page * 12 ? ""
            : <button className="btn btn-outline-info d-block mx-auto mb-4 button"
            onClick={handleLoadLess}>
              Load Less
            </button>
          }
        </div>
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

 export async function getServerSideProps({query}) {
  const page = query.page || 1
  const category = query.category || 'all'
  const search = query.search || 'all'
  
  var res = await getData(`keyboard?limit=${page * 12}&category=${category}&Name=${search}`)
  console.log(res)

  if(res.keyboards === undefined) {
    res = await getData(`keyboard?limit=${page * 12}&category=${category}&Name=${search}`)
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