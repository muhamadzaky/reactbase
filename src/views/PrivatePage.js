import { Button, Col, Row, Space, Typography } from "antd";
import { useTranslation } from 'react-i18next';
import history from "../common/routes/history";
import Cookies from 'universal-cookie';

const PrivatePage = () => {
  const { Title, Text } = Typography;
  const { t } = useTranslation();
  const removeCookies = () => {
    const cookies = new Cookies();
    cookies.remove("session");
    history.push("/");
  }
  return (
    <Row className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>{t('overview.privPage')}</Title>
        </Row>
        <Row justify="space-around">
          <Text>{t('overview.privPageTitle')}</Text>
        </Row>
        <Row justify="center" style={{ marginTop: 20 }}>
          <Space>
            <Button type="primary" shape="round" onClick={() => history.push("/")}>{t('common.home')}</Button>
            <Button type="default" shape="round" danger onClick={removeCookies}>{t('common.delete_cookie')}</Button>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default PrivatePage;