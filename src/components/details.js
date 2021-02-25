import React, { Component } from 'react';

export default class Details extends Component {
  renderChildren = () => {
    const { links, requirements } = this.props;
    let children;

    if (links) {
      children = (
        <div className='details__links'>
          { 
            links.map(link => {
              return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
          }
        </div>
      )
    } else if (requirements) {
      children = (
        <div className='details__requirements'>
          { 
            requirements.map(requirement => {
              return <div key={requirement._id} className='details__requirement'>{requirement.title}</div>
            })
          }
        </div>
      )
    }
    return children;
  }
  render() {
    const { className, title, links } = this.props;
    return (
      <div className={`${className} details`}>
        <div className='details__title'>{title}</div>      
        {
          this.renderChildren()
        }     
      </div>
    )
  }
}