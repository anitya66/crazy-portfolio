import "../styles/achievement.css"

function AchievementCard({ item }) {

  return (

    <div className={`achievement-card ${item.glow}`}>

      <div className="achievement-content">

        <h2>{item.title}</h2>

        <p>{item.subtitle}</p>

        <span>{item.username}</span>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >

          {item.button}

        </a>

      </div>

      <div className="achievement-glow"></div>

    </div>

  )

}

export default AchievementCard