import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../css/form.css';

function Symptom() {
    const [formData, setFormData] = useState({
        disease: '',
        BodyType: '',
        Digestionlevel: 'High',
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/match-symptom?bodytype=${formData.BodyType}&disease=${formData.disease}`);
            if (response.ok) {
                const data = await response.json();
                setSubmittedData(data);
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost:5000/api/match-symptom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                await fetchData();
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const data = ['Arthritis', 'Migraine', 'Insomnia', 'Asthma', 'Acidity', 'Acid reflux', 'Acne', 'Allergy', 'Alopecia', "Alzheimer's Disease", 'Amenorrhea', 'Anemia', 'Anemia', 'Angina Pectoris', 'Raktapitta', 'Heart Diseases', 'Blood Pressure', 'Anorexia', 'vomiting', 'diarrhea', 'digestive and abdominal disorders', 'jaundice', 'gallstones', 'dyspepsia', 'indigestion', 'gastroenteritis', 'colic', 'malabsorption', 'food allergies', 'parasites', 'constipation', 'hemorrhoids', 'obesity', 'ulcers', 'candida', 'toxin', 'fever', 'abscess', 'sinus', 'wounds', 'fractures', 'cough', 'breathing difficulties', 'hiccup', 'tuberculosis', 'common cold', 'urinary stones', 'urinary gravel', 'urinary obstruction', 'urinary retention', 'diabetes', 'ears', 'Throat Diseases', 'Nose Diseases', 'Catarrh', 'Hoarse Throat', 'Hyperacidity', 'Gastritis', 'Constipation', 'Gas/Flatulence', 'Intestinal Worms', 'Piles', 'Gallstones', 'Inflammatory Bowel Disease', 'Jaundice', 'Mouth Ulcers', 'Food Allergy', 'Obesity', 'Common Cold', 'Sinusitis', 'Tonsillitis', 'Nose Bleeding', 'Bronchial Asthma', 'Hypertension', 'Coronary Heart Disease', 'Varicose Veins', 'Migraine', 'Vertigo', 'Motion Sickness', 'Stroke', 'Epilepsy', 'Insomnia', 'Depression', 'Stress', 'Sciatica', 'Enlarged Prostate', 'Urinary Tract Infection', 'Urinary Stones', 'Diabetes', 'Hypothyroidism', 'Muscle Cramps', 'Chronic Fatigue Syndrome', 'Acne', 'Psoriasis', 'Eczema', 'Age spots', 'Hair care', 'Dandruff', 'Head lice', 'Body odor', "Athlete's foot", 'Corns and calluses', 'Conjunctivitis', 'Cataract', 'Menstrual Cramps', ' white discharge (leucorrhoea)', 'Poor Breast Milk Production', 'Breast Shape Improvement', 'Menopause', 'Poor Height Gain', 'Poor Weight Gain', 'Bed-wetting', 'Breast Cancer', 'Haemorrhoids', 'Haemorrhoids', 'Hepatitis', 'Leukoderma', 'Low Blood Pressure', 'Multiple Sclerosis', 'Psoriasis', 'Hemiplegia', "Parkinson's disease", 'Anxiety neurosis', 'Insomnia', 'Dementia'];

    return (
        <>
            <Header />
            <section className="form">
                <div className="cs-grid">
                    <form onSubmit={handleSubmit} method='POST'>
                        <div className="item-1">
                            <h4> Enter Symptoms </h4>
                            <input
                                className="item"
                                placeholder="Enter your symptoms i.e. Fever "
                                onChange={handleChange}
                                name="disease"
                                value={formData.disease}
                                list='data'
                            /><datalist id='data'>
                                {data.map((op) => <option>{op}</option>)}
                            </datalist>
                        </div>
                        <div className="item-2">

                            <input
                                className="item"
                                placeholder="Enter your symptoms i.e. Fever "
                                onChange={handleChange}
                                name="disease"
                                value={formData.disease}
                                list='data'
                            /><datalist id='data'>
                                {data.map((op) => <option>{op}</option>)}
                            </datalist>
                        </div>
                        <div className="item-3">
                            <h4> Enter contradictions</h4>
                            <input
                                className="item"
                                placeholder="Enter your symptoms i.e. Fever "
                                onChange={handleChange}
                                name="disease"
                                value={formData.disease}
                                list='data'
                            /><datalist id='data'>
                                {data.map((op) => <option>{op}</option>)}
                            </datalist>
                        </div>

                        <br />
                        <div className="item-5">
                            <div className="bodytype">
                                <fieldset>
                                    <legend className="bodytypebox">
                                        <h4>BodyType(Dosha)</h4>
                                        <span>(if you don't know, go to instruction section and read about body type)</span>
                                    </legend>
                                    <div className="doshafield">
                                        <div className="dosha">
                                            <input
                                                type="radio"
                                                id="vata"
                                                name="BodyType"
                                                value="vata"
                                                checked={formData.BodyType === 'vata'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="vata">
                                                <span>Vata⛅🍃</span>
                                            </label>
                                        </div>

                                        <div className="dosha">
                                            <input
                                                type="radio"
                                                id="pitta"
                                                name="BodyType"
                                                value="pitta"
                                                checked={formData.BodyType === 'pitta'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="pitta">
                                                <span>Pitta🔥💧</span>
                                            </label>
                                        </div>

                                        <div className="dosha">
                                            <input
                                                type="radio"
                                                id="kapha"
                                                name="BodyType"
                                                value="kapha"
                                                checked={formData.BodyType === 'kapha'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="kapha">
                                                <span>Kapha💧 🌎</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <br />

                        <br />
                        <div className="item-8">
                            <label htmlFor="Digestionlevel">
                                <h4>Digestion level</h4>
                            </label>
                            <br />
                            <select
                                id="Digestionlevel"
                                value={formData.Digestionlevel}
                                onChange={handleChange}
                                name="Digestionlevel"
                            >
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <br />
                        <button className="item-7">Submit</button>
                    </form>

                </div>
            </section>

            {submittedData !== null && (
                <div className="matching-data">
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}


            <Footer />
        </>
    );
}

export default Symptom;

