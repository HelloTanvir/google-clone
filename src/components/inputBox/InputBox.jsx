import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

const InputBox = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <SearchIcon />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <MicIcon />
        </div>
    );
};

export default InputBox;
