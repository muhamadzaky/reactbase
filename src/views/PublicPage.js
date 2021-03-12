import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from 'react-i18next';
import history from "../common/routes/history";

const PublicPage = () => {
  const { Title, Text } = Typography;
  const { t } = useTranslation();
  return (
     <Row className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>{t('overview.pubPage')}</Title>
        </Row>
        <Row justify="space-around">
          <Text>{t('overview.pubPageTitle')}</Text>
        </Row>
        <Row justify="space-around" style={{ marginTop: 20 }}>
          <Button type="primary" shape="round" onClick={() => history.push("/")}>{t('common.home')}</Button>
        </Row>
      </Col>
    </Row>
  )
}

export default PublicPage;