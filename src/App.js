
import './App.css';
import TestimonialOverrall from './components/TestimonialOverrall';
import NewTestimonial from './components/NewTestimonial'
import React, { useState } from 'react';

const DUMMY_TESTIMONIAL = [{
  id: 'el1',
  name: "ransome eyoi",
  content: "hdhdjhjjhhsjsksklsjsjsksjhsghsjsjshshsgsgbhsghshsh"
},
{
  id: 'el2',
  name: "Grannies ekpo",
  content: "hdhdjhjjhhsjsksklsjsjsksjhsghsjsjshshsgsgbhsghshsh"
  },
{
  id: 'el3',
  name: "saviour philip",
  content: "hdhdjhjjhhsjsksklsjsjsksjhsghsjsjshshsgsgbhsghshsh"
  },
{
  id: 'el4',
  name: "ikenna okeke",
  content: "hdhdjhjjhhsjsksklsjsjsksjhsghsjsjshshsgsgbhsghshsh"
}]

function App(props) {

  const [testimonialData, setTestimonialData] = useState(DUMMY_TESTIMONIAL)
  

  const addTestimonialFormHandler = (enteredTestimonialData) => {
    setTestimonialData((prevTestimonialData) => {
       return [enteredTestimonialData, ...prevTestimonialData]
     })
  }


  return (
    <div>
      <NewTestimonial addTestimonialForm={addTestimonialFormHandler} />
      <TestimonialOverrall items={testimonialData} />
    </div>
  );
}

export default App;
