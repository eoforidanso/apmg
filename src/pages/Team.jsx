import { TEAM } from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function Team() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Our Team</span>
        <h1>Meet the APMG Team</h1>
        <p>A collaborative group of psychiatric and medical specialists dedicated to evidence-based, personalized care.</p>
      </section>

      <section className="section">
        <div className="container team-grid">
          {TEAM.map((member) => (
            <div className="team-card-v2" key={member.name}>
              <img className="team-portrait" src={member.photo} alt={member.name} loading="lazy" />
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-title">
                {member.title}
                {member.title.startsWith("PLACEHOLDER") && <span className="placeholder-tag">Placeholder</span>}
              </p>
              {member.quote && <p className="team-card-quote">"{member.quote}"</p>}
              <p className="team-card-bio">
                {member.bio}
                {member.bio.startsWith("PLACEHOLDER") && <span className="placeholder-tag">Placeholder</span>}
              </p>
              {(member.credentials || member.specialties || member.yearsExperience) && (
                <div className="team-card-credentials">
                  {member.credentials && (
                    <span>
                      <strong>Credentials:</strong> {member.credentials}
                    </span>
                  )}
                  {member.specialties && (
                    <span>
                      <strong>Specialties:</strong> {member.specialties.join(", ")}
                    </span>
                  )}
                  {member.yearsExperience && (
                    <span>
                      <strong>Experience:</strong> {member.yearsExperience}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
