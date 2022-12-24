import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Mahlist = () => {
   
    const serverHost = "http://localhost:5001";
    const [mahasiswas, setMahasiswas] = useState([]);


    useEffect(() => {
        axios.get(serverHost + "/mahasiswa").then((res) => {
          // console.log(res.data);
          setMahasiswas(res.data);
        });
      }, []);

      function handleHapusClick(id) {
        const formData = new FormData();
        formData.append("id", id);
        axios.post(serverHost + "/mahasiswa/delete", formData).then((res) => {
          setMahasiswas(res.data);
        });
      }

   
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Daftar Mahasiswa</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="mbd/create" className="btn btn-success">Tambah (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>NIM</td>
                                <td>Semester</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {mahasiswas.map((mahasiswa) => (
                                    <tr key={mahasiswa.id}>
                                        <td>{mahasiswa.id}</td>
                                        <td>{mahasiswa.name}</td>
                                        <td>{mahasiswa.nim}</td>
                                        <td>{mahasiswa.semester}</td>
                                        <td><Link 
                                        to={`/mbd/edit/${mahasiswa.id}`}
                                        state={{
                                          id: mahasiswa.id,
                                          name: mahasiswa.name,
                                          nim : mahasiswa.nim,
                                          semester : mahasiswa.semester
                                        }}
                                        >
                                            <a  className="btn btn-success" >Edit</a></Link>
                                            <a  className="btn btn-danger" onClick={(event)=>{
                                                handleHapusClick(mahasiswa.id);
                                            }}>Hapus</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Mahlist;
