import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../css/form.css';
import '../css/formulation.css';

function Formulation() {
    const [formData, setFormData] = useState({
        symptoms: ['', '', ''], // Store three symptoms as an array
        contradiction: '',
    });

    const [formulations, setFormulations] = useState([]);


    const handleChange = (event, index) => {
        const { name, value } = event.target;
        const updatedSymptoms = [...formData.symptoms];
        updatedSymptoms[index] = value;

        setFormData({
            ...formData,
            symptoms: updatedSymptoms,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Split the input by commas and trim any leading/trailing spaces
            const cleanedSymptoms = formData.symptoms.map((symptom) => symptom.trim());
            const symptomsString = cleanedSymptoms.map((symptom) => `symptoms=${encodeURIComponent(symptom)}`).join('&');

            const apiUrl = `http://localhost:5000/api/formulation?${symptomsString}&contradiction=${encodeURIComponent(formData.contradiction)}`;
            const response = await fetch(apiUrl);

            if (response.ok) {
                const data = await response.json();
                setFormulations(data.formulations);
            } else {
                console.error('Request failed with status:', response.status);
                setFormulations([]);
            }
        } catch (error) {
            console.error('Error:', error);
            setFormulations([]);
        }
    };

    const datax = ['hyperacidity', 'heartburn', 'nausea', 'Constipation', 'Indigestion', 'Hyperacidity', 'Heartburn', 'Nausea', 'Menstrual Irregularities', 'Gynecological Issues', 'Stress', 'Anxiety', 'Oral health issues', 'Weak teeth and gums', 'Weakness', 'Recovery from illness', 'Postpartum care', 'General weakness', 'Low immunity', 'Fatigue', 'Weak digestion', 'Low energy', 'General debility', 'Digestive issues', 'Weak immunity', 'Flatulence', 'Poor appetite', 'Cough', 'Cold', 'Respiratory congestion', 'Cardiovascular health', 'Heart function', 'Nervousness', 'Skin issues', 'Blood impurities', 'Detoxification', 'Poor digestion', 'Growth-related issues in children', 'Diarrhea', 'Gut health', 'Menstrual irregularities', 'Uterine health', 'Gynecological issues', 'Iron deficiency anemia', 'Low hemoglobin levels', 'Circulation', 'Low energy levels', 'General fatigue', 'Respiratory Disorders', 'Digestive disorders', 'Liver disorders', 'Asthma', 'Bronchitis', 'Digestive Discomfort', 'Skin Inflammation', 'Wounds', 'Ulcers', 'Digestive Disorders', 'Abdominal Discomfort', 'Urinary Disorders', 'Kidney Stones', 'Urinary Tract Infections', 'Digestive Disturbances', 'Urinary Discomfort', 'Fluid Retention', 'Urinary Issues', 'Joint pain', 'Stiffness', 'Inflammation', 'Digestive discomfort', 'Oral hygiene maintenance', 'Bad breath', 'Gum health', 'Oral hygiene', 'Dental issues', 'Bloating', 'Inflammatory conditions', 'Urinary stones', 'Burning sensation during urination', 'Pain in the lower abdomen', 'Excessive heat and inflammation', 'Diabetes (Meha)', 'Excessive thirst', 'Frequent urination', 'Digestive disturbances', 'Skin disorders (e.g., acne, eczema, itching)', 'Skin inflammation', 'Skin rashes', 'Uneven skin tone', 'Gas and bloating', 'Loss of appetite', 'Fever (pyrexia)', 'Diabetes (Madhumeha)', 'Poor memory and concentration', 'Mental fatigue', 'Stress and anxiety', 'Nervous system support', 'Cognitive enhancement', 'Iron-deficiency anemia', 'Menstrual disorders', 'Excessive bleeding', 'Uterine discomfort', 'Abdominal discomfort', 'Heat-related disorders', 'Fever', 'Respiratory disorders', 'Abdominal pain', 'Oral ulcers', 'Gingivitis', 'Oral infections', 'Skin itching', 'Burning sensation', 'Heat-related skin disorders', 'Gas', 'Colic pain in infants', 'Toothache', 'Gum problems', 'Respiratory conditions', 'Heart health', 'Hypertension', 'Cardiac function', 'Fluid retention', 'Kidney health', 'Low stamina', 'Gastrointestinal health', 'Abdominal spasms', 'Vitality', "Women's health", 'Anemia', 'Low hemoglobin', 'Cough and cold', 'Lung health', 'Intestinal worm infestations', 'Digestive health', 'Memory enhancement', 'Concentration improvement', 'Cognitive support', 'Diuresis', 'Urinary tract health', 'Kidney support', 'Worm infestations', 'Poor memory', 'Lack of concentration', 'Female reproductive issues', 'Respiratory issues', 'Cardiac stimulation', 'Mental health', 'Various health benefits', 'Consumed as a sweet treat rather than for medicinal purposes', 'Throat irritation', 'Respiratory discomfort', 'General wellness', 'Rejuvenation', 'Overall well-being', 'Therapeutic benefits', 'Consumed as a sweet treat', 'Not specified', 'Immune support', 'General well-being', 'Oral health support', 'General health support', 'Consumed as a sweet and nutritious treat', 'Consumed as a sweet and flavorful treat', 'Brain health', "Women's health support", 'Digestive support', 'Respiratory health support', 'Heart health support', 'Natural remedy for respiratory disorders', 'Balancing Vata and Kapha doshas', 'Balancing Vata dosha', 'Digestive health support', 'Appetite enhancement', 'Liver health', 'Urinary health support', 'Healthy urine flow', 'Skin health support', 'Healthy bowel movements', 'Healthy skin', 'Blood purification', 'Skin health', 'Improves digestion', 'Relieves digestive discomfort', 'Diuretic action', 'Water retention management']; // Your array of symptoms

    return (
        <div>
            <Header />
            <section className="form">
                <div className="cs-grid">
                    <h2>Formulation Search</h2>
                    <form onSubmit={handleSubmit} className='gagan'>
                        {[0, 1, 2].map((index) => (
                            <div className='raj' key={index}>
                                <label htmlFor={`symptom-${index}`}>Symptom {index + 1}:</label>
                                <br />
                                <input
                                    id={`symptom-${index}`}
                                    type='text'
                                    name="symptoms"
                                    value={formData.symptoms[index]}
                                    onChange={(event) => handleChange(event, index)}
                                    list='datax'
                                />
                                <datalist id='datax'>
                                    {datax.map((op, opIndex) => (
                                        <option key={opIndex} value={op} />
                                    ))}
                                </datalist>
                            </div>
                        ))}
                        <div>
                            <label htmlFor="contradiction">Contraindication:</label>
                            <br />
                            <input
                                type="text"
                                id="contradiction"
                                name="contradiction"
                                value={formData.contradiction}
                                onChange={(event) => handleChange(event, -1)}
                            />
                        </div>
                        <button className="item-7" type="submit">Search Formulations</button>
                    </form>
                </div>
            </section>
            {formulations !== null && (
                <div className="matching-data">
                    <pre>{JSON.stringify(formulations, null, 2)}</pre>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Formulation;
