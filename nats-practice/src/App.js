import React, { useState, useEffect } from 'react';
import { connect } from "nats.ws";

// const sc = StringCodec();

function App() {

  const [nc, setConnection] = useState(undefined);
  const [lastError, setError] = useState("");

  const run = async () => {

    if (nc === undefined) {
      
      await connect({
        servers: process.env.REACT_APP_TITLE,
        user: process.env.REACT_APP_NATS_USER,
        pass: process.env.REACT_APP_NATS_PASS,
      })
        .then(nc => {
          setConnection(nc);
        })
    }
  }

  useEffect(() => {
    run();
  })
  
  const state = nc ? "connected" : "not yet connected";

  return (


    < div className = "App" >
       <h1>{state}</h1>
    </div >
  );
}

export default App;
