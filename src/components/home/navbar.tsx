import React from 'react';
import {Button} from "@heroui/react";



const Navbar = () => {
    return (
        <div className="container mx-auto w-full bg-blue-500"> 
             <div className=" flex items-center justify-evenly">
           <h1>Anwar Tv</h1>
           <div>
              <Button variant="outline">Sign-in</Button>
                <Button variant="danger">Sign-up</Button>
           </div>
        </div>
        </div>
        
    );
};

export default Navbar;