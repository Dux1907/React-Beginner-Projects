import React from "react";
import { useState } from "react";
const Search = () => {
    const [prev, final] = useState()
    const [photo, newPhoto] = useState({
        link: '',
        description:''
    })
    const handleChange = (e) => {
        final(e.target.value)
        call(e.target.value)
    }
    const call = async(val) => {
        const a = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${val}&client_id=JA7JITAe1bCMRfTBi4zoZHanWjJIKfeNHg0Ld_ijUhM`)
        let b = await a.json()
        console.log(b.results[0].alt_description)
        newPhoto(() => {
            return {
                link: b.results[0].urls.raw,
                description: b.results[0].alt_description
            }
        })
    }
  return (
    <>
      <div className="input-group m-3" style={{ maxWidth: "300px" }}>
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type something"
          aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={prev}
                  onChange = {handleChange}
        />
          </div>
          <img src={photo.link} style={{ width: '300px', margin: '30px' }} alt={prev} />
          <h4 style ={{margin : '13px',marginLeft : '30px'}}>{photo.description}</h4>
    </>
  );
};

export default Search;
