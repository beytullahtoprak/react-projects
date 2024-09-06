import './App.css'

function App() {

  let a = 5;
  const firstName = "Beytullah";

  let isimler = [
    'ali',
    'veli',
    'enes'
  ]

  return(
    <div>
      {
        isimler.map((isim, index)=>(
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black',
            padding: '5px',
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
