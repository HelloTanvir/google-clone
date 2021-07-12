import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/google-logo.gif';
import InputBox from '../../components/inputBox/InputBox';
import { SearchTextContext } from '../../contexts/SearchTextContext';
import Classes from './SearchResult.module.css';

const SearchResult = () => {
    const { queryText } = useContext(SearchTextContext);
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${queryText}`
                );

                setApiResponse(response.data);
                console.log(response.data.items);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [queryText]);

    return (
        <div>
            <div className={Classes.header}>
                <Link to="/">
                    <img src={logo} alt="google logo" className={Classes.logo} />
                </Link>
                <InputBox />
                <div className={Classes.icons}>
                    <SettingsIcon />
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>

            {apiResponse && (
                <div className={Classes.results}>
                    <p className={Classes.resultStats}>
                        About {apiResponse?.searchInformation.formattedTotalResults} results (
                        {apiResponse?.searchInformation.formattedSearchTime} seconds)
                    </p>

                    {apiResponse?.items.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index} className={Classes.resultItem}>
                            <a href={item.link} className={Classes.displayLink}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                                    )}
                                {item.displayLink} <ArrowDropDownIcon />
                            </a>

                            <a href={item.link} className={Classes.title}>
                                <h3>{item.title}</h3>
                            </a>

                            <p className={Classes.snippet}>{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResult;
