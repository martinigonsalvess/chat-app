import React from 'react'



const name = "Johny Doe";
const avatar = "https://laughingsquid.com/wp-content/uploads/tumblr_m3kqhs4OHy1qf8rjmo1_1280.jpg";
const isOnline = true;

class Contact extends React.Component {

    render() {
        return (
            <div className="Contact">
                {<img className="avatar" src={avatar} alt="John"></img>}

                <div className="name"><b>{name}</b>
                
                    <div className="status">
                        <div className="status-text">

                            {isOnline ? <div className="status-online">online</div> :
                                <div className="status-offline">offline"</div>}
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
export default Contact;