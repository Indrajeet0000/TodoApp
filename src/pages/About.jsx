import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (

    <>
    About 
    <button onClick={() => navigate("/")}>
      Back
    </button>
    </>
  );
};


export default About