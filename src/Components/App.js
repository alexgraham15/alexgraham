import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Menu from './Menu'
import Projects from './Projects'
import Contact from './Contact'
import { openMenu, closeMenu } from '../Actions/menuActions'
import { updateName, updateEmail, updateMessage } from '../Actions/contactFromActions'
import '../CSS/App.css';

function mapStateToProps(store) {
  return { 
    menu: store.menuLayout.menuOpen,
    name: store.contactFormInfo.name,
    email: store.contactFormInfo.email,
    message: store.contactFormInfo.message
  }
}

function mapDispatchToProps(dispatch) { 
  return { 
    dispatch, 
    menuOpen:bindActionCreators(openMenu, dispatch),
    menuClose:bindActionCreators(closeMenu, dispatch),
    nameUpdate:bindActionCreators(updateName, dispatch),
    emailUpdate:bindActionCreators(updateEmail, dispatch),
    messageUpdate:bindActionCreators(updateMessage, dispatch)
  } 
}

class App extends Component{
  render(){
    return (
      <Router>
        <Route path="/" render={(props) => <Menu {...props} nav={this.props} />}  />
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route  exact path="/" render={(props) => <Hero className={"Hero"} {...props} nav={this.props}/>}  />
              <Route  exact path="/AboutAlex" render={(props) => <AboutMe className={"AboutAlex"} {...props} nav={this.props}/>}  />
              <Route  exact path="/Projects" render={(props) => <Projects className={"Projects"} {...props} nav={this.props}/>}  />
              <Route  exact path="/Contact" render={(props) => <Contact className={"Contact"} {...props} nav={this.props}/>}  />
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
      