import React from 'react'

function Services() {

    const CardDetail = [
        {
            title:"web development" ,
            imageUrl: "https://www.aksquare.in/wp-content/uploads/2020/11/webdevelopment-banner.png" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:1
        } ,
        {
            title:"Android development" ,
            imageUrl: "https://hackernoon.com/drafts/rf993ytl.png" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:2
        } ,
        {
            title:"ios development" ,
            imageUrl: "https://www.concettolabs.com/blog/wp-content/uploads/2018/10/ios.jpg" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:3
        } ,
        {
            title:"SEO" ,
            imageUrl:" https://www.mindroit.com/wp-content/uploads/2019/08/search-engine-optimization-img-02.png" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:4
        } ,
        {
            title:"Digital Marketing" ,
            imageUrl:" https://multichannelmerchant.com/wp-content/uploads/2018/07/digitalmarketing850.jpg" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:5
        } ,
        {
            title:"Graphics Designing" ,
            imageUrl:"https://5.imimg.com/data5/RF/HC/MY-9004034/graphics-designing-services-500x500.png" ,
            cardText: " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" ,
            id:6
        }
    ]

    return (
         <div>
            <div className="card-title text-center m-3">Our services</div>
            <div className= "card-deck d-flex  justify-content-center flex-wrap">
             {
                 CardDetail.map((value) => {
                   return  <Card 
                     key={value.id}
                     title = {value.title}
                     imageUrl = {value.imageUrl}
                     cardText = {value.cardText}
                     />
                 })
             }
          </div>
        </div>
       
    )
}



function Card(props){
    return (
        
        <div className="card m-4" id="card-size"> 
          <img src={props.imageUrl} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center m-3">{props.title}</h5>
            <p className="card-text">{props.cardText}</p>
          </div>
        </div>

    )
}


export default Services
