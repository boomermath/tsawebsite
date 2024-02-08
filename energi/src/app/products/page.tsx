import "../home.css"

export default function Page() {
    return (
        <>
     <header>
    <h1>Our Solutions - Energi</h1>
  </header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/products">Solutions</a>
    <a href="/contact">Contact</a>
    <a href="/credits">Credits</a>

  </nav>
  <section>
    <h2>Explore Our Green Energy Solutions</h2>
    <h3>Solar Power</h3>
    <p>The solar panels are designed to efficiently capture sunlight and convert it into electricity, offering a sustainable and cost-effective energy solution for residential and commercial use.</p>
    <h3>Hydroelectric Power</h3>
    <p>Experience the power of flowing water with our hydroelectric systems, delivering clean and reliable energy by harnessing the force of rivers and streams.</p>
    <h3>Geothermal Power</h3>
    <p>Utilize the Earth's natural heat to heat and cool your home or business with our geothermal heat pump systems, providing a renewable and environmentally friendly alternative to traditional HVAC systems.</p>
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
  <footer style={{bottom:0}}>
    <p> 2023 Energi - All rights reserved</p>
  </footer>
        </>
    )
}