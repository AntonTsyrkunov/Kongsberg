import { useState } from "react";

const Header = ({onSubmit}) => {
    const [querry, setQuerry] = useState("");

    const handleInputChange = (e) => {
        setQuerry(e.target.value);
    }

    const handleSearch = evt => {
        evt.preventDefault();
        onSubmit(querry);
        setQuerry('');
      };

    return(
    <header>
        <img src="" alt="" />
        <form onSubmit={handleSearch}>
            <p></p>
        <input
            name="querry"
            value={querry}
            type="text"
            autoComplete="off"
            autoFocus
            placeHolder="Search books by it's name"
            onChange={handleInputChange}
          />
          <button type="submit">Perform search</button>
        </form>
    </header>
    )
}

export {Header};