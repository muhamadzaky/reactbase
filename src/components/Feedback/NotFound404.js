import { Button, Result, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import history from '../../common/routes/history';

const NotFound404 = () => {
  const { t } = useTranslation();
  return (
    <Row justify="space-around" align="middle" className="container">
      <Result
        status="404"
        title="404"
        subTitle={t('feedback.pagenotfound')}
        extra={<Button type="primary" shape="round" onClick={() => history.push("/")}>{t('common.home')}</Button>}
      />
    </Row>
  )
}

export default NotFound404;