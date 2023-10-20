import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read()
{
    // Set book data
    const[data, setData] = useState([]); 
    
    // React hook
    useEffect(
        ()=>{
            // Asynchronously make http request to jsonblob to get book data
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then( // Callback function
                (response)=>{
                    setData(response.data.books) // Store books data if api call was succsessful
                }
            )
            .catch( // Callback function
                (error)=>{
                    console.log(error); // Display error message to console if api call was unsuccsessful
                }
            );

        },[]
    )

    return(
        <div>
            {/* Display the Books component and passing the data variable to it*/}
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;