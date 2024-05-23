import { useSelector } from "react-redux";
import MainSection from "../components/home/MainSection";
import imageUrl from '../assets/model.avif'
const Home = () => {
  const userData = useSelector((state) => state.auth?.userData);

  return (
    <div  style={{ backgroundImage: `url(${imageUrl})` }} >
    <h2>h</h2>
    </div>
  );
};

export default Home;
