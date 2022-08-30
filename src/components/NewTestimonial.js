import NewTestimonialForm from "./NewTestimonialForm";




const NewTestimonial = (props) => {

    const onsaveTestimonialFormHandler = (testimonialInput) => {
        const testimonialData = {
            ...testimonialInput,
            id: Math.random().toString()
        }
        props.addTestimonialForm(testimonialData)
    }

    
    return (
        <div>
            <NewTestimonialForm onsaveTestimonialForm={onsaveTestimonialFormHandler} />
        </div>
    )
}






export default NewTestimonial