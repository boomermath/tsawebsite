import "../home.css"

export default function Page() {
    return (<>
        <header>
            <h1>Credits - Energi</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Solutions</a>
            <a href="/contact">Contact</a>
            <a href="/docs">Documentation</a>
        </nav>
        <section>
            <a href="/website_pow.pdf">Plan of Work</a>
            <br/>
            <a href="/website_scc.pdf">Copyright checklist</a>
            <p>Image credits, click to learn more: <br/><a href="https://www.dreamstime.com">Dreamstime</a><br/><a
                href="https://mscresearch.itc.utwente.nl">MSCResearch</a><br/><a href="https://www.patternenergy.com">Pattern
                Energy</a></p>
        </section>
    </>)
}