import "./home.css"
export default function Home() {
  return (
    <>
     <header>
    <h1>Energi - Green Energy Solutions</h1>
  </header>
  <nav>
  <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/products">Solutions</a>
    <a href="/contact">Contact</a>
    <a href="/docs">Documentation</a>
  </nav>
      <section>
        <h2>Welcome to Energi</h2>
    <p>Providing sustainable and renewable energy solutions from local sources.</p>
    <h3>Our Unique Green Energy Solutions:</h3>
    <ul>
      <li>Solar Power</li>
      <li>Hydroelectric Power</li>
      <li>Geothermal Power</li>
    </ul>
    <p>With over 20 years of outstanding service, Energi has been a leader in delivering reliable and eco-friendly energy solutions to our community.</p>
    <button>Learn More</button>
  </section>
  <section>
    <h2>Explore Our Green Energy Solutions</h2>
    <h3>Solar Power</h3>
    <p>Our solar panels are designed to efficiently capture sunlight and convert it into electricity, offering a sustainable and cost-effective energy solution for residential and commercial use.</p>
    <img src="https://patternenergy.com/wp-content/uploads/2023/10/Feature-800x800-Solar-Panels.jpg" alt="Solar Power"/>
    <h3>Hydroelectric Power</h3>
    <p>Experience the power of flowing water with our hydroelectric systems, delivering clean and reliable energy by harnessing the force of rivers and streams.</p>
    <img src="https://thumbs.dreamstime.com/b/landscape-hydroelectric-power-station-blue-sky-clouds-generative-ai-skyward-symphony-framed-298960826.jpg" alt="Hydroelectric Power"/>
    <h3>Geothermal Power</h3>
    <p>Utilize the Earth's natural heat to heat and cool your home or business with our geothermal heat pump systems, providing a renewable and environmentally friendly alternative to traditional HVAC systems.</p>
    <img src="https://mscresearch.itc.utwente.nl/sites/default/files/styles/fluid/public/2023-01/ARS_Geothermal.jpeg?itok=x4PVHxA9" alt="Geothermal Power"/>
  </section>
  </>
  );
}
