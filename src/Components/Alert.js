const message = (props) => {
    const upcase = (text) =>{
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'40px'}}>
           { props.message && <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
            
                    <strong>{upcase(props.message.type)}</strong> : {props.message.message}
            </div>}
        </div>
    );
}
export default message;