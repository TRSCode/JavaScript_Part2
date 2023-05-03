import{Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1 style={{ color: "red" }}>
                Home Component
            </h1>
            <Link to={"/about"}>Go to about</Link>
        </div>
    )
}

export default Home;