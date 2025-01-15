const SearchBar = (props) => {
    const {data, onSearch} = props;
    const query=Object.keys(data);
    console.log(data);


    const [currentQuery,setCurrentQuery]=useState(query);
    const [currentGenre, setCurrentGenre] = useState();
    const [currentID, setCurrentID]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSearch(currentQuery);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="search-bar">
                Search for:
                <label>Genre:</label>
                <select onChange={(e)=>{
                    setCurrentGenre(e.target.value);}}>
                    {Object.keys(data).map((item,index)=>
                <option key={index}>{item}</option>)}
                </select>
                
                <input type="text" onChange={(e)=>{setCurrentQuery(e.target.value)}}>
                </input>
                <input type="submit" value="search"></input>
            </form>
        </div>
    )
}
export default SearchBar;