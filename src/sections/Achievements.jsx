import achievements from "../data/achievements"

import AchievementCard from "../components/AchievementCard"

function Achievements(){

  return(

    <section id="achievements">

      <h1 className="section-title">

        Achievements

      </h1>

      <div className="achievement-grid">

        {

          achievements.map((item, index) => (

            <AchievementCard

              key={index}

              item={item}

            />

          ))

        }

      </div>

    </section>

  )

}

export default Achievements