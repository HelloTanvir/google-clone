import { makeStyles } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchTextContext } from '../../contexts/SearchTextContext';
import * as types from '../../utils/actionTypes';
import Classes from './InputBox.module.css';

const useStyles = makeStyles({
    searchIcon: {
        color: '#9aa0a6',
        height: 20,
        width: 20,
    },
    micIcon: {
        color: '#4285f4',
        cursor: 'pointer',
    },
});

const InputBox = () => {
    const classes = useStyles();

    const history = useHistory();

    const { dispatch } = useContext(SearchTextContext);

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text) return;

        dispatch({ type: types.STORE_QUERY_TEXT, payload: { text } });
        history.push('/search');
    };

    return (
        <div className={Classes.inputBoxWrapper}>
            <form onSubmit={handleSubmit} className={Classes.inputBox}>
                <SearchIcon className={classes.searchIcon} />
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <MicIcon className={classes.micIcon} />
            </form>
        </div>
    );
};

export default InputBox;
