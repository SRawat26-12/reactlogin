const name= localStorage.getItem("uname");
const email=localStorage.getItem("uemail")
const Dashboard=()=>{
    return(
        <>
        <h1> Welcome User: {name}</h1>
        <h3> Email : {email}</h3>
        </>
    )
}
export  default Dashboard;