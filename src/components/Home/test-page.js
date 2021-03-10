/**
* @author muhamad.zaky
* This page will display your base project content. this page contain a test method.
*/

import React from 'react';
import { Button, Col, Popconfirm, Row, Space, Typography } from 'antd';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import history from '../../common/routes/history';
import moment from 'moment';

const TestPage = ({ getAPI, loading, data, meta }) => {
  const { Title, Text } = Typography;
  const cookies = new Cookies()

  const onYes = () => {
    const date = moment(new Date()).add(1, 'hours').utc()._d
    const addCookies = async () => {
      cookies.set("session", true, { path: '/', expires: date })
    }

    addCookies().then(() => { history.push("/PrivatePage") })
  }

  return (
    <Row id="Overview" className="container" justify="space-around" align="middle">
      <Col>
        <Row justify="space-around">
          <Title>Hello! This is an overview page.</Title>
        </Row>
        <Row justify="space-around">
          <Text>You can try any feature of this base code.</Text>
        </Row>
        <Space direction="vertical" style={{ width: '100%', marginTop: 20 }}>
          <Row justify="space-around">
            <Button type={data && meta ? "default" : "primary"} danger={data && meta} onClick={getAPI} loading={loading} shape="round">
              { data && meta ? "Clear Data" : "Call API" }
            </Button>
          </Row>
          <Row justify="space-around">
          <Text strong>{ data && meta && !loading ? `${JSON.stringify(meta)} - ${data}` : "N/A" }</Text>
          </Row>
        </Space>
        <Row justify="center" style={{ marginTop: 50 }}>
          <Space>
            <Popconfirm
              title="Add cookies to access the restricted page?"
              onConfirm={onYes}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" shape="round">Private Page Example</Button>
            </Popconfirm>
            <Button type="primary" shape="round" onClick={() => history.push("/PublicPage")}>Public Page Example</Button>
          </Space>
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