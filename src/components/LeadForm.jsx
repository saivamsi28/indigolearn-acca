import { Button, Card, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useCallbackModal } from "../context/CallbackModalContext";
import { qualifications, interests } from "../data/content";

export default function LeadForm({ idPrefix = "lead" }) {
  const { values, handleChange, reset } = useForm({
    phone: "",
    email: "",
    qualification: "",
    interest: "",
  });
  const { openModal } = useCallbackModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal(); // only opens the modal – no navigation
    reset();
  };

  return (
    <Card className="lead-card shadow">
      <Card.Body className="p-4">
        <Card.Title as="p" className="text-center lead-title mb-3">
          Aspiring to be an ACCA? Get in touch with us!
        </Card.Title>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId={`${idPrefix}-phone`}>
            <Form.Control name="phone" type="tel" placeholder="Phone Number*" value={values.phone} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId={`${idPrefix}-email`}>
            <Form.Control name="email" type="email" placeholder="Email ID" value={values.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId={`${idPrefix}-qual`}>
            <Form.Select name="qualification" value={values.qualification} onChange={handleChange}>
              <option value="">Current Qualification</option>
              {qualifications.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId={`${idPrefix}-interest`}>
            <Form.Select name="interest" value={values.interest} onChange={handleChange}>
              <option value="">Interested In</option>
              {interests.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="btn-indigo w-100">
            Request Call Back
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
