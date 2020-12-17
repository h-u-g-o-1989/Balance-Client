import "../App.css";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="App">
      <div className="unprotectedHome">
        <div className="titles">
          <h1 className="work">Work</h1>
          <h1 className="life">Life</h1>
          <h1 className="balance">Balance</h1>
        </div>
        <div className="text">
          <h2 className="intro">
            Welcome to balance, the app that will help you track your work-life
            balance and obtain significant insights on how to improve your
            quality of life.
          </h2>
          <p className="one">
            As a 21st century human, you have probably noticed how hectic the
            world around you is. With so many responsibilities, it's very easy
            to get stuck into a rhythm that does not benefit you or your
            long-term health.
          </p>

          <p className="two">
            Here at balance our goal is to provide you with a visual tool for
            gaining better knowledge of your daily routine and how it influences
            your mood.
          </p>

          <p className="three">
            Our app allows you to fill in forms for each day and structure your
            daily tasks in order to create personalized reports that take your
            mood into consideration in order to offer you tips on how to improve
            your balance.
          </p>

          <p>
            • The daily report helps you track day-by-day tasks and
            responsibilities, offering you an overview of each individual day.
          </p>
          <p>
            • The monthly report section offers you aggregated data summarising
            your work-life balance for each month.
          </p>
          <p>
            • The home page offers you an overview of all inputed data for every
            day you have used the app.
          </p>
        </div>

        <div className="reviews">
          <h2 className="secondarytitle">Hear it from our users</h2>
          <div className="cardSection">
            <div className="card">
              <h3>Hugo, 31, UK</h3>
              <p>
                As a chef, my work-life balance was completely out of sync. It
                wasn't until I started using this app that I noticed work was
                taking up more than 60% of my time and as a result, my emotional
                state wasn't great. Using balance has given me the tools and
                understanding of how to improve the quality of my life.
              </p>
            </div>

            <div className="card">
              <h3>Marta, 27, Spain</h3>
              <p>
                Everybody knows self-care is a big deal, however, I didn't give
                it much thought until I started using balance. Since then, I've
                noticed I do not spend enough time taking care of my physical
                and emotional needs and I have been able to take steps towards
                correcting this. As a result, I've noticed my daily mood input
                has become more positive, and I feel better as a whole.
              </p>
            </div>

            <div className="card">
              <h3>André, 26, Portugal</h3>
              <p>
                I don't use this app. I don't believe in work-life balance. This
                is stupid. Why can't I work 24h a day? Ah, I remember, it's
                because my wife won't let me. Okay, I'll give it a try. Can I
                get a thumbs up? 👍
              </p>
            </div>

            <div className="card">
              <h3>Filipe, 24, Portugal</h3>
              <p>
                Let me see... Okay... Okay... Alright, so: this app is quite
                okay. Well... I guess... the more you know! Maybe this will
                work.
              </p>
            </div>

            <div className="card">
              <h3>Vincenzo, 28, Italy</h3>
              <p>
                I only signed up to this app because I thought this is where
                they organize Magic the Gathering. Maybe it could help me start
                the revolution against totalitarian teachers. Either way, I
                might use it, but not to track my sleep. Sleeping is for the
                weak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
