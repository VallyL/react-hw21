import "./App.css";
import { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Title level={2}>Form using Ant Design</Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" name="name">
          <Input
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter a description"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: "20px" }}>
          <Title level={4}>Sent data:</Title>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Description:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
