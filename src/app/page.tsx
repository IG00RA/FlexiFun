import About from '@/components/About/About';
import Await from '@/components/Await/Await';
import Feedback from '@/components/Feedback/Feedback';
import Form from '@/components/Form/Form';
import Hero from '@/components/Hero/Hero';
import HowWorks from '@/components/HowWorks/HowWorks';
import Important from '@/components/Important/Important';
import Included from '@/components/Included/Included';
import Quality from '@/components/Quality/Quality';
import Questions from '@/components/Questions/Questions';
import Reasons from '@/components/Reasons/Reasons';

export default function Home() {
  return (
    <>
      <Hero />
      <Important />
      <Reasons />
      <About />
      <Await />
      <Included />
      <HowWorks />
      <Feedback />
      <Quality />
      <Questions />
      {/* <Form /> */}
    </>
  );
}
