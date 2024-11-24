// app/home/page.tsx
import Navbar from '../../components/Navbar';
import Hero from '../../components/hero';
import FeaturedProducts from '../../components/FeaturedProducts';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
