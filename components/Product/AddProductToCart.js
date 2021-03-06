import { Input } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import baseUrl from '../../utils/baseUrl';
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import cookie from 'js-cookie';

function AddProductToCart({ user, productId }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return clearTimeout(timeout);
  }, [success]);

  async function handleAddProductToCard() {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      const token = cookie.get('token');
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, alert)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Input
      type="number"
      min="1"
      placeholder="Quantity"
      onChange={(event) => setQuantity(Number(event.target.value))}
      value={quantity}
      action={
        user && success ? {
          color: 'blue',
          content: 'Item Added!',
          ison: 'plus cart',
          disabled: true
        } :
        user ? {
        color: "orange",
        content: "Add to Cart",
        icon: "plus cart",
        loading,
        disabled: loading,
        onClick: handleAddProductToCard
      } : {
          color: blue,
          content: 'Sing Up To Purchase',
          icon: 'signup',
          onClick: () => router.push('/singup')
        }}
    />
  );
}

export default AddProductToCart;
