import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; 
import { Loader } from "../../Components/common/loader"; 
import { getAllShows } from "../../apis"; 
import { useNavigate } from "react-router-dom";
export default function Shows() {
  const navigate = useNavigate()
  const [showList, setShowsList] = useState({ 
    data: null,
    loading: false,
  });  

  const fetchShowsList = async () => {
    try {
      setShowsList((v) => ({
        ...v,
        loading: true,
        data: null,
      }));
      const res = await getAllShows(); 
      if (res.status == 200) { 
        setShowsList((v) => ({
          ...v,
          loading: false,
          data: res.data,
        }));
      } else {
        setShowsList((v) => ({
          ...v,
          loading: false,
        }));
        toast.error("Something went wrong.", { toastId: "err01" });
      }
    } catch (error) { 
      const message =
        error.response?.data?.message || error.response.statusText;
      toast.error(message, { toastId: "err01" });
      setShowsList((v) => ({
        ...v,
        loading: false,
      }));
    }
  };

 
useEffect(()=>{
  fetchShowsList()
},[])

const navigateToDetails=(details)=>{
    localStorage.setItem("image", JSON.stringify(details["image"]))
    localStorage.setItem("name", details["name"])
    localStorage.setItem("language", details["language"])
    localStorage.setItem("schedule", JSON.stringify(details["schedule"]))
    localStorage.setItem("genres", JSON.stringify(details["genres"]))
    localStorage.setItem("premiered", details["premiered"])
    localStorage.setItem("summary", JSON.stringify(details["summary"]))
    navigate("/details")
}
  const shows = showList.data; 
  return (
    <>

      <div className="container px-lg-0 py-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className=" pb-4 mb-4 d-flex justify-content-between align-items-center">
              <div className="mb-2 mb-lg-0">
                <h1 className="mb-1 h2 fw-bold">
                  Shows
                  <span className="fs-5 text-muted ms-1">
                    ({shows?.length || 0})
                  </span>
                </h1>
                {/* Breadcrumb  */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <span>Shows</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      List
                    </li>
                  </ol>
                </nav>
              </div>
             
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            {/* tab pane */}
            <div className="">
              {/* card */}
              <div className="card"> 
                <div className="table-responsive min-h-500px">
                  {showList.loading ? (
                    <div className="text-center p-4">
                      <Loader />
                    </div>
                  ) : shows?.length ? (
                    <>
                      <table className="table mb-0 text-nowrap text-wrap-table">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" className="border-0">
                              Show banner
                            </th>
                            <th scope="col" className="border-0">
                              Name
                            </th>
                            <th scope="col" className="border-0">
                              Language
                            </th>
                            <th scope="col" className="border-0">
                              Schedule
                            </th>
                            <th scope="col" className="border-0">
                            Genres
                            </th>
                            <th scope="col" className="border-0">
                              Premiered
                            </th>
                            <th scope="col" className="border-0" />
                          </tr>
                        </thead>
                        <tbody>
                          {shows.map((el, i) => {
                            return (
                              <tr key={`show-${i + 1}`}>
                                <td className="align-middle border-top-0">
                                  <div className="d-flex align-items-center rounded-outer">
                                    <div className="icon-shape rounded-3 border p-4"> 
                                      <img style={{width:120}} src={el.show.image.original} alt="show_image"/>
                                    </div> 
                                  </div>
                                </td>
                                <td className="align-middle border-top-0">
                                  {el.show.name}
                                </td>
                                <td className="align-middle border-top-0">
                                  {el.show.language}
                                </td>
                                <td className="align-middle border-top-0">
                                  <div><b>Time : </b>{el.show.schedule.time}</div>
                                  <div><b>Days : </b>{el.show.schedule.days.join(", ")}</div>
                                </td>
                                <td className="align-middle border-top-0">
                                  {el.show.genres.join(", ")}
                                </td>
                                <td className="align-middle border-top-0">
                                  {moment(el.show.premiered).format("DD MMM YYYY")}
                                </td>
                                <td className="align-middle border-top-0">
                                 <button className="btn btn-primary btn-sm" onClick={()=>navigateToDetails(el.show)}>See details</button>
                                </td>
                                
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <div className="text-center p-4">No data found</div>
                  )}

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}
