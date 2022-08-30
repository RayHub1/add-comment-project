import './TestimonialBody.css'




const TestimonialBody = (props) => {
    return (
    <div className='second-card'>
            <h2>{props.name }</h2>
            <p>{ props.content}</p>
    </div>
     )
}






 export default TestimonialBody