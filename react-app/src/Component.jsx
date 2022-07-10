import { io } from "socket.io-client";
import { useState } from "react";

const Component = () => {
    const [socketId, setSocketId] = useState('');

    const connect = () => {
        const socket = io('ws://localhost:80/');

        socket.connect();
        socket.on('connect', () => setSocketId(socket.id));
        socket.send('Hello!');
    }

    return (
        <div className="main">
            <h1>{socketId ? 'Connected:' : 'Waiting'}
                <span>{socketId}</span>
            </h1>
            <button onClick={() => connect()}>Say Hello!</button>
        </div>
    );
}

export default Component;