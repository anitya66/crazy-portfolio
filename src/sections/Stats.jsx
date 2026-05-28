function Stats(){

  return(

    <section id="stats">

      <h1 className="section-title">

        Developer Stats

      </h1>

      <div className="stats-grid">

        {/* GitHub */}

        <div className="stats-card">

          <div className="stats-glow github"></div>

          <h2>

            GitHub Activity

          </h2>

         <img

src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=anitya66&theme=github_dark"

alt="GitHub Stats"

className="github-stats"

/>

        </div>

        {/* LeetCode */}

        <div className="stats-card">

          <div className="stats-glow leetcode"></div>

          <h2>

            LeetCode Profile

          </h2>

          <img

            src="https://leetcard.jacoblin.cool/codewithanitya?theme=dark&font=Montserrat&ext=contest"

            alt="LeetCode Stats"

          />

        </div>

      </div>

    </section>

  )

}

export default Stats