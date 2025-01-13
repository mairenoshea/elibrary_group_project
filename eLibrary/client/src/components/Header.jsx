import {Link} from 'react-router-dom';

const Header = (props) => {
    

    return (
        <>
        <div className="header">
            <div className="headerLinks">
                <Link to={"/"}>
                    <button className="headerLinkButton">Home</button>
                </Link>
            </div>
            <div className="headerTitle">{props.pageTitle}</div>
            <div className="headerLinks">
            {props.customButtonName ? 
            <Link to={`${props.customButtonLink}`}>
                <button className="headerLinkButton">{props.customButtonName}</button></Link>:null}</div>
        </div>
        </>
    )
}

export default Header;