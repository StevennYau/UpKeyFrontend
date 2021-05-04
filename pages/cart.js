import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'
import Link from 'next/link'

const Cart = () => {
  const {state, dispatch } = useContext(DataContext)
  const { cart, auth } = state

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        console.log(prev);
        return prev + (item.Price * item.quantity)
      }, 0)

      setTotal(res)
    }

    getTotal()
  }, [cart])

  const handleClick = () => {
    return dispatch({ type: 'NOTIFY', payload: {error: "Feature Not Added"}})
  }

  if (Object.keys(auth).length === 0) {
    return <h2>Please Login to view your cart!</h2>
  } 
  if (cart.length === 0) return <img className="emptyCart mx-auto d-block" src="/empty_shopping_cart.png" alt="not empty" />
  
   return(
     <div className="row mx-auto container">
      <Head>
        <title>
          Cart
        </title>
      </Head>

      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase">Shopping Cart</h2>

        <table className="table my-3 align-middle">
          <tbody>
            {
              cart.map(item => (
                <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
              ))
            }
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Shipping</h2>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address"
          className="form-control mb-2" />

          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" id="mobile"
          className="form-control mb-2" />
        </form>

        <h3>Total: <span className="text-info">${total.toFixed(2)}</span></h3>
        
        <a className="btn btn-dark my-2" onClick={handleClick}>Proceed To Checkout</a>

      </div>

     </div>

   )
 }
 
 export default Cart;  