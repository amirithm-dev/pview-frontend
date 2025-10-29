type ErrorProps = {
    code : number
};

function Error({code} : ErrorProps){
    const messages: { [key: number]: string } = {
    404: "Page not found",
    403: "Access denied",
    };

    return(
        <div>
            <h1>{code}</h1>
            <span>|</span>
            <h1>{messages[code]}</h1>
        </div>
    );
}

export default Error;