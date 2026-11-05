import { Col, Container, Row } from "react-bootstrap";
import LeadForm from "./LeadForm";

export default function KickOff() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <h2 className="kick-title">Kick off your ACCA Prep journey with IndigoLearn</h2>
            <p className="text-muted small">Sign-in and get instant access to our FREE Courses.</p>
            <span className="partner-badge">ACCA Approved Learning Partner</span>
          </Col>
          <Col lg={5}>
            <LeadForm idPrefix="kick" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
