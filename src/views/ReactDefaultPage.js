import React, { Component } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { GetData, RemoveData } from '../components/Home/store/home-action'
import ReactDefaultPage from '../components/Home/react-default-page';
import TestPage from '../components/Home/test-page';

class ReactDefault extends Component {
  getAPI = () => {
    const { data, meta, GetData, RemoveData } = this.props;
    if (meta && data) {
      RemoveData();
    } else {
      GetData();
    }
  }

  render() {
    return (
      <Row style={{ flexDirection: 'column' }}>
        <ReactDefaultPage />
        <TestPage getAPI={this.getAPI} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReactDefault);