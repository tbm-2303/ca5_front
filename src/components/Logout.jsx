const Logout = ({onClick}) => {
    return(
        <div>
            <label>Logout</label>
            <input type="submit" value="Submit" onClick={onClick}/>
        </div>
    )
}
export default Logout