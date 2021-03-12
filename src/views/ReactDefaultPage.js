import React, { Component } from 'react';
import { Button, Drawer, Row, Typography } from 'antd';
import { connect } from 'react-redux';
import { GetData, RemoveData } from '../components/Home/store/home-action'
import { withTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import ReactDefaultPage from '../components/Home/react-default-page';
import TestPage from '../components/Home/test-page';

const cookies = new Cookies();

class ReactDefault extends Component {
  state = {
    drawerVisibility: false
  }

  componentDidMount() {
    this.setState({ drawerVisibility: cookies.get('w') ? false : true })
  }
  

  onOkDrawer = () => {
    this.setState({ drawerVisibility: false });
    cookies.set('w', true, { path: '/' });
  }

  getAPI = () => {
    const { data, meta, GetData, RemoveData } = this.props;
    if (meta && data) {
      RemoveData();
    } else {
      GetData();
    }
  }

  render() {
    const { t } = this.props;
    const { drawerVisibility } = this.state;
    const { Text } = Typography;
    return (
      <Row style={{ flexDirection: 'column' }}>
        <ReactDefaultPage />
        <TestPage getAPI={this.getAPI} />
        <Drawer
          title={t('permission.cookiesTitle')}
          placement="bottom"
          onClose={this.onOkDrawer}
          visible={drawerVisibility}
          style={{ display: 'flex', justifyContent: 'space-around' }}
          drawerStyle={{ borderRadius: '50px' }}
          headerStyle={{ borderRadius: '50px' }}
          bodyStyle={{ borderRadius: '50px' }}
          contentWrapperStyle={{ width: '20%' }}
          height="20%"
          closable={false}
        >
          <Row justify="space-around">
            <Text>{t('permission.cookiesDescription')}</Text>
          </Row>
          <Row justify="space-around" style={{ marginTop: 20 }}>
            <Button type="primary" shape="round" onClick={this.onOkDrawer} size="large">{t('common.ok')}</Button>
          </Row>
        </Drawer>
      </Row>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state.homeReducer
});

const mapDispatchToProps = (() => ({
  GetData,
  RemoveData
}))();

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ReactDefault));