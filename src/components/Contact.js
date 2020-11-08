import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component {
    render() {
        const{avatar, name, isOnline} = this.props;
        

        return (
            <div className="Contact">
                {<img className="avatar" src={avatar} alt="John"></img>}

                <div>
                    <p className="name"><b>{name}</b></p>
                    <div className="status">                   
                        <div className={isOnline ? 'status-online' : 'status-offline'}></div>
                        <div className="status-text">{isOnline ? 'online' : 'offline'}</div>                      
                    
                    </div>

                </div>
            </div>
            
        )
    }
}
Contact.propTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
  };
export default Contact;





