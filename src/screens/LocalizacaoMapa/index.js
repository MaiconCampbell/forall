import React, { Component } from 'react';

import Mapa from '~/components/Mapa/index';

export default class LocalizacaoMapa extends Component {
  render() {
    return <Mapa navigation={this.props.navigation}/>;
  }
}
