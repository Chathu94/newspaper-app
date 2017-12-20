/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab } from 'react-bootstrap';

import H1 from 'components/H1';
import messages from './messages';
import PageContainer from 'components/PageContainer';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component

  constructor(props) {
    super(props);
    this.state = {
      active: 'basket'
    };
  }

  render() {
    const { active } = this.state;
    console.log('state', active);
    return (
      <div>
        <Helmet>
          <title>Order Newspapers</title>
          <meta name="description" content="Newpaper buying page" />
        </Helmet>
        <PageContainer>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className={`nav-link${active == 'basket' ? ' active' : ''}`} data-toggle="tab" onClick={() => { this.setState({ active: 'basket' }); }}>Shopping Basket</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active == 'cinfo' ? ' active' : ''}`} data-toggle="tab" onClick={() => { this.setState({ active: 'cinfo' }); }}>Customer Details</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active == 'dopt' ? ' active' : ''}`} data-toggle="tab" onClick={() => { this.setState({ active: 'dopt' }); }}>Delivery Options</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active == 'payment' ? ' active' : ''}`} data-toggle="tab" onClick={() => { this.setState({ active: 'payment' }); }}>Payment Methods</a>
            </li>
          </ul>
          <div id="tabs" className="tab-content">
            <div className={`tab-pane fade${active == 'basket' ? ' active show' : ''}`} id="basket">
              Basket
            </div>
            <div className={`tab-pane fade${active == 'cinfo' ? ' active show' : ''}`} id="cinfo">
              Customer Info
            </div>
            <div className={`tab-pane fade${active == 'dopt' ? ' active show' : ''}`} id="dopt">
              Dilivery options
            </div>
            <div className={`tab-pane fade${active == 'payment' ? ' active show' : ''}`} id="payment">
              Payment
            </div>
          </div>
        </PageContainer>
      </div>
    );
  }
}
