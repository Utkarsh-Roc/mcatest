
// const Cards = () => {
//     return(
//         <div style={{height:"max-content", width:"25vw"}}>
//             <img style={{height:"30vh"}}/>
//             <p>CHHATRAPATI SHIVAJI MAHARAJ PARK ART FESTIVAL . Mumbai . 9 January 2024</p>
//             <p>CHHATRAPATI SHIVAJI MAHARAJ PARK ART FESTIVAL 2024 PROMISES FOUR DAYS OF ART AND ENTERTAINMENT</p>
//         </div>
//     )
// }

import { useEffect, useState } from "react"

const Grid = ({data}) => {

    const [width, setWidth] = useState()
    
    useEffect(() => {
        setWidth(window.innerWidth)
    },[width])

    return(
        <div className="container" style={{
            // display:'flex',
            // flexWrap:'wrap',
            // flexDirection:'row',
            // justifyContent:'space-around',
            // alignItems:'start'
        }}> 
            <div className="row">
            {data.map((details) => {
                return (
                        <div className="col-md-4" key={details.id}>
                            <a href={details.link[0]} style={{margin:'5vh 0vh 5vh 0vh'}} target="_blank" rel="noreferrer" >
                                <div style={{ width:"350px", borderRadius:'10px', backgroundColor:'#efefef', overflow:'hidden'}}>
                                    <img style={{height:"50vh", objectFit:'cover'}} src={`/img/portfolio/curs/${details.backgroundImage}`}/>
                                    <div style={{ padding:'10px'}}>
                                        <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center' , width:'90%'}}>
                                            <h5 style={{fontSize:'16px',color:'rgb(42 43 99)'}}>{details.eventName}</h5>
                                            <a>
                                                <span className="icon">
                                                    <i className="fas fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <h6 style={{color:'#555555', fontSize:'14px'}}>{details.date} | {details.location}</h6>
                                        <h6 style={{fontSize:'18px', paddingTop:'15px'}}>{details.description}</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                )
            })}
            { width > 1023 ? data.map((details) => {
                return (
                    <div className="col-md-4" key={details.id}>
                        <a href={details.link[1]} style={{margin:'5vh 0vh 5vh 0vh'}} target="_blank" rel="noreferrer" >
                            <div style={{ width:"350px", borderRadius:'10px', backgroundColor:'#efefef', overflow:'hidden'}}>
                                <img style={{height:"50vh", objectFit:'cover'}} src={`/img/portfolio/curs/${details.backgroundImage}`}/>
                                <div style={{ padding:'10px'}}>
                                    <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center' , width:'90%'}}>
                                        <h5 style={{fontSize:'16px'}}>{details.eventName}</h5>
                                        <a>
                                            <span className="icon">
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <h6 style={{color:'#555555', fontSize:'14px'}}>{details.date} | {details.location}</h6>
                                    <h6 style={{fontSize:'18px', paddingTop:'15px'}}>{details.description}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }):<></>}
            {/* <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards /> */}

            </div>
        </div>
    )
}

export default Grid