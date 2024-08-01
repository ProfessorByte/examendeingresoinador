import { Banner } from "../components/Banner";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <section>
        <Banner />
        <Filter />
      </section>
      <Footer />
    </div>
  );
};
