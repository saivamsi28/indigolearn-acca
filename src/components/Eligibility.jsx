import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import { eligibility } from "../data/content";

export default function Eligibility() {
  return (
    <section className="pt-5 pb-4">
      <Container>
        <SectionTitle>ACCA – Eligibility</SectionTitle>
        <Row className="g-3">
          {eligibility.map(({ title, text }) => (
            <Col key={title} xs={12} sm={6} lg={3}>
              <div className="elig-card text-center h-100">
                <h3 className="elig-title">{title}</h3>
                <p className="mb-0 text-muted small">{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
