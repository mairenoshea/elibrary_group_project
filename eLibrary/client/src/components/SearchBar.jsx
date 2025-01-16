
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../views/ViewOneBook.css'

const SearchBar = (props) => {
    const { onSearch } = props;

    const [currentQuery,setCurrentQuery]=useState();

    const [currentID, setCurrentID]=useState();

    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSearch(currentQuery);
        navigate(`/Search/${currentQuery}`);
    }

    return (
        <div className="flex-container">
            <form onSubmit={handleSubmit} className="search-bar">
                <label>Search for:</label>
                
                <input type="text" onChange={(e)=>{setCurrentQuery(e.target.value)}}>
                </input>
                <input type="submit" value="search"></input>
            </form>
        </div>
    )
}
export default SearchBar;