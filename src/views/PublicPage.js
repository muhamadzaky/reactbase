import { Button, Col, Row, Typography } from "antd";
import history from "../common/routes/history";

const PublicPage = () => {
  const { Title, Text } = Typography;
  return (
     <Row className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>Public Page Example</Title>
        </Row>
        <Row justify="space-around">
          <Text>This is a public route that anyone can access the page without authorization.</Text>
        </Row>
        <Row justify="space-around" style={{ marginTop: 20 }}>
          <Button type="primary" shape="round" onClick={() => history.push("/")}>Home</Button>
        </Row>
      </Col>
    </Row>
  )
}

export default PublicPage;