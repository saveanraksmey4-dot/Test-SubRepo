const Demo4 = ({data}) => {
    return (

        <>
            <hr style={{marginTop : "20px"}} />
           <p>Id : {data.id}</p>
           <p>Name : {data.name}</p>
           <p>Gender : {data.gender}</p>
           <p>Adress : {data.Address}</p>
        </>
    );
}

export default Demo4;