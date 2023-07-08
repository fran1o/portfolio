import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from '../../css/home.module.css'
import Spinner from 'react-bootstrap/Spinner';

function Contacto() {

  const [loading, setLoading] = useState(true)

  setTimeout(() =>{
    
    setLoading(false)
  }, 2000)

  return (
    <>
    {
      loading ? <Spinner className={styles.loading} animation="border" role="status">
      <span></span>
  </Spinner> : <body>

  <div className={styles.divContacto}>
    <Card className={styles.cardContacto}>
      <Card.Body>
        <Card.Title>Contacto</Card.Title>
        <Card.Text>
        Para ponerte en contacto conmigo puedes mandar un mail a pankha994@gmail.com
                                  o directamente me podes contactar al 099 134 664.
                                    Gracias por visitar mi portfolio!

        </Card.Text>
        <Link to="/portfolio" >
        <Button variant="primary">Volver al inicio</Button>
        </Link>
        
      </Card.Body>
    </Card>

    </div>
    

  </body>
    }
    
    

    </>
  );
}


export default Contacto;