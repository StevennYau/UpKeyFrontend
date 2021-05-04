import React, {useState, useEffect} from 'react'
import filterSearch from '../utils/filterSearch'
import { getData } from '../utils/fetchData'
import { useRouter } from 'next/router';

const Filter = ({state}) => {
   const [Name, setName] = useState('')
   const [search, setSearch] = useState('')

   const router = useRouter()

   useEffect(() => {
      console.log(search)
      filterSearch({router, search: search ? search.toLowerCase() : 'all'})
  },[search])

   return (
      <div className="input-group searchBar">
         <form autoComplete="off" className="mt-2 col-md-8 px-0">
               <input type="text" className="form-control" list="title_product"
               value={search} onChange={e => setSearch(e.target.value)} />
         </form>
      </div>
   )
}

export default Filter