import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import LevelCard from "./LevelCard";
import { learningLevels } from "../data/content";

export default function WhatYouLearn() {
  return (
    <section className="pt-4 pb-5">
      <Container>
        <SectionTitle>What will you Learn in ACCA?</SectionTitle>
        <Row className="g-4">
          {learningLevels.map((level) => (
            <Col key={level.title} md={6} lg={4}>
              <LevelCard {...level} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
