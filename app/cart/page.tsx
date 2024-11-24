// app/cart/page.tsx
import Navbar from '../../components/Navbar';
import CartItems from '../../components/CartItems';

export default function Cart() {
  return (
    <div>
      <Navbar />
      <CartItems />
    </div>
  );
}
