import './App.css';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Card} from 'react-bootstrap'

function App() {

  const[image,setImage]=useState([])

  useEffect(()=>{
    
    async function loadImage(){
      var imageparams={
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },
      }

      var getImage=await fetch('https://random-d.uk/api/random',imageparams)
      .then(Response=>Response.json())
      .then(data=>{
        console.log(data.url)
        setImage(data)
      })

    }

    loadImage()
  })

  return(
    <Container className='m-auto'>
      <Row className='col-10'>
        <Card>
          <Card.Img src={image.url} />
        </Card>
      </Row>
    </Container>
  );
}

export default App;
