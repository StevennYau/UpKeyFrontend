import Link from 'next/link'
import { increase, decrease} from '../store/Actions'

const CartItem = ({item, dispatch, cart}) => {
   console.log(cart)
   return (
      <tr>
         <td style={{width: '100px', overflow: 'hidden'}}>
            <img src={item.Image} alt={item.Image}
            className="img-thumbnail w-100"
            style={{minWidth: '80px', height: '80px'}} />
         </td>

         <td style={{minWidth: '200px'}} className="w-50 align-middle">
            <h5 className="text-capitalize text-secondary kbTitle">
               <Link href={item.Link}>
                  <a className="kbTitle">
                     {item.Name}
                  </a>
               </Link>
            </h5>
            <h6 className="text-danger">${(item.quantity * item.Price).toFixed(2)}</h6>
            <p className="mb-1 text-danger">Standing: {item.Standing}</p>
         </td>

         <td className="align-middle" style={{minWidth: '150px'}}>
            <button className="btn btn-outline-secondary"
            onClick={() => dispatch(decrease(cart, item._id))} 
            disabled={item.quantity === 1 ? true : false} > - </button>
            <span className="px-3">{item.quantity}</span>
            <button className="btn btn-outline-secondary"
            onClick={() => dispatch(increase(cart, item._id))} > + </button>
         </td>

         <td className="align-middle" style={{minWidth: '50px', cursor: 'pointer'}}>
            <i className="fas fa-trash-alt text-danger" area-hidden="true"
            style={{fontSize: '18px'}} data-toggle="modal" data-target="#exampleModal"
            onClick={() => dispatch({
               type: 'ADD_MODAL',
               payload: { data: cart, id: item._id, title: item.Name}
            })}></i>
         </td>
      </tr>
   )
}

export default CartItem