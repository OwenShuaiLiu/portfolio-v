import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component{
  state = {displayBio: false};
  toggleDisplayBio = () => {
      this.setState({displayBio: !this.state.displayBio});
  }
  render() {
      return (
          <div>
              <a href= "https://www.linkedin.com/in/owen-shuai-liu/">
                <img src={profile} alt='profile' className="profile"/>
              </a>
              
              <h1>Hello!</h1>
              <p>My name is Owen.</p>
              <Title />
              <p>I'm always looking forward to working on meaningful projects.</p>
              {
                  this.state.displayBio? (
                      <div>
                          <p>I live in Mountain View, practice every day.</p>
                          <p>My favourite language is Python, and I think React.js is also awesome.</p>
                          <p>Besides practicing, I also love sports and reading.</p>
                          <button onClick={this.toggleDisplayBio}>Show less</button>
                      </div>
                  ) : (
                      <div>
                          <button onClick={this.toggleDisplayBio}>Read more</button>
                      </div>
                  )
              }
              <hr />
              <Projects />
              <hr />
              <SocialProfiles />
          </div>
      )
  }
}


export default App;
