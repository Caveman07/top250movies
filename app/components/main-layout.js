import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import Scrollparent from "scrollparent";

export default class MainLayout extends React.Component {

  toTop() {
    document.getElementById('hey').scrollTop = 0
  }

  render() {
    return (
      <div className="app" id='maybethis'>
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul className="aside-menu">
            <li><Link to="/home" activeClassName="active">Home</Link></li>
            <li><Link to="/" activeClassName="active">Top 250 Movies</Link></li>
            <li><Link to="/" activeClassName="active">Love Movies</Link></li>
            <li><Link to="/" activeClassName="active">Comedies</Link></li>
            <li><Link to="/" activeClassName="active">Cosmos</Link></li>
            <li><Link to="/" activeClassName="active">Drama</Link></li>
            <li><Link to="/" activeClassName="active">Zombies</Link></li>
            <li><Link to="/" activeClassName="active">History</Link></li>
            <li><Link to="/" activeClassName="active">Horror</Link></li>
            <li><Link to="/" activeClassName="active">Documentaries</Link></li>
            <li><Link to="/" activeClassName="active">Fantasy</Link></li>
          </ul>
        </aside>
        <main id='here'>
          {this.props.children}
          <button className='buttonToTop' ref='buttontop' onClick={this.toTop}> To the top</button>
        </main>
      </div>
    );
  }
};
