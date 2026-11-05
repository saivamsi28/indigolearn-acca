import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { whyChoose } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="section-lavender pt-5 pb-5">
      <Container>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <Row className="g-4 justify-content-center">
          {whyChoose.map((item) => (
            <Col key={item.title} md={6} lg={4}>
              <FeatureCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
