import React from "react";
import ReactDOM from "react-dom";
import {
    Container
} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

import Chat from 'chat/Chat';

const App = () => (
    
    <Container>
    <h1>Header hahahahahahaha</h1>
    <h1>Some Text here</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam illo nesciunt recusandae voluptates doloremque. Quisquam modi repellendus nesciunt, nemo culpa ratione eos perspiciatis perferendis id!</p>
    <div>
    ReactChat!!!
    <Chat />
    </div>

    </Container>
    

);
ReactDOM.render(<App />, document.getElementById("app"));
