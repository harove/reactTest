import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Album from './Album/Album'


function App() {

  const [albunes,setAlbunes]= useState([])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6').then((response)=>{  
      setAlbunes(response.data)
    })
  },[] )



  return (
    <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>    
                            Title
                        </th>
                        <th>    
                            Imagen
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {albunes.map(album=>{
                    return(
                      <Album album = {album}/>
                    )
                  })}
                </tbody>
            </table>
    </div>
  );
}

export default App;




