import React from 'react'
import '../App.css'
const Footer = () => {
  return (
    <div>
      <footer className="main_footer pt-5">
        <div className="main__footer__logo">
            <a href="/"><img src="https://sciastra.com/Assets/Images/newsciastra.jpg" style={{height:"100px",width:"100px"}} className="w-20" alt=""/></a>
        </div>
        <h3 className="text-white sciastra" style={{fontSize:"1.5rem"}}>SciAstra</h3>
        <p className="mb-4 mt-3 font-bold fs-5  footer_links_2  text-light" >© SciAstra</p>
        <div className="Pages">
            <ul className="list-unstyled text-light">
                <li className="mb-3 my-2"><i className="fa fa-home" aria-hidden="true" style={{marginLeft:"-45px"}}></i><a className="text-light" href="/"> Home</a></li>
                <li className="mb-3 my-2"><i className="fa fa-book" aria-hidden="true"></i><a className="text-light" href="/"> Our Courses</a></li>
                <li className="mb-3 my-2"><i className="fa fa-comment" aria-hidden="true" style={{marginLeft:"-50px"}}></i><a className="text-light" href="/"> Blog</a></li>
                <li className="mb-3 my-2"><i className="fa fa-file" aria-hidden="true" style={{marginLeft:"14px"}}></i><a className="text-light" href="/"> Free Materials</a></li>
                <li className="mb-3 my-2"><i className="fa fa-group" aria-hidden="true" style={{marginLeft:"-10px"}}></i><a className="text-light" href="/"> Our Team</a></li>
                <li className="mb-3 my-2"><i className="fa fa-phone" aria-hidden="true"></i><a className="text-light" href="/"> Contact Us</a></li>
            </ul>
        </div>
    <div style={{minHeight:"130px"}}>
    </div>
    <div className="container basic">
        <div className="row">
            <div className="col-md-3 col-lg-3 mt-4 mt-lg-0">
                <p className="text-center text-light text-lg-start fs-6">SciAstra Education Pvt Ltd, Bhubaneswar, Odisha</p>
            </div>
            <div className="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start">
                
            </div>
            <div className="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start mail">
                <a href="mailto:support@sciastra.com" className="fs-6 text-white ps-0 ps-lg-5 text-center text-lg-start">support@sciastra.com</a>
            </div>
            <div className="col-md-3 col-lg-3 mb-3 mt-4 mt-lg-0">
                <div className="text-center">
                    <a className="mx-2 fs-6 text-white" href="https://sciastra.com/follow_external.php?req=ygIy1k6vyP"><i className="fa fa-youtube"></i></a>
                    <a className="mx-2 fs-6 text-white" href="https://sciastra.com/follow_external.php?req=MrrBHi4frT"><i className="fa fa-facebook"></i></a>
                    <a className="mx-2 fs-6 text-white" href="https://sciastra.com/follow_external.php?req=FMlxbuQS5w"><i className="fa fa-instagram"></i></a>
                    <a className="mx-2 fs-6 text-white" href="https://sciastra.com/follow_external.php?req=x1Luinj8TR"><i className="fa-brands fa-discord"></i></a>
                    <a className="mx-2 fs-6 text-white" href="https://sciastra.com/follow_external.php?req=xZrGX4XxE8"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
