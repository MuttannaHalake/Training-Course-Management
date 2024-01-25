import React, { useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = () => {
  useEffect(()=>{
    document.title="Home || Braincodewith Mutturaj"
  }, []);
  return (
    <div style={{color:"white"}}>
      <Jumbotron className="text-center bg-secondary"  style={{height:"150px"}}>
        <h1 >Braincode with Mutturaj</h1>
        <p>
          "This app is designed solely for the purpose of course enrollment"
        </p>
        <Button color="primary" outline>
          Start Using
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Home;
