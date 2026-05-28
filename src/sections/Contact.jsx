import profile from "../data/profile"
import MagneticButton from "../components/MagneticButton"

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

          <MagneticButton

href={`mailto:${profile.email}`}

>

Send Mail

</MagneticButton>

        </div>

        <div className="contact-card">

          <div className="contact-glow whatsapp"></div>

          <h2>WhatsApp</h2>

          <p>
            Quick communication
            and direct contact.
          </p>

          <MagneticButton

href={profile.whatsapp}

>

Chat Now

</MagneticButton>


        </div>
        <div className="contact-card">

  <div className="contact-glow linkedin"></div>

  <h2>LinkedIn</h2>

  <p>
    Connect professionally
    and explore my developer
    journey.
  </p>

  <MagneticButton

href={profile.linkedin}

>

View Profile

</MagneticButton>

</div>

      </div>

    </section>

  )

}

export default Contact