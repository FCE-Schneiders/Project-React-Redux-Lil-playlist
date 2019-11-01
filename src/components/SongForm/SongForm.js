import React, { Component } from 'react';
import Button from './../Button/Button';

class SongForm extends Component {
    render () {
        return (
           <div>
               <input type='text'/> 
               <input type='text'/> 
            
               <select name="genre">
               <option></option>
   <option>Soul</option>
   <option>Jazz</option>
   <option>Pop</option>
   <option>Rock</option>
  </select>
  <select name="rating">
   <option></option>
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
  </select>
  <Button />


           </div> 
        )

    }
} 













export default SongForm;