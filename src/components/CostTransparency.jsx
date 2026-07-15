import { COST_TRANSPARENCY, PHONE, PHONE_HREF } from "../data.js";

export default function CostTransparency() {
  return (
    <div className="cost-transparency">
      <div className="grid grid-2">
        {COST_TRANSPARENCY.map((item) => (
          <div className="card cost-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>
              {item.body}
              {!item.confirmed && <span className="placeholder-tag">Confirm before launch</span>}
            </p>
          </div>
        ))}
      </div>
      <p className="cost-transparency-note">
        No referral is needed to be seen. Questions about coverage or cost? Call us at{" "}
        <a href={PHONE_HREF}>{PHONE}</a>.
      </p>
    </div>
  );
}
