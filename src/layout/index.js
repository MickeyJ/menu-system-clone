import React, {Component, PropTypes} from 'react'

import * as dropMenu from '../helpers/drop-menu'

import Header from './header'
import Menu from './menu'

export default class Layout extends Component{
  constructor(){
    super();
    this.state = {
      menuActive: false,
      routeHash: ''
    }
  }
  getMenuElement(ref){
    this.menuElement = ref
  }
  getBackgroundFadeElement(ref){
    this.bgFadeElement = ref
  }
  componentDidMount(){
    this.context.router.listen((route) =>{
      this.resetMenu(route.hash)
    });
  }
  toggleMenu(){
    dropMenu.toggle(this.menuElement, this.bgFadeElement);
    this.setState({ menuActive: !this.state.menuActive });
  }
  resetMenu(route){
    dropMenu.reset(this.menuElement, this.bgFadeElement);
    this.setState({
      menuActive: false,
      routeHash: route
    });
  }
  render(){
    return(
      <div id="wrapper">

        <div id="top-container">
          <Header
            toggleMenu={this.toggleMenu.bind(this)}
            menuActive={this.state.menuActive}
          />
          <Menu getSelf={this.getMenuElement.bind(this)} />
        </div>

        <main id="main-container">
          <div
            id="bg-fade"
            onClick={() => this.resetMenu(this.state.routeHash)}
            ref={(ref) => this.getBackgroundFadeElement(ref)}>
          </div>
          {React.cloneElement(this.props.children, {
            routeHash: this.state.routeHash
          })}
        </main>

      </div>
    )
  }
}

Layout.contextTypes = {
  router: PropTypes.object
};

export default Layout
