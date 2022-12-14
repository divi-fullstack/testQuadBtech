import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ticketFormValidation } from "./validation";
export default function BookMovieTicket() {
 const navigate = useNavigate()
  const fetchDataFromLocalStorage=(dataItemName)=>{   
    const data = localStorage?.getItem(dataItemName)   
      return data
  }

  const formik = useFormik({
    initialValues: { name: "", contact: "" },
    validationSchema: ticketFormValidation,
    onSubmit: async (values) => {
      const bookingDetails = {
        ...values,
        showName: fetchDataFromLocalStorage("name")
      }
      console.log("your booking Details are",bookingDetails)
      toast.success("Thank you! Booking details submitted. You can see booking details over browser console")
      navigate("/")
    },
  })
  return (
    <>

      <div className="container px-lg-0 py-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className=" pb-4 mb-4 h-flex justify-content-between align-items-center">
              <div className="mb-2 mb-lg-0">
                <h1 className="mb-1 h2 fw-bold">
                Book Movie Ticket
                </h1>
                {/* Breadcrumb  */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <span>Show</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Book Movie Ticket
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
                         
                              <tr>
                                <td className="align-middle border-top-0">
                                  <div className="d-flex align-items-center rounded-outer">
                                    <div className="icon-shape rounded-3 border p-4"> 
                                      <img style={{width:120}} src={JSON.parse(fetchDataFromLocalStorage("image"))?.original} alt="show_image"/>
                                    </div> 
                                  </div>
                                </td>
                                <td className="align-middle border-top-0">
                                  {fetchDataFromLocalStorage("name")}
                                </td>
                                <td className="align-middle border-top-0">
                                  {fetchDataFromLocalStorage("language")}
                                </td>
                                <td className="align-middle border-top-0">
                                  <div><b>Time : </b>{JSON.parse(fetchDataFromLocalStorage("schedule"))?.time}</div>
                                  <div><b>Days : </b>{JSON.parse(fetchDataFromLocalStorage("schedule"))?.days?.join(", ")}</div>
                                </td>
                                <td className="align-middle border-top-0">
                                  {JSON.parse(fetchDataFromLocalStorage("genres"))?.join(", ")}
                                </td>
                                <td className="align-middle border-top-0">
                                  {moment(fetchDataFromLocalStorage("premiered"))?.format("DD MMM YYYY")}
                                </td>
                                <td className="align-middle border-top-0">
                                 <button className="btn btn-dark btn-sm w-100 m-2" onClick={()=>navigate("/details")}>Back</button>
                                </td>
                                
                              </tr> 
                              <tr>
                                <th className="align-middle border-top-0">
                                 Summary
                                </th>
                                <td className="align-middle border-top-0" colSpan={6}>
                                  <div dangerouslySetInnerHTML={{__html:JSON.parse(fetchDataFromLocalStorage("summary"))}}/>
                                </td>
                              
                                
                              </tr> 
                        </tbody>
                      </table>
                      <form className="p-4"> 
                        <h4>Provide booking details</h4>
                        <label className="mb-2">Name</label>
                        <input className={`form-control mb-2 ${Boolean(formik.errors?.name) ? "border-danger":""}`} placeholder="Name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                        {Boolean(formik.errors?.name)&&<div className="text-danger mb-2">{formik.errors.name}</div>}
                        <label className="mb-2">Contact No</label>
                        <input className={`form-control mb-2 ${Boolean(formik.errors?.contact) ? "border-danger":""}`} placeholder="Contact no" name="contact" value={formik.values.contact} onChange={formik.handleChange}/>
                        {Boolean(formik.errors?.contact)&&<div className="text-danger mb-2">{formik.errors.contact}</div>}
                        <button className="btn btn-dark btn-sm w-100" onClick={formik.handleSubmit}>Submit</button>

                      </form>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}
