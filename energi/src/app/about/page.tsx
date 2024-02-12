import "../home.css"
import "./p.css"
export default function Page() {
    return (
        <>
          <header>
    <h1>About Us - Energi</h1>
  </header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/products">Solutions</a>
    <a href="/contact">Contact</a>
    <a href="/docs">Documentation</a>
  </nav>
          <section class="profile-container">
    <div class="profile">
      <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" alt="John Doe"/>
      <h3>John Doe</h3>
      <p>John is passionate about renewable energy and has been working in the industry for over a decade.</p>
    </div>
    <div class="profile">
      <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" alt="Jane Smith"/>
      <h3>Jane Smith</h3>
      <p>Jane's expertise in sustainable technology has led to innovative solutions for a greener future.</p>
    </div>
    <div class="profile">
      <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" alt="Michael Johnson"/>
      <h3>Michael Johnson</h3>
      <p>Michael's dedication to environmental conservation has driven impactful initiatives within our company.</p>
    </div>
  </section>
  <footer>
    <p> 2023 Energi - All rights reserved</p>
  </footer>
        </>
    )
}