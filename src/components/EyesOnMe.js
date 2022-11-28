// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    return <button onBlur={()=> console.log('Good!')} onFocus={()=> console.log("Hey! Eyes on me!")}>Eyes on me</button>
}

export default EyesOnMe