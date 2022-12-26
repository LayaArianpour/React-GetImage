import './App.css';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Card} from 'react-bootstrap'

function App() {

  const[myimage,setImage]=useState([])

  useEffect(()=>{
    
    async function loadImage(){
      var imageparams={
        method:'GET',
        Headers:{
          'Content-Type':'application/json'
        },
      }

      // eslint-disable-next-line no-unused-vars
      var getImageFromApi=await fetch('https://random-d.uk/api/random',imageparams)
      .then(Response=>Response.json())
      .then(data=>{
        setImage(data)
        console.log(myimage.url)
      })

    }

    loadImage()
  })

  return(
    <Container className='m-auto'>
      <Row className='col-10'>
        <Card>
          <Card.Img src={myimage.url} />
          <Card.Title>{myimage.url}</Card.Title>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
