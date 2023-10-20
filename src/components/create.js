import { useState } from "react";

function Create()
{
    const[title, setTitle] = useState(''); // Set book title
    const[cover, setCover] = useState(''); // Set book cover
    const[author, setAuthor] = useState(''); // Set book author

    // Displays the new book in the console
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: " + title + ", Cover: " + cover + ", Author: " + author);
    }

    return(
        <div>
            <h3>Hello from create</h3>

            {/* Form for adding new book */}
            <form onSubmit={handleSubmit}>
                
                {/* Input for adding book title */}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title} // Sets value of input box to title
                    onChange={(e) => { setTitle(e.target.value) }} // Update title when value in input box changed
                    />
                </div>

                {/* Input for adding book cover */}
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                    className="form-control"
                    value={cover} // Sets value of input box to cover
                    onChange={(e) => { setCover(e.target.value) }} // Update cover when value in input box changed
                    />
                </div>

                {/* Input for adding book author */}
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={author} // Sets value of input box to author
                    onChange={(e) => { setAuthor(e.target.value) }} // Update author when value in input box changed
                    />
                </div>

                {/* Calls handleSubmit when clicked */}
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>

            </form>
        </div>
    );
}

export default Create;