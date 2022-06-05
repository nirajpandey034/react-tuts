import React from "react";
import TextField from '@mui/material/TextField';

function FunctionalComponent() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

export default FunctionalComponent;
