import React from 'react';
import './../kambo-apts.css'

const KamboApts = () => {
    return (
      <div id="kamboApts">
        <h4>Kambo Appointment</h4>
        <iframe
          src="https://sagenda.net/Frontend/5ca972699b0837872ca0b4db"
          width="100%"
          height="1200"
          frameborder="0"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation allow-scripts allow-forms"
        />
      </div>
    );
};

export default KamboApts;