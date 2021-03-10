import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import logo from '../../assets/images/logo.svg';

const ReactDefaultPage = () => {
  const { t, i18n } = useTranslation();
  const { Option } = Select;
  const [Lng, setLng] = useState(localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "en")
  const handleLng = (lang) => {
    i18n.changeLanguage(lang);
    setLng(lang);
  }
  
  const lngList = [
    {
      lng: "en",
      countryCode: "us"
    },
    {
      lng: "ja",
      countryCode: "jp"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Row style={{ position: 'absolute', top: 10, right: 10 }}>
          <Select
            onChange={handleLng}
            style={{ width: 80 }}
            value={Lng}
          >
            { lngList.map(item => {
              return (
                <Option key={item.lng}><ReactCountryFlag countryCode={item.countryCode.toUpperCase()} svg style={{ width: '2em' }} /></Option>
              )
            }) }
          </Select>
        </Row>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('reactDefault.title')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('reactDefault.subtitle')}
        </a>
        <Link to="Overview" spy={true} smooth="easeInOutQuad" duration={1000} style={{ color: 'white', marginTop: 30 }}>
          <div>{t('reactDefault.scrollItem')}</div>
          <div>
            <ArrowDownOutlined color="#fff" />
          </div>
        </Link>
      </header>
    </div>
  )
}

export default ReactDefaultPage;