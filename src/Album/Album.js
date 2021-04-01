import React from 'react'


const Album = ({album}) =>{
    return(
        <tr key={album.id}>
            <td>
                {album.id}
            </td>
            <td>    
                {album.title}
            </td>
            <td>    
                <img src={album.url} href="https://via.placeholder.com/150/92c952" width="100" heigth="100"/>
            </td>
         </tr>
    )
}
export default Album
