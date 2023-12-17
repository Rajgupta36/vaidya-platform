import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../css/form.css';
import '../css/herb.css'

function Herbs() {
    const [formData, setFormData] = useState({
        plantFamily: '',
        hindiName: '',
        sanskritName: '',
        scientificBinomial: '',
    });

    const [herbDetails, setHerbDetails] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const queryParams = new URLSearchParams(formData);
            const apiUrl = `http://localhost:5000/api/get-herb-details?${queryParams.toString()}`;

            const response = await fetch(apiUrl);

            if (response.ok) {
                const data = await response.json();
                setHerbDetails(data.herbDetails);
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const data1 = ['Acoraceae', 'Acanthaceae', 'Rutaceae', 'Lamiaceae', 'Lamiaceae', 'Cornaceae', 'Asphodelaceae', 'Malvaceae', 'Phyllanthaceae', 'Araliaceae', 'Acanthaceae', 'Apiaceae', '', 'Ericaceae', 'Arecaceae', 'Combretaceae', 'Apiaceae', 'Asparagaceae', 'Poaceae', 'Meliaceae', 'Plantaginaceae', 'Malvaceae', 'Euphorbiaceae', 'Poaceae', 'Berberidaceae', 'Lamiaceae', 'Myricaceae', 'Cucurbitaceae', 'Berberidaceae', 'Berberidaceae', 'Berberidaceae', 'Piperaceae', 'Anacardiaceae', 'Asteraceae', 'Acanthaceae', 'Combretaceae', 'Rutaceae', 'Polygonaceae', 'Rosaceae', 'Plantaginaceae', 'Asteraceae', 'Asteraceae', 'Santalaceae', 'Apiaceae', 'Lauraceae', 'Rutaceae', 'Rutaceae', 'Fabaceae', 'Asteraceae', 'Boraginaceae', 'Burseraceae', 'Convolvulaceae', 'Geraniaceae', 'Zingiberaceae', 'Cyperaceae', 'Passifloraceae', 'Asteraceae', 'Apiaceae', 'Fabaceae', 'Pinaceae', 'Apiaceae', 'Dioscoreaceae', 'Asteraceae', 'Zingiberaceae', 'Araliaceae', 'Primulaceae', 'Equisetaceae', 'Orobanchaceae', 'Convolvulaceae', 'Orobanchaceae', 'Apiaceae', 'Apiaceae', 'Moraceae', 'Gentianaceae', 'Gentianaceae', 'Geraniaceae', 'Rosaceae', 'Fabaceae', 'Zygophyllaceae', 'Burseraceae', 'Zingiberaceae', 'Combretaceae', 'Malvaceae', 'Apiaceae', 'Apocynaceae', 'Equisetaceae', 'Oleaceae', 'Valerianaceae', 'Myristicaceae', 'Lamiaceae', 'Solanaceae', 'Fabaceae', 'Fabaceae', 'Scrophulariaceae', 'Laminariaceae', 'Asphodelaceae', 'Cucurbitaceae', 'Asteraceae', 'Apocynaceae', 'Lamiaceae', 'Lamiaceae', 'Apiaceae', 'Berberidaceae', 'Apiaceae', 'Piperaceae', 'Malvaceae', 'Clusiaceae', 'Poaceae', 'Fabaceae', 'Scrophulariaceae', 'Cyperaceae', 'Urticaceae', 'Valerianaceae', 'Meliaceae', 'Lamiaceae', 'Nymphaeaceae', 'Lamiaceae', 'Convolvulaceae', 'Rutaceae', 'Berberidaceae', 'Bignoniaceae', 'Apiaceae', 'Paeoniaceae', 'Araliaceae', 'Passifloraceae', 'Passifloraceae', 'Paeoniaceae', 'Phyllanthaceae', 'Scrophulariaceae', 'Piperaceae', 'Piperaceae', 'Piperaceae', 'Plumbaginaceae', 'Lamiaceae', 'Fabaceae', 'Nyctaginaceae', 'Lythraceae', 'Asteraceae', 'Fagaceae', 'Orobanchaceae', 'Rosaceae', 'Rosaceae', 'Lamiaceae', 'Lamiaceae', 'Rubiaceae', 'Rosaceae', 'Polygonaceae', 'Dipterocarpaceae', 'Convolvulaceae', 'Santalaceae', 'Rosaceae', 'Asparagaceae', 'Asteraceae', 'Arecaceae', 'Schisandraceae', 'Lamiaceae', 'Anacardiaceae', 'Pedaliaceae', 'Orobanchaceae', 'Araliaceae', 'Malvaceae', '', 'Lamiaceae', 'Asteraceae', 'Zingiberaceae', 'Boraginaceae', 'Bignoniaceae', 'Asteraceae', 'Combretaceae', 'Combretaceae', 'Combretaceae', 'Pedaliaceae', 'Menispermaceae', 'Apiaceae', 'Zygophyllaceae', 'Convolvulaceae', 'Lamiaceae', 'Passifloraceae', 'Asteraceae', 'Lauraceae', 'Nartheciaceae', 'Urticaceae', 'Ericaceae', 'Acanthaceae', 'Scrophulariaceae', 'Poaceae', 'Myrsinaceae', 'Fabaceae', 'Lamiaceae', 'Lamiaceae', 'Nymphaeaceae', 'Dioscoreaceae', 'Solanaceae', 'Schisandraceae', 'Asteraceae', 'Fabaceae', 'Apiaceae', 'Polygonaceae', 'Rutaceae', 'Rutaceae', 'Zingiberaceae'];
    const data4 = ['Bach', 'Adusa', 'Bel', 'Arani', 'Arani', 'Ankol', 'Ghritkumari', 'Khatmi', 'Amla', 'Not found in the given texts', 'Kalmegh', 'Not found in the given texts', 'Anu taila', 'Not found in the given texts', 'Supari', 'Arjun', 'Hing', 'Shatavari', 'Jai', 'Neem', 'Brahmi', 'Khapikachhu', 'Danti', 'Baans', 'Daruhaldi', 'Tulsi', 'Kafal', 'Kaddu', 'Daruhaldi', 'Daruhaldi', 'Kashmal', 'Paan ka patta', 'Bhilawa', 'Bhangra', 'Kalmegh', 'Bahera', 'Bel', 'Not found in the given texts', 'Not found in the given texts', 'Brahmi', 'Genda', 'Genda', 'Safed chandan', 'Dhaniya', 'Dalchini', 'Bijauri', 'Santara', 'Aparajita', 'Kaphphool', 'Kanphul', 'Guggul', 'Shankhapushpi', '', 'Haldi', 'Motha', '', 'Kanphul', 'Dangui, Dangai', 'Shaliparni', 'Deodar', 'Sowa', 'Vidari kand', 'Bhangra', 'Elachi', '', 'Baibaring', 'Sapta-parna', 'Brahmi', 'Shankhpushpi', 'Brahmi', 'Saunf', 'Hing', 'Peepal', '', '', '', '', 'Mulethi', 'Gokhru', 'Guggul', 'Haldi', 'Harad', 'Gurhal, Jaswand', 'Hing', 'Kurchi', 'Sewalath', 'Chameli', 'Jatamansi', 'Jaiphal', 'Jyotishmati', 'Kantakari', 'Kaunch', 'Karanj', 'Katuka', 'Kelp', 'Ghritkumari', 'Kushmand', 'Kuth', 'Kurchi', '', '', '', '', 'Brahmi, Mandukaparni', 'Kali mirch', 'Khatmi', '', '', 'Kevancha, Khujani', 'Bathua', 'Nagarmotha', 'Bichu, Sisnu', 'Jatamansi', 'Neem', 'Nirgundi', 'Kumud', 'Tulsi', 'Nisoth', 'Santara', 'Rasont', 'Sona Patha', '', '', '', '', '', '', 'Amla', '', 'Pippal', 'Kali Mirch', 'Pippal', 'Chita', 'Arani', 'Kudzu', 'Punarnava', 'Anar', 'Gulabi genda', 'Banj oak', 'Lal mandur', 'Gulab', 'Gulab', 'Rusmari', 'Rusmari', 'Manjith', '', '', 'Sal', 'Shankhahuli', 'Safed chandan', 'Gulab', 'Shatavari', 'Kuth', '', 'Kaunch', 'Brahmi', '', 'Til', 'Safed musli', '', 'Kanghi', '', '', '', 'Adrak', '', 'Sona Patha', 'Dudhi, Kanphul', 'Arjun', 'Bahera', 'Harad', 'Til', 'Giloy', 'Ajwain', 'Gokhru', 'Nishoth', 'Tulsi', '', '', 'Dalchini', '', 'Bichu, Suryavarta', 'N/A', 'Adusa, Arusa', 'Bada-mula, Gidar tamaku', 'Khus, Khas', 'Baibidang', 'Kand', 'Sambhalu', '', '', 'Dioscorea', 'Asgandh', 'Kaunch', 'Gandana', 'Mulethi', 'Ajwain', '', '', 'Tumburu', 'Adrak'];
    const data2 = ['Vacha', 'Vasaka', 'Bilva', 'Agnimantha', 'Agnimantha', 'Ankolah', 'Ghrita-kumari', 'Khatmi', 'Amalaki, Dhatri', 'Not found in the given texts', 'Kira¯tatikta¯', 'Not found in the given texts', 'Anu taila', 'Not found in the given texts', 'Puga', 'Arjuna, Kakubha, Nadisarja, Partha, Shvetavaha', 'Hingu', 'Shatavari', 'Yava', 'Nimba', 'Brahmi', 'Bala', 'Danti', 'Vamshabhusha', 'Daruharidra', 'Tulsi', 'Kaphal', 'Kushmanda', 'Daruharidra', 'Daruharidra', 'Daruharidra', 'Nagavalli', 'Bhallataka', 'Bhringaraj', 'Kalmegh', 'Vibhitaka', 'Bilva', 'Not found in the given texts', 'Not found in the given texts', 'Brahmi', 'Not found in the given texts', 'Not found in the given texts', 'Chandana', 'Dhanyaka', 'Darusita', 'Bijapura', 'Naranga', 'Shankhapushpi', 'Kaphari', 'Hamsapadi', 'Guggulu', 'Shankhapushpi', '', 'Haridra', 'Mustaka', '', '', 'Diva¯li, Nandisvara', 'Shaliparni, Shaliparnika', 'Devada¯ru', 'Shatapushpa', 'Vidari', 'Bhringaraj', 'Su¯ks.ma Ela¯', '', 'Vidanga', 'Shilajatu', 'Triphalakadi', 'Vishnukraanti', 'Triphalakadi', 'Madhurika', 'Hingu', 'Asvattha, Bodhi', '', '', '', '', 'Yashtimadhu', 'Gokshura', 'Guggulu', 'Haridra, Nisha, Kanchani', 'Haritaki, Abhaya, Pathya', 'Japa, Japapushpa', 'Hingu, Hing', 'Kutaja', 'Shilajatu', 'Malati', 'Jatamamsi, Tapasvini', 'Jatiphala, Jatiphalam', 'Jyotishmati', 'Kantakari', 'Kapikacchu, Atmagupta', 'Karanja, Dridhabija', 'Katuka, Kutki', 'Kshira samudra, Sarpagandha', 'Kumari, Ghrita kumari', 'Kushmanda, Karkati', 'Kushta, Kustha', 'Kutaja, Kalinga', '', '', '', '', 'Brahmi', 'Maricha', 'Khatmi', 'Na¯ gakesara', '', 'Atmagupta', '', 'Musta, Mustaka', 'Bichu, Vishaangaa', 'Jatamansi, Tapasvini', 'Nimba, Arishta, Pichumarda', 'Nirgundi, Sindhuvara', 'Kumuda', 'Tulasi', 'Trivrit', 'Naranga', 'Daruharidra', 'Shyonaka', '', '', '', '', '', '', 'Amalaki', 'Katuka', 'Pippali', 'Maricha', 'Pippali', 'Chitraka', 'Agnimantha', 'Vidari, Vidarikand', 'Punarnava', 'Dalim', 'Kaknasa', 'Vrikshamla', 'Raktamandura', 'Satapatri', 'Satapatri', 'Rusmari', 'Rusmari', 'Manjistha', '', '', 'Rala', 'Shankhapushpi', 'Chandana', 'Satapatri', 'Shatavari', 'Kushta', '', 'Kapikacchu', 'Brahmi', '', 'Tila', 'Shatavari', '', 'Bala', '', '', '', 'Sunthi, Ardraka', '', 'Shyonaka, Shalaparni', 'Saritaparna', 'Arjuna, Kakubha', 'Vibhitaka, Aksha', 'Haritaki, Abhaya', 'Tila, Tila taila', 'Guduchi, Amrita', 'Ajmoda', 'Gokshura', 'Trivrit', 'Tulasi', '', '', 'Tvak', '', 'Bichu, Suryavarta', 'N/A', 'Va¯ saka, Vasaka', '', 'Usira, Sugandhimula', 'Vidanga, Vaividang', 'Vidari, Vidarikanda', 'Nirgundi', '', '', 'Vidari', 'Ashwagandha', 'Kapikacchu', 'Bhutagni', 'Yashtimadhu', 'Yavani', '', '', 'Tejohva', 'Ardraka'];
    const data3 = ['Acorus calamus', 'Adhatoda vasica (syn. Justicia adhatoda, A. zeylanica)', 'Aegle marmelos', 'Premna integrifolia', 'Premna integrifolia', 'Alangium lamarckii', 'Aloe vera', 'Althaea officinalis', 'Emblica officinalis', 'Panax quinquefolius', 'Andrographis paniculata', 'Angelica sinensis', '', 'Arctostaphylos uva-ursi', 'Areca catechu', 'Terminalia arjuna', 'Ferula assa-foetida', 'Asparagus racemosus', 'Avena sativa', 'Azadirachta indica', 'Bacopa monniera', 'Sida cordifolia', 'Baliospermum montanum', 'Bambusa arundinacea', 'Berberis vulgaris', 'Ocimum basilicum', 'Myrica cerifera', 'Benincasa hispida', 'Berberis aristata', 'Berberis nepalensis', 'Berberis vulgaris', 'Piper betle', 'Semicarpus anacardium', 'Eclipta alba', 'Andrographis paniculata', 'Terminalia belerica', 'Aegle marmelos', 'Bistorta spp.', 'Rubus fruticosus', 'Bacopa monnieri', 'Calendula officinalis', 'Calendula officinalis', 'Santalum album', 'Coriandrum sativum', 'Cinnamomum zeylanicum', 'Citrus medica', 'Citrus reticulata', 'Clitoria ternatea', 'Tussilago farfara', 'Symphytum officinale', 'Commiphora mukul', 'Convolvulus pluricaulis', 'Geranium maculatum', 'Curcuma longa', 'Cyperus rotundus', 'Turnera diffusa', 'Taraxacum officinale', 'Angelica sinensis', 'Desmodium gangeticum', 'Cedrus deodara', 'Anethum graveolens', 'Dioscorea villosa', 'Eclipta alba', 'Elettaria cardamomum', 'Eleutherococcus senticosus', 'Embelia ribes', 'Equisetum arvense', 'Euphrasia officinalis', 'Evolvulus alsinoides', 'Euphrasia officinalis', 'Foeniculum vulgare', 'Ferula foetida', 'Ficus religiosa', 'Gentiana spp.', 'Gentium', 'Geranium maculatum', 'Geum spp.', 'Glycyrrhiza glabra', 'Tribulus terrestris', 'Commiphora mukul', 'Curcuma longa', 'Terminalia chebula', 'Hibiscus rosa-sinensis', 'Ferula asafoetida', 'Holarrhena antidysenterica', 'Equisetum arvense', 'Jasminum officinale', 'Nardostachys jatamansi', 'Myristica fragrans', 'Lamium album', 'Solanum surattense', 'Mucuna pruriens', 'Pongamia pinnata', 'Picrorhiza kurroa', 'Laminaria spp.', 'Aloe vera', 'Benincasa hispida', 'Saussurea lappa', 'Holarrhena antidysenterica', 'Lamium album', 'Leonurus cardiaca', 'Ligusticum spp.', 'Mahonia aquifolium', 'Centella asiatica', 'Piper nigrum', 'Althaea officinalis', 'Mesua ferrea', 'Avena sativa', 'Mucuna pruriens', 'Verbascum thapsus', 'Cyperus rotundus', 'Urtica dioica', 'Nardostachys grandiflora', 'Azadirachta indica', 'Vitex negundo', 'Nymphaea odorata', 'Ocimum sanctum', 'Operculina turpethum', 'Citrus sinensis', 'Mahonia aquifolium', 'Oroxylum indicum', 'Ligusticum porteri', 'Paeonia lactiflora', 'Panax quinquefolius', 'Passiflora incarnata', 'Passiflora incarnata', 'Paeonia lactiflora', 'Phyllanthus emblica', 'Picrorhiza kurroa', 'Piper longum', 'Piper nigrum', 'Piper longum', 'Plumbago zeylanica', 'Premna integrifolia', 'Pueraria tuberosa', 'Boerhavia diffusa', 'Punica granatum', 'Echinacea purpurea', 'Quercus spp.', 'Rehmannia glutinosa', 'Rosa spp.', 'Rosa canina', 'Rosmarinus officinalis', 'Rosmarinus officinalis', 'Rubia cordifolia', 'Rubus discolor', 'Rumex crispus', 'Shorea robusta', 'Convolvulus pluricaulis', 'Santalum album', 'Rosa damascena', 'Asparagus racemosus', 'Saussurea lappa', 'Serenoa repens', 'Schisandra chinensis', 'Scutellaria spp.', 'Semecarpus anacardium', 'Sesamum indicum', 'Rehmannia glutinosa', 'Eleutherococcus senticosus', 'Sida cordifolia', '', 'Scutellaria lateriflora', 'Spilanthes acmella', 'Zingiber officinale', 'Symphytum officinale', 'Oroxylum indicum', 'Taraxacum officinale', 'Terminalia arjuna', 'Terminalia belerica', 'Terminalia chebula', 'Sesamum indicum', 'Tinospora cordifolia', 'Trachyspermum ammi', 'Tribulus terrestris', 'Operculina turpethum', 'Ocimum tenuiflorum', 'Turnera diffusa', 'Tussilago farfara', 'Cinnamomum zeylanicum', 'Aletris farinosa', 'Urtica dioica', 'Arctostaphylos uva-ursi', 'Adhatoda vasica', 'Verbascum thapsus', 'Vetiveria zizanioides', 'Embelia ribes', 'Pueraria tuberosa', 'Vitex negundo', 'Lamium album', 'Nymphaea odorata', 'Dioscorea villosa', 'Withania somnifera', 'Schisandra chinensis', 'Achillea millefolium', 'Glycyrrhiza glabra', 'Trachyspermum ammi', 'Rumex crispus', 'Zanthoxylum americanum', 'Zanthoxylum elatum', 'Zingiber officinale'];
    return (
        <>
            <Header />
            <section className="form">
                <div className="cs-grid">
                    <form onSubmit={handleSubmit}>
                        <div className="item-1">
                            <h4>Filter Herbs Details</h4>
                            <div>
                                <label htmlFor="plantFamily">Plant Family:</label>
                                <br /><input
                                    type="text"
                                    id="plantFamily"
                                    name="plantFamily"
                                    value={formData.plantFamily}
                                    onChange={handleChange} list='data1'
                                />
                                <datalist id='data1'>
                                    {data1.map((op) => <option>{op}</option>)}
                                </datalist>

                            </div>
                            <div>
                                <label htmlFor="hindiName">Hindi Name:</label>
                                <br /><input
                                    type="text"
                                    id="hindiName"
                                    name="hindiName"
                                    value={formData.hindiName}
                                    onChange={handleChange}
                                    list='data4'
                                />
                                <datalist id='data4'>
                                    {data4.map((op) => <option>{op}</option>)}
                                </datalist>
                            </div>
                            <div>
                                <label htmlFor="sanskritName">Sanskrit Name:</label>
                                <br /><input
                                    type="text"
                                    id="sanskritName"
                                    name="sanskritName"
                                    value={formData.sanskritName}
                                    onChange={handleChange}
                                    list='data2'
                                />
                                <datalist id='data2'>
                                    {data2.map((op) => <option>{op}</option>)}
                                </datalist>
                            </div>
                            <div>
                                <label htmlFor="scientificBinomial">Scientific Binomial:</label>
                                <br />
                                <input
                                    type="text"
                                    id="scientificBinomial"
                                    name="scientificBinomial"
                                    value={formData.scientificBinomial}
                                    onChange={handleChange}
                                    list='data3'
                                />
                                <datalist id='data3'>
                                    {data3.map((op) => <option>{op}</option>)}
                                </datalist>
                            </div>
                        </div>
                        <br />
                        <button className="item-7 " style={{ marginBottom: "1rem" }}>Search Herbs</button>
                    </form>
                </div>
            </section >
            {
                herbDetails.length > 0 && (
                    <div className="herbs-details">
                        <h4>Herbs Details</h4>
                        <ul>
                            {herbDetails.map((herb, index) => (
                                <li key={index}>
                                    <div className="herb-info">
                                        <div className="info-section">
                                            <h5>{herb['Other Names']['Hindi']}</h5>
                                            <h6>Botanical Name :- </h6>
                                            <p>
                                                Scientific Binomial  :-   {herb['Botanical Name']['Scientific Binomial']}
                                            </p>
                                            <p>
                                                Plant Family  :-   {herb['Botanical Name']['Plant Family']}
                                            </p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Other Names</h6>
                                            <p>
                                                Sanskrit  :-   {herb['Other Names']['Sanskrit']}
                                            </p>
                                            <p>
                                                Hindi  :-   {herb['Other Names']['Hindi']}
                                            </p>
                                            <p>
                                                English  :-   {herb['Other Names']['English']}
                                            </p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Part Used</h6>
                                            <p>{herb['Part Used']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Dravygun</h6>
                                            <p>Rasa  :-   {herb['Dravygun']['Rasa']}</p>
                                            <p>Vipaka  :-   {herb['Dravygun']['Vipaka']}</p>
                                            <p>Virya  :-   {herb['Dravygun']['Virya']}</p>
                                            <p>Karma  :-   {herb['Dravygun']['Karma'].join(', ')}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Toxicity</h6>
                                            <p>{herb['Toxicity']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Indications</h6>
                                            <p>{herb['Indications']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Contraindications</h6>
                                            <p>{herb['Contraindications']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Medicinal Uses</h6>
                                            <p>{herb['Medicinal Uses']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Constituents</h6>
                                            <p>{herb['Constituents']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Dosage</h6>
                                            <p>{herb['Dosage']}</p>
                                        </div>
                                        <div className="info-section">
                                            <h6>Botany</h6>
                                            <p>Description  :-   {herb['Botany']['description']}</p>
                                            <p>Ecology  :-   {herb['Botany']['Ecology']}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }


            < Footer />
        </>
    );
}

export default Herbs;
