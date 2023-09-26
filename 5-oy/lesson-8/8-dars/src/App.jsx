import { useState } from 'react'
import './App.scss'
import{Button,Modal,Dropdown,Carousel} from 'react-bootstrap'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <div className='d-flex align-items-center flex-column hero'>
      <h1 className='mb-5'>hammaga salom</h1>
      <div className='d-flex justify-content-center gap-5' >
        <Button variant='success' onClick={()=>{
          setShow(true)
        }}>salom</Button>
        <Modal show={show} onHide={()=>{
          setShow(false)
        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellat commodi accusamus magnam provident enim in harum soluta delectus, et vitae quisquam quis vel tenetur id necessitatibus rerum inventore! Placeat ad fugit sint eligendi, quod molestias, necessitatibus veniam dolor quia soluta aliquid vitae itaque sunt deleniti fugiat! Fugit odit alias magnam similique, perferendis quia ut inventore cumque, natus rerum quae fugiat nostrum laudantium consequatur. Adipisci consequatur consequuntur, mollitia quas dolor veritatis corporis eaque dolorem natus qui impedit in dolores tempora id suscipit delectus ea dicta eius minima saepe nobis ad et nihil! Quisquam, ipsam tenetur velit at est repellat iste.</Modal>

      <Dropdown className=''>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      </div>

    </div>
    <div className='d-flex justify-content-center'>
    <Carousel className='mt-5 w-50 '>
      <Carousel.Item interval={1000}>
        <img
          className="d-block    w-100 "
          src="/img.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block  w-100"
          src="/img2.jpg"
          alt="Second slide "
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block    w-100"
          src="/img3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   </>
     
  )
}

export default App
