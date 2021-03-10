/**
* @author muhamad.zaky
* This page will display your base project content. this page contain a test method.
*/

import React from 'react';
import { Button, Col, Popconfirm, Row, Space, Typography } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import history from '../../common/routes/history';
import moment from 'moment';

const TestPage = ({ getAPI, loading, data, meta }) => {
  const { Title, Text } = Typography;
  const cookies = new Cookies();
  const { t } = useTranslation();

  const onYes = () => {
    const date = moment(new Date()).add(1, 'hours').utc()._d;
    const addCookies = async () => {
      cookies.set("session", true, { path: '/', expires: date });
    }

    addCookies().then(() => { history.push("/PrivatePage") });
  }

  return (
    <Row id="Overview" className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>{t('overview.title')}</Title>
        </Row>
        <Row justify="space-around">
          <Text>{t('overview.subtitle')}</Text>
        </Row>
        <Space direction="vertical" style={{ width: '100%', marginTop: 20 }}>
          <Row justify="space-around">
            <Button type={data && meta ? "default" : "primary"} danger={data && meta} onClick={getAPI} loading={loading} shape="round">
              { data && meta ? t("overview.clearAPI") : t('overview.callAPI') }
            </Button>
          </Row>
          <Row justify="space-around">
          <Text strong>{ data && meta && !loading ? `${JSON.stringify(meta)} - ${data}` : "N/A" }</Text>
          </Row>
        </Space>
        <Row justify="center" style={{ marginTop: 50 }}>
          <Space>
            <Popconfirm
              title={t('common.cookie_permission')}
              onConfirm={onYes}
              okText={t('common.yes')}
              cancelText={t('common.no')}
            >
              <Button type="primary" shape="round">{t('overview.privPage')}</Button>
            </Popconfirm>
            <Button type="primary" shape="round" onClick={() => history.push("/PublicPage")}>{t('overview.pubPage')}</Button>
          </Space>
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: 30 }}>
          {/* <Text>&copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky</Text> */}
          <Text>{t('common.footer', { year: moment(new Date()).format('YYYY'), icon: <HeartFilled style={{ color: '#ea4c89' }} /> } )}</Text>
        </Row>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  ...state.homeReducer
});

const mapDispatchToProps = (() => ({
  // mapping action dispatch to component props
}))();

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);