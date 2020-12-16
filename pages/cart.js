import { useState } from 'react';
import { Segment } from "semantic-ui-react";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import { parseCookies } from 'nookies';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import cookie from 'js-cookie';
import catchErrors from '../utils/catchErrors';

function Cart({products, user}) {
  const [cartProducts, setCartProducts] = useState(products);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleChechout(paymentData) {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/checkout`;
      const token = cookie.get('token');
      const payload = {paymentData}
      const headers = {headers: { Authorization : token }};
      const res = axios.post(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, alert);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveFromCart(productId) {
    const url = `${baseUrl}/api/cart`
    const token = cookie.get('token');
    const payload = {
      params: { productId: productId},
      headers: {Authorization: token}
    };
    const response = await axios.delete(url, payload);
    setCartProducts(response.data)
  }

  return (
    <Segment loading={loading}>
      <CartItemList 
        handleRemoveFromCart={handleRemoveFromCart} 
        user={user} 
        products={cartProducts} 
        success={success}
      />
      <CartSummary
        success={success} 
        products={cartProducts} 
        handleChechout={handleChechout} 
      />
    </Segment>
  );
}

Cart.getInitialProps = async (ctx) => {
  const url= `${baseUrl}/api/cart`;
  const { token } = parseCookies(ctx);
  if (!token) {
    return { products: [] };
  }
  const payload = { headers: { Authorization : token } };
  const response = await axios.get(url, payload);
  return {products: response.data};
}

export default Cart;
