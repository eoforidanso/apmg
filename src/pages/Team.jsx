import { TEAM } from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function Team() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Our Team</span>
        <h1>Meet the clinicians behind your care</h1>
        <p>A collective of psychiatric and medical providers dedicated to personalized treatment.</p>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {TEAM.map((member) => (
            <div className="card team-card" key={member.name}>
              <img className="team-photo" src={member.photo} alt={member.name} />
              <div>
                <h3>{member.name}</h3>
                <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>{member.title}</p>
                {member.quote && <p style={{ fontStyle: "italic" }}>"{member.quote}"</p>}
                <p>
                  {member.bio}
                  {member.bio.startsWith("PLACEHOLDER") && <span className="placeholder-tag">Placeholder</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
