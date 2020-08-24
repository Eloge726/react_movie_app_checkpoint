import React,{useState}from 'react'
import{Button,Modal} from 'react-bootstrap'
function AddMovie(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = (titre,rate,image) => {setShow(false)
    props.AjoutMovie(titre,rate,image)};
    const handleShow = () => setShow(true);
    const [titre,setTitre]=useState('')
    const [rate,setRate]=useState(0)
    const [image,setImage]=useState('')

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Ajouter un film
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div style={{display:'flex', flexDirection:'column'}}>
              <input type='text' placeholder='titre' onChange={(e)=>setTitre(e.target.value)}/>
              <input type='number' placeholder='rate' onChange={(e)=>setRate(e.target.value)}/>
              <input type='text' placeholder='image' onChange={(e)=>setImage(e.target.value)}/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary" onClick={()=>handleClose(titre,rate,image)}>
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddMovie