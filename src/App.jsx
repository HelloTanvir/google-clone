import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/Home';
import SearchResult from './pages/searchResultPage/SearchResult';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/search" component={SearchResult} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default App;
