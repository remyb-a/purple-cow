import countapi from 'countapi-js';
import { useEffect, useState } from 'react';
import './Counter.css';

function Counter() {
    const [clickCount, setClickCount] = useState();

    useEffect(() => {
        countapi.get('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
            .then(result => { setClickCount(result.value) });
    }, []);

    const incrementCount = async () => {
        let result = await countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e');
        setClickCount(result.value)
    };

    return (
        <div>
            <p className='Count-header'>Cow Clicks: {clickCount}</p>
            <button onClick={() => incrementCount()}>
                Cow Clicker
            </button>
        </div>
    );
}

export default Counter;