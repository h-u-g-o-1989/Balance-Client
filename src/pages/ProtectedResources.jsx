import React from "react";
import "./ProtectedResources.css";

const ProtectedResources = () => {
  return (
    <div>
      <h1>Find the best resources to help manage your work-life balance</h1>

      <div className="external-resources">
        <div className="external-header">
          {" "}
          <h3>External resources</h3>{" "}
        </div>
        <div className="external-links">
          <div className="each-link">
            <p>Therapists in your area</p>

            <a
              href="https://www.google.com/search?sxsrf=ALeKk01TFi0iZt1EAWu_ge5I9uYD3QQQKw%3A1608028731532&ei=O5LYX6-BIJKk1fAP6JC0gAk&q=therapists+in+my+area&oq=therapists+in+my+area&gs_lcp=CgZwc3ktYWIQAzIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgYIIxAnEBM6BAgAEB46BggAEAUQHlCNDVjQEmC1E2gAcAB4AIABc4gB-QaSAQM1LjSYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwjvitPq5c_tAhUSUhUIHWgIDZAQ4dUDCA0&uact=5"
              target="_blank"
            >
              Find
            </a>
          </div>
          <div className="each-link">
            <p>Best sleep-tracking apps</p>
            <a
              href="https://www.techradar.com/news/best-sleep-tracker"
              target="_blank"
            >
              Find
            </a>
          </div>
          <div className="each-link">
            <p>Best self-care apps</p>
            <a
              href="https://www.massagemag.com/21-self-care-apps-85844/"
              target="_blank"
            >
              Find
            </a>
          </div>
        </div>
      </div>

      <div className="articles">
        <div className="each-article">
          <h3>
            How I Stopped Working So Much And What I Learned From Doing So
          </h3>
          <p>
            We know when we work too much—we just don’t know what to do about
            it. Whether we love or hate our job, it’s easy to become consumed by
            it and destroy our work-life balance in the process. But it doesn’t
            have to be that way....
          </p>
          <a
            href="https://medium.com/an-idea-for-you/how-i-stopped-working-so-much-and-what-i-learned-from-it-16e7c76a0519"
            target="_blank"
          >
            Read the full article
          </a>
        </div>
        <div className="each-article">
          <h3>10 ways to deal with stress</h3>
          <p>
            It might surprise you to learn that biological stress is a fairly
            recent discovery. It wasn’t until the late 1950s that
            endocrinologist Hans Selye first identified and documented stress.
            Symptoms of stress existed long before Selye, but his discoveries
            led to new research that has helped millions cope with stress. We’ve
            compiled a list of the top 10 ways to relieve stress...
          </p>
          <a
            href="https://www.healthline.com/health/10-ways-to-relieve-stress"
            target="_blank"
          >
            Read the full article
          </a>
        </div>
        <div className="each-article">
          <h3>How to Improve Your Work-Life Balance Today</h3>
          <p>
            Often, work takes precedence over everything else in our lives. Our
            desire to succeed professionally can push us to set aside our own
            well-being. Creating a harmonious work-life balance or work-life
            integration is critical, though, to improve not only our physical,
            emotional and mental well-being, but it's also important for our
            career...
          </p>
          <a
            href="https://www.businessnewsdaily.com/5244-improve-work-life-balance-today.html"
            target="_blank"
          >
            Read the full article
          </a>
        </div>
        <div className="each-article">
          <h3>Healthy Sleep tips</h3>
          <p>
            It’s well-established that sleep is essential to our physical and
            mental health. But despite its importance, a troubling percentage of
            people find themselves regularly deprived of quality sleep and are
            notably sleepy during the day....
          </p>
          <a
            href="https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips"
            target="_blank"
          >
            Read the full article
          </a>
        </div>
        <div className="each-article">
          <h3>7 ways successful people spend their free time</h3>
          <p>
            When you think about professional success, you think about the
            strategies and behaviors that people exemplify when at work. You
            think about what people do during the 9-5 working hours, and whether
            they extend those hours by coming in early or staying late to tackle
            projects. What they do when they get home, or on weekends, when
            they're away from the office and away from their computers, doesn't
            enter your mind. But here's the thing: it should.....
          </p>
          <a
            href="https://www.inc.com/jayson-demers/7-ways-successful-people-spend-their-free-time.html"
            target="_blank"
          >
            Read the full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProtectedResources;
