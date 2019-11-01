import React, { Component } from 'react';
import classes from './SongForm.css';
import Button from './../Button/Button';

class SongForm extends Component {
    render() {
        return (
            <div className="song-form">
                <table className="song-form-table">
                    <tr>
                        <td><input className="song-form-items" type="text" /></td>
                        <td><input  className="song-form-items" type="text" /></td>
                        <td><select className="song-form-items"  name="Genre" widt="100%">
                            <option value="Rock">Rock</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Pop">Classic</option>
                            <option value="Other">Other</option>
                            </select> 
                        </td>

                        <td><select className="song-form-items" name="Rating" widt="100%">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select> </td>
                        <td> <Button /></td>
                    </tr>
                </table>
            </div>
                )
            }
        } 
        
        
        
        
        
        
        
        
        
        
        
        
        
export default SongForm;