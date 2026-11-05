import { Button, Col, Container, Row } from "react-bootstrap";
import StatChip from "./StatChip";
import LeadForm from "./LeadForm";
import { stats } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <h1 className="hero-title">Become ACCA in 18 months</h1>
            <p className="text-muted hero-text">
              Acquire globally recognized accountancy qualification, ACCA (also called as Global CA),
              and get placed in top MNCs &amp; Big4. Begin ACCA prep with IndigoLearn now.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {stats.map((s) => (
                <StatChip key={s.label} {...s} />
              ))}
            </div>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Button className="btn-indigo px-4">Download Brochure</Button>
              <span className="partner-badge">ACCA Approved Learning Partner</span>
            </div>
          </Col>
          <Col lg={5}>
            <LeadForm idPrefix="hero" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
