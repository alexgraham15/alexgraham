import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Hero from './Hero'
import Menu from './Menu'
import { openMenu, closeMenu } from '../Actions/menuActions'
import '../CSS/App.css';

function mapStateToProps(store) {
  return { 
    menu: store.menuLayout.menuOpen,
    menuVisable: store.menuLayout.menuVisable
  }
}
function mapDispatchToProps(dispatch) { 
  return { 
    dispatch, 
    menuOpen:bindActionCreators(openMenu, dispatch),
    menuClose:bindActionCreators(closeMenu, dispatch)
  } 
}

class App extends Component{
  render(){
    return (
      <Router>
        <Route path="/" render={(props) => <Menu {...props} nav={this.props}/>}  />
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route  exact path="/" render={(props) => <Hero className={"Hero "+this.props.menuVisable} {...props} nav={this.props}/>}  />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



        // {/* <Suspense fallback={<h1>Still Loading…</h1>}> */}
        // <Route path="/" render={(props) => <Menu {...props} nav={this.props}/>}  />
        // <div className="App">
        // <AnimatedSwitch 
        //   animationClassName="page-slide" 
        //   animationTimeout={1000}
        // >
        //     <AnimatedRoute  exact path="/" render={(props) => <Hero className={"Hero "+this.props.menuVisable} {...props} nav={this.props}/>}  />
        //     <AnimatedRoute  exact path="/AboutMe" render={(props) => <AboutMe className={"AboutMe "+this.props.menuVisable} {...props} nav={this.props}/>}/>
        //     <AnimatedRoute  exact path="/Projects" render={(props) => <Projects className={"Projects "+this.props.menuVisable} {...props} nav={this.props}/>}/>
        //     <AnimatedRoute  exact path="/CV" render={(props) => <CV className={"CV "+this.props.menuVisable} {...props} nav={this.props}/>}/>
        //     <AnimatedRoute  exact path="/Contact" render={(props) => <Contact className={"Contact "+this.props.menuVisable} {...props} nav={this.props}/>}/>
        //   </AnimatedSwitch>
        //   </div>
        //   {/* </Suspense> */}
      