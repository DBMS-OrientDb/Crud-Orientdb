import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Mahlist = () => {
    const [mahdata, mahdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/mbd/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/mbd/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Apa mau Dihapus?')) {
            fetch("http://localhost:8000/mbd/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Hapus selesai.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/mbd").then((res) => {
            return res.json();
        }).then((resp) => {
            mahdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
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

                            {mahdata &&
                                mahdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.nim}</td>
                                        <td>{item.semester}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Hapus</a>
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