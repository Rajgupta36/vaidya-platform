import Header from './header';
import Footer from './footer';
import '../css/form.css'
import React, { useState, useEffect } from 'react'



function Formulation() {

    const [formData, setFormData] = React.useState(
        {
            Formulationdata: "",
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {
        console.log("component render")
        console.log(formData)
    }

    return (
        <>
            <Header />
            <section className="form">
                <div className='cs-grid'>
                    <form onSubmit={handleSubmit}>
                        <div className='item-1'>
                            <h4> Choose Formulation(medicine)</h4>
                            <input
                                className='item'
                                type="text"
                                placeholder="Enter your symptoms i.e. Fever "
                                onChange={handleChange}
                                name="Formulationdata"
                                value={formData.Formulationdata}
                            /></div>

                        <br />

                        <div className='item-5'>
                            <div className='bodytype'>
                                <fieldset>
                                    <legend className='bodytypebox'><h4>BodyType(Dosha)</h4><span>(if you don't know go to instruction section and read about body type)</span></legend>
                                    <div className='doshafield'>
                                        <div className='dosha'>
                                            <input
                                                type="radio"
                                                id="Vata"
                                                name="BodyType"
                                                value="Vata"
                                                checked={formData.BodyType === "Vata"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="Vata"><span>Vata⛅🍃</span></label>
                                        </div>

                                        <div className='dosha'>
                                            <input
                                                type="radio"
                                                id="Pitta"
                                                name="BodyType"
                                                value="Pitta"
                                                checked={formData.BodyType === "Pitta"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="Pitta"><span>Pitta🔥💧</span></label>
                                        </div>

                                        <div className='dosha'>
                                            <input
                                                type="radio"
                                                id="Kapha"
                                                name="BodyType"
                                                value="Kapha"
                                                checked={formData.BodyType === "Kapha"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="Kapha"><span>Kapha💧 🌎</span></label></div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <br />


                        <button className='item-7' style={{ marginbottom: '30px' }} >Submit</button>
                        <br />

                    </form>
                </div >
            </section >
            <Footer />
        </>
    )
}


export default Formulation;