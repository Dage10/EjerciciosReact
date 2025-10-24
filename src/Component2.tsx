import React,{useContext} from 'react'
import { UserContext } from './MiComponente';

function Component2() {

    const userName = useContext(UserContext);

    return (
        <div>
            <h1>Segon component</h1>
            <h2>{`Adeu ${userName}`}</h2>
        </div>
    );
}

export default Component2;