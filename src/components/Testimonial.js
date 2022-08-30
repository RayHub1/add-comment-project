import TestimonialBody from "./TestimonialBody"
import TestimonialImage from "./TestimonialImage"
import "./Testimonial.css"




const Testimonial = (props) => {
    return (
        <div className="main-card">
            <TestimonialImage />
            <TestimonialBody name ={props.name} content={props.content} />
        </div>
    )
}







export default Testimonial