import { Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import { placement } from "../data/content";

export default function PlacementAssistance() {
  return (
    <section className="section-lavender py-5">
      <Container>
        <SectionTitle>100% Placement Assistance</SectionTitle>
        {placement.map(({ title, text }) => (
          <div key={title} className="placement-item">
            <h3>{title}</h3>
            <p className="mb-0 small">{text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
