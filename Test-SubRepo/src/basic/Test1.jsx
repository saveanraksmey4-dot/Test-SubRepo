const Test1 = () => {
    let name = [1, 2, 3, 4];
    return (
        <>
            <h1>Hello World</h1>
            <h1>Welcome to Cambodia</h1>
            <ul>
                {name.map((value, index) => {
                    return (
                        <li key={index}>Value : {value} and Index : {index + 1}</li>
                    );
                })}
            </ul>
        </>
    );
}

export default Test1;