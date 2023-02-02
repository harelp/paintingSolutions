import RenderHead from "../common/utils/renderHead";
import Navbar from "../common/comps/Navbar/Navbar";
import Hero from "../common/comps/Hero/Hero";
// https://chicagohandy.com/

export default function Home() {
  const title = "Title Goes Here";
  const description = "description goes here";
  const keywords = "keywords, goes, here, followed, by, a, comma";

  return (
    <>
      <RenderHead title={title} description={description} keywords={keywords} />
      <Navbar />
      <Hero />
      <section className="container ">
        <div className="columns has-background-black-bis is-large">
          <div className="column ">small column</div>

          <div className="column is-two-thirds">Big column</div>
        </div>
      </section>
    </>
  );
}
