import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

const Mahcreate = () => {

    const serverHost = "http://localhost:5001";
    const[name,setName]=useState("");
    const[nim,setNim]=useState();
    const[semester,setSemester]=useState();
    // const[active,setActive]=useState(true);
    const [mahasiswa, setMahasiswa] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("nim", nim);
        formData.append("semester", semester);
        // formData.append("action", active);
        axios.post(serverHost + "/mahasiswa/edit", formData).then((res) => {
          setMahasiswa(res.data);
        });
        console.log(setMahasiswa);
        // window.location = "/";
      }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" 
                    onSubmit={(event)=>{
                        handleSubmit(event);
                    }}
                    >

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title" style={{"textAlign":"center"}}>
                                <h2>Tambahkan Identitas Mahasiswa</h2>
                            </div>
                            <div className="card-body">

                                
                                <div className="row">

             <div className="col-lg-12">
    <div className="form-group">
    </div>
                </div>

            <div className="col-lg-12">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
        type={"text"}
        value={name}  
        onChange={(event) => {
            setName(event.target.value);
          }}
        className="form-control"/>
    
    </div>
            </div>

<div className="col-lg-12">
    <div className="form-group">
        <label htmlFor="nim">NIM</label>
        <input 
        value={nim}
         onChange={(event) => {
            setNim(event.target.value);
          }}
        className="form-control"/>
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label htmlFor="semester">Semester</label>
        <input 
        value={semester}
         onChange={(event) => {
            setSemester(event.target.value);
          }} 
         className="form-control"></input>
    </div>
</div>

{/* <div className="col-lg-12">
    <div className="form-check">
    <input 
    checked={active} 
     onChange={(event) => {
        setActive(event.target.checked);
      }}
    type="checkbox" className="form-check-input"></input>
        <label htmlFor="actives" className="form-check-label">Is Active</label>
        
    </div>
</div> */}
<div className="col-lg-12">
    <div className="form-group">
    <input
                              type="submit"
                              className="btn btn-success btn-block px-5"
                              value="Save Now"
                              
                            />
       <Link to="/" className="btn btn-danger">Kembali</Link>
    </div>
</div>

</div>

                               
</div>

</div>

</form>

</div>
            </div>
        </div>
    );
}

export default Mahcreate;
