import logo from '../../assets/images/google-logo.gif';
import InputBox from '../../components/inputBox/InputBox';
import Classes from './Home.module.css';

const Home = () => (
    <div className={Classes.homePage}>
        <img src={logo} alt="Goole Logo" className={Classes.logo} />
        <InputBox />
    </div>
);

export default Home;
