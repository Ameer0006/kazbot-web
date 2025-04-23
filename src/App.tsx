import './App.css'
import avatar from './assets/Молодой человек в традиционном головном уборе.png'

function App() {
  return (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка 🇰🇿</p>

      <div className="buttons">
        <button>📚 Начать обучение</button>
        <button>🧠 Повторение</button>
        <button>🎮 Игровой режим</button>
      </div>

      <footer>@kzKazakhbot</footer>
    </div>
  )
}

export default App

