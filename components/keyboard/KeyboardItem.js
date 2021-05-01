import Product from "../../pages/product"
import Link from 'next/link'

const KeyboardItem = ({keyboard}) => {

   const userLink = () => {
      return (
         <>
            <Link href={keyboard.Link}>
               <a className="btn btn-info"
               style={{marginRight: '5px', flex: 1}}>View</a>
            </Link>
            <button className="btn btn-success"
            style={{marginRight: '5px', flex: 1}}>
               Buy
            </button>
         </>
      )
   }

   return(
      <div className="card" style={{ width: '18rem' }}>
         <img className="card-img-top" src={keyboard.Image} alt={keyboard.Image} />
         <div className="card-body">
            <h5 className="card-title text-capitalize">{keyboard.Name}</h5>

            <div>
               <h6 className="text-danger">${keyboard.Price}</h6>
            </div>

            <p className="card-text" title={keyboard.Standing}> 
               Standing: {keyboard.Standing}
            </p>
            
            <div className="row justify-content-between mx-0">
               {userLink()}
            </div>
         </div>
      </div>
   )
}

export default KeyboardItem