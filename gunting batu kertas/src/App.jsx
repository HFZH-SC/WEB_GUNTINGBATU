import { useState } from 'react'
import './App.css'

// Fungsi utama aplikasi
function App() {
  // Mendefinisikan state untuk pilihan pemain, pilihan komputer, hasil, skor pemain, dan skor komputer
  const [playerChoice, setPlayerChoice] = useState(null) // State untuk menyimpan pilihan pemain
  const [computerChoice, setComputerChoice] = useState(null) // State untuk menyimpan pilihan komputer
  const [result, setResult] = useState("") // State untuk menyimpan hasil permainan
  const [playerScore, setPlayerScore] = useState(0) // State untuk menyimpan skor pemain
  const [computerScore, setComputerScore] = useState(0) // State untuk menyimpan skor komputer

  // Daftar pilihan yang tersedia dalam permainan
  const choices = ["Gajah", "Orang", "Semut"]

  // Fungsi yang dipanggil ketika pemain memilih salah satu pilihan
  const handleClick = (choice) => {
    setPlayerChoice(choice) // Menyimpan pilihan pemain ke state
    // Komputer memilih secara acak dari daftar pilihan yang tersedia
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice) // Menyimpan pilihan komputer ke state
    determineWinner(choice, randomChoice) // Menentukan pemenang berdasarkan pilihan pemain dan komputer
  }

  // Fungsi untuk menentukan pemenang berdasarkan pilihan pemain dan komputer
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("Seri!") // Jika pilihan pemain dan komputer sama, hasilnya seri
    } else if (
      (player === "Gajah" && computer === "Orang") ||
      (player === "Orang" && computer === "Semut") ||
      (player === "Semut" && computer === "Gajah")
    ) {
      setResult("Kamu Menang!") // Jika pemain menang, set hasil ke "Kamu Menang!"
      setPlayerScore(playerScore + 1) // Tambahkan skor pemain
    } else {
      setResult("Kamu Kalah!") // Jika pemain kalah, set hasil ke "Kamu Kalah!"
      setComputerScore(computerScore + 1) // Tambahkan skor komputer
    }
  }

  // Render tampilan aplikasi
  return (
    <div className="App">
      <h1>Game Suit Gajah-Orang-Semut</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice} {/* Tombol untuk setiap pilihan */}
          </button>
        ))}
      </div>
      <div className="result">
        <p>Pilihan Kamu: {playerChoice}</p> {/* Menampilkan pilihan pemain */}
        <p>Pilihan Komputer: {computerChoice}</p> {/* Menampilkan pilihan komputer */}
        <p className={result === "Kamu Menang!" ? "win" : result === "Kamu Kalah!" ? "lose" : "draw"}>
          Hasil: {result} {/* Menampilkan hasil permainan */}
        </p>
      </div>
      <div className="score">
        <p>Skor Kamu: {playerScore}</p> {/* Menampilkan skor pemain */}
        <p>Skor Komputer: {computerScore}</p> {/* Menampilkan skor komputer */}
      </div>
    </div>
  )
}

export default App
