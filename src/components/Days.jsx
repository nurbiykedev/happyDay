import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Background from './Background';


const Days = () => {
  const { id } = useParams();

  const createHearts = () => {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 2000); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createHearts();
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <Background/>
      <h1 style={{ fontSize: "8em" }}>Happy birthday my sister!</h1>
      <h2>I Love You 💖 </h2>
      <p>Эжекооу! Туулган кунунуз менен! Сизди катту жакшы кором. Бейишке жакындашыныз кут болсун💕 Эки дуйно бактылуулук берсин Аллахым...</p>
      <p>
        Сестричка, с днём рождения! Пусть этот день принесёт тебе море радости, вдохновения и невероятных сюрпризов! <br /> Ты - не только моя родная сестра, но и надёжный опора и лучший друг. Пусть счастье сопутствует тебе на каждом шагу,  <br />а успехи и достижения будут сопровождать твой путь. С любовью и лучшими пожеланиями в твой особенный день! 🎉🎂💖</p>

      <p>Dear sister, on your birthday, I want to celebrate the amazing person you are. <br /> Your kindness, strength, and love inspire everyone around you, including me. May your day be filled with <br /> all the things that bring you joy and may the year ahead be even brighter and more fulfilling. Happy birthday, sis! 🎉🎂💕 </p>
      <p>소중한 여동생에게! 이 특별한 날을 축하합니다! 당신은 나의 여동생일 뿐만 아니라, 나의 가장 친한 친구이며, <br /> 삶의 모든 기쁨과 슬픔을 함께 나눌 수 있는 사람입니다. 당신의 친절함, 힘, 그리고 사랑은 항상 나를 더 나은 사람으로 이끌어 주었습니다. <br /> 이 날이 행복과 웃음으로 가득하고, 앞으로의 해가 새로운 기회와 번영만을 가져다 줄 것을 바랍니다. 생일 축하해, 내 소중한 여동생! 사랑해요! 🎉🎂💖</p>

      <div id="heart-container"></div>
    </div>
  );
};

export default Days;
