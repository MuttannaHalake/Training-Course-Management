import React from "react";
import { Card, CardBody } from "reactstrap";

 function Header({name,tittle})
{
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                <h1 className="text-center my-2">Well come to Course Apllication</h1>
                </CardBody>
            </Card>
        
    </div>
    );
   
};
export default Header;