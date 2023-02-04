import './App.css'

function App() {
  return (
    <>
    {/* Image/Header */}
    <div className='parent'>
    <img src="/header.gif" width="600px" id="gifheader" className='sticky'></img>
    <img src='/logo.png' className='sticky' id="logo"></img>
    </div>
    {/* Texts */}
    <div className='text'>
    <h1 ><strong>A Brief Introduction</strong></h1>
    <p className='subtext'>
      I am a self-taught developer I am capable of fullstack applications,although I find I am better at writing frontend applications<br></br>I like to use technoligies such as Rust and ReactJS.I love what I do and it is a passion I have come to love.
      <br></br>
      I am currently developing my own programming language called ferric in Rust, I do intend to later bootstrap this programming language.
      <br></br>
      I currently do freelance work and make websites for my friends or myself. I thouroughly enjoy the process of web design and working with others.
      <br></br>
      Currently on the Robotics and STEAMBowl team at my school.
      <br></br>
      I find that I am great in taking a leadership role and working with others,I am pretty decent at CAD software (ex. SOLIDWORKS) and make little trinkets in my spare time as a hobby.
      <br></br>
      You can email me at wijiler@gmail.com
    </p>
    </div>
    </>
    
  )
}

export default App
