import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckDouble } from "react-icons/fa6";


const Hero = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleSave = () => {
    if (password === "20021228121820") {
      navigate('/day');
    } else {
      alert("Неправильный пароль!");
    }
  };

  return (
    <>
      <div className="heros">
        <div className="hero">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            style={{ width: 360, height: 40, padding: "0 20px" }}
          />
          <button onClick={handleSave}><FaCheckDouble />
          </button>
          <div className="loading">
            <div className="cards"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
