import Testimonial from "./Testimonial"
 


const TestimonialOverrall = (props) => {
    return (
        <div className="try-card">
            { props.items.map((DUMMY_TESTIMONIAL) => (
                <Testimonial
                        key={DUMMY_TESTIMONIAL.id}
                        name={DUMMY_TESTIMONIAL.name}
                        content={DUMMY_TESTIMONIAL.content}
                    />
                 
                ))
             }
        </div>
    )
}








export default TestimonialOverrall