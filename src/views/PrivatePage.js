import { Button, Col, Row, Space, Typography } from "antd";
import history from "../common/routes/history";
import Cookies from 'universal-cookie';

const PrivatePage = () => {
  const { Title, Text } = Typography;
  const removeCookies = () => {
    const cookies = new Cookies()
    cookies.remove("session")
    history.push("/")
  }
  return (
    <Row className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>Private Page Example</Title>
        </Row>
        <Row justify="space-around">
          <Text>You can restrict this page with any condition you want too.</Text>
        </Row>
        <Row justify="center" style={{ marginTop: 20 }}>
          <Space>
            <Button type="primary" shape="round" onClick={() => history.push("/")}>Home</Button>
            <Button type="default" shape="round" danger onClick={removeCookies}>Delete Cookies Data</Button>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default PrivatePage;