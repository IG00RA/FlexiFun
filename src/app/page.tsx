import About from '@/components/About/About';
import Await from '@/components/Await/Await';
import Form from '@/components/Form/Form';
import Hero from '@/components/Hero/Hero';
import Important from '@/components/Important/Important';
import Reasons from '@/components/Reasons/Reasons';

export default function Home() {
  return (
    <>
      <Hero />
      <Important />
      <Reasons />
      <About />
      <Await />
      <Form />
    </>
  );
}
