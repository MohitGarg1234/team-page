import React,{useState} from 'react'

const Body = () => {
    const [uni] = useState([
        {rank: '1', university: 'Massachusetts Institute of Technology (MIT)', location: 'United States',url :"https://logolook.net/wp-content/uploads/2021/08/MIT-Logo.svg"},
        {rank: '2', university: 'University of Cambridge', location: 'United Kingdom',url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDD_kEHYexwu8l2JDzCreo7p3236myuvHTe90DZQPsw&s"},
        {rank: '3', university: 'University of Oxford', location: 'United Kingdom',url:"https://yt3.googleusercontent.com/ytc/AOPolaSaSlIPQezYKnnPxuI0ERhtsujlfmBe2dBtQXgPFg=s900-c-k-c0x00ffffff-no-rj"},
        {rank: '4', university: 'Harvard University', location: 'United States',url:"https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo-500x423.png"},
        {rank: '5', university: 'Stanford University', location: 'United States',url:"https://blog.stageagent.com/wp-content/uploads/2015/03/Stanford-Logo.jpg"},
        {rank: '6', university: 'Imperial College London', location: 'United Kingdom',url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiIxwxThbfByuFrxCzjM1y0pO8fxHWJ7QWA&usqp=CAU"},
        {rank: '7', university: 'ETH Zurich (Swiss Federal Institute of Technology)', location: 'Switzerland',url:"https://www.epos-eu.org/sites/default/files/repository/ETHZ.png"},
        {rank: '8', university: 'National University of Singapore (NUS)', location: 'Singapore',url:"https://png.pngitem.com/pimgs/s/511-5111415_nus-logo-png-transparent-national-university-of-singapore.png"},
        {rank: '9', university: 'UCL (University College London)', location: 'United Kingdom',url:"https://sysfilessacbe149174fee.blob.core.windows.net/public-container/clients/bloomsburytheatre/files/d38ed0d5-0b64-4a99-be8c-955b052028c4.jpg"},
        {rank: '10', university: 'University of California, Berkeley (UCB)', location: 'United States',url:"https://wallpapers.com/images/hd/ucb-logo-dldcispgvu3ufl5c.jpg"},
        {rank: '11', university: 'University of Chicago', location: 'United States',url:"https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/jssmedia/images/logo-background.svg?iar=0&rev=b968dab0e0ea49fc9b0aa0c58ff8b152&extension=webp&hash=44493A89388C6D73090CDEF7ED528ACB"},
        {rank: '12', university: 'University of Pennsylvania', location: 'United States',url:"https://directory.seas.upenn.edu/wp-content/uploads/2020/06/directory-placeholder.jpg"},
    ]);
    const [mentor] = useState([
        {rank: '1', university: 'Massachusetts Institute of Technology (MIT)', name:"Markus J. Buehler",url :"https://cee.mit.edu/wp-content/uploads/2021/05/MarkusBuehler.jpg"},
        {rank: '2', university: 'University of Cambridge', name: 'Michelle Ellefson',url:"https://www.educ.cam.ac.uk/images/staff/ellefson_michelle.jpg"},
        {rank: '3', university: 'University of Oxford', name: 'Professor Patrick Grant',url:"https://www.materials.ox.ac.uk/sites/default/files/styles/person_profile_photo/public/materialsoutreach/images/person/professor_patrick_grant_freng.jpg?itok=X-mlwxwW"},
        {rank: '4', university: 'Harvard University', name: 'Conor Walsh',url:"https://s3-us-west-2.amazonaws.com/wyss-prod/app/uploads/2016/08/05095233/Conor_Walsh_headshot_1500x1000-e1470702796297.jpg"},
        {rank: '5', university: 'Stanford University', name: 'Shirin Abrishami Kashani',url:"https://immigrationlab.org/content/uploads/2022/10/polisci_headshot.jpeg"},
        {rank: '6', university: 'Imperial College London', name: 'Claire Adjiman',url:"https://www.aiche.org/sites/default/files/images/bio/claire_adjiman.jpg"},
        {rank: '7', university: 'ETH Zurich (Swiss Federal Institute of Technology)', name: 'Srdjan Capkun',url:"https://inf.ethz.ch/people/faculty/faculty/_jcr_content/par/twocolumn_1/par_left/textimage/image.imageformat.textsingle.439147873.jpg"},
        {rank: '8', university: 'National University of Singapore (NUS)', name: 'Prof DINH Tien Cuong',url:"https://www.science.nus.edu.sg/wp-content/uploads/2020/05/dinh-tien-cuong.jpg"},
        {rank: '9', university: 'UCL (University College London)', name: 'Professor Cassidy Johnson',url:"https://app.cdri.world/icdri2022/public/upload/speakers/1731153421274331_202204261232dr.%20cassidy%20johnson.jpg"},
        {rank: '10', university: 'University of California, Berkeley (UCB)', name: 'Gopala Krishna Anumanchipalli',url:"https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/gopala.jpg"},
        {rank: '11', university: 'University of Chicago', name: 'Elizabeth Chatterjee',url:"https://history.uchicago.edu/sites/history.uchicago.edu/files/styles/directoryimage/public/uploads/images/Chatterjee%20Irvine%20headshot%202_Small.JPG?itok=GD5-zAWE"},
        {rank: '12', university: 'University of Pennsylvania', name: 'Ritesh Agarwal',url:"https://directory.seas.upenn.edu/wp-content/uploads/2020/03/agrawal-ritesh.jpg"},
    ]);
    return (
    <>
    <h1 className='institutes my-3'>Top Institutes</h1>
    <div className='body my-3'>
        {uni.map((element)=>(
            <div className='universities my-2' key={element.rank}>
            <div className="img"><img className='image' src={element.url} alt="" /></div>
            <div className="name">{element.university}</div>
            <div className="location">{element.location}</div>
          </div>
        ))}
    </div>
    <h1 className='mentors my-3'>Our Mentors</h1>
    <div className='body my-3'>
        {mentor.map((element)=>(
            <div className='professers my-2' key={element.name}>
            <div className="img"><img className='imageMentor' src={element.url} alt="" /></div>
            <div className="name">{element.name}</div>
            <div className="location">{element.university}</div>
          </div>
        ))}
    </div>
    <h1 className='mentors my-3'>Mentors and Advisors</h1>
    
    </>
  )
}

export default Body

