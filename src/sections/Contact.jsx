import profile from "../data/profile"

function Contact(){

  return(

    <section id="contact">

      <h1 className="section-title">

        Let's Connect

      </h1>

      <p className="contact-subtitle">

        Open for opportunities,
        collaboration and building
        impactful products.

      </p>

      <div className="contact-grid">

        <div className="contact-card">

          <div className="contact-glow"></div>

          <h2>Email</h2>

          <p>
            Let's discuss projects,
            opportunities and ideas.
          </p>

          <a
            href={`mailto:${profile.email}`}
          >

            Send Mail

          </a>

        </div>

        <div className="contact-card">

          <div className="contact-glow whatsapp"></div>

          <h2>WhatsApp</h2>

          <p>
            Quick communication
            and direct contact.
          </p>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >

            Chat Now

          </a>


        </div>
        <div className="contact-card">

  <div className="contact-glow linkedin"></div>

  <h2>LinkedIn</h2>

  <p>
    Connect professionally
    and explore my developer
    journey.
  </p>

  <a
    href={profile.linkedin}
    target="_blank"
    rel="noreferrer"
  >

    View Profile

  </a>

</div>

      </div>

    </section>

  )

}

export default Contact