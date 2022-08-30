import React, { useState } from "react"
import "./NewTestimonialForm.css"




const NewTestimonialForm = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [comment, setCommentName] = useState('')
    
    const firstnameChangeHandler= (event)=>{
        setFirstName(event.target.value)
    }
    const lastnameChangeHandler=(event) =>{
        setLastName(event.target.value)
    }
    const commentChangeHandler=(event) =>{
        setCommentName(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        const testimonialData = {
            name: firstName,
            content: comment
        }
        props.onsaveTestimonialForm(testimonialData)
        setFirstName('')
        setLastName('')
        setCommentName('')
    }



    return (
        <form onSubmit={submitFormHandler} className="form-control">
            <div className="main-div">
                <div className="second-div" >
                    <label>First Name</label>
                    <input type="text"
                        onChange={firstnameChangeHandler}
                        value={firstName}
                    >

                    </input>
                    </div>
                <div className="second-div">
                    <label>Last Name</label>
                    <input type="text"
                        onChange={lastnameChangeHandler}
                        value={lastName}
                    >

                    </input>
                </div>
                <div className="second-div" >
                    <label>Comment</label>
                    <input type="text" className="input-special"
                        onChange={commentChangeHandler}
                        value={comment}
                    >

                    </input>
                </div>
            </div>
            <button type="submit" className="form-btn">Add comment</button>
        </form>
    )
}





export default NewTestimonialForm