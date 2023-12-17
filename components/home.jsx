
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/home.css';
import '../css/paralox.css'
import Header from './header';
import Footer from './footer';



function Main() {
    return (
        <div>
            <Header />
            <section className="parallax">

                <img src="../img/hill1.png" id="hill1" alt="Hill 1" />
                <img src="./img/hill2.png" id="hill2" alt="Hill 2" />
                <img src="./img/hill3.png" id="hill3" alt="Hill 3" />
                <img src="./img/hill4.png" id="hill4" alt="Hill 4" />
                <img src="./img/hill5.png" id="hill5" alt="Hill 5" />
                <img src="./img/tree.png" id="tree" alt="tree" />
                <h2 id="text">Ayurved Vaidya</h2>
                <img src="./img/leaf.png" id="leaf" alt="Leaf" />
                <img src="./img/plant.png" id="plant" alt="Plant" />
            </section>
            <div className="main">
                <div className='maincontainer'>
                    <div className="content main-content">
                        <h1 className="title">
                            Discover Natural Healing with Ayurveda: Your Path to Wellness
                        </h1>
                        <p className="description">
                            Welcome to Vaidya, your trusted source for time-tested Ayurvedic remedies that nurture your body, mind, and spirit. Say goodbye to modern medicines' side effects and embrace the holistic approach to healing with Ayurveda.
                        </p>

                        <NavLink to="/Symptom" className="cta cta-primary">
                            Get started
                            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                        <NavLink to="/Instruction" className="cta cta-secondary">
                            Start your Journey
                        </NavLink>
                    </div>
                </div>
                <div class="pa-medicine spacer-top spacer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="pa-medicine-box">
                                    <div class="pa-medi-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M125.696,125.994c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S131.216,125.994,125.696,125.994z"></path>
                                            <path d="M215.691,312.984h-29.998v-29.998c0-5.522-4.478-10-10-10s-9.999,4.478-9.999,10v29.998h-29.998
                                c-5.522,0-10,4.478-10,9.999s4.478,10,10,10h29.998v29.998c0,5.522,4.478,10,9.999,10s10-4.478,10-10v-29.998h29.998
                                c5.522,0,10-4.478,10-10S221.214,312.984,215.691,312.984z"></path>
                                            <path d="M485.578,321.984c-22.105-38.286-70.981-51.389-109.274-29.279l-40.618,23.45v-86.836c0-10.735-3.55-21.388-9.999-29.998
                                l-49.997-66.661v-28.386c11.638-4.128,19.999-15.242,19.999-28.279V29.998C295.687,13.457,282.23,0,265.689,0H85.698
                                C69.157,0,55.699,13.457,55.699,29.998v45.998c0,13.035,8.361,24.151,19.999,28.279v28.386l-50.001,66.665
                                c-6.446,8.606-9.996,19.258-9.996,29.993v193.66c0,27.569,22.429,49.997,49.997,49.997h160.702
                                c22.421,37.583,70.767,50.161,108.664,28.279L456.3,431.258C494.255,409.34,507.794,360.479,485.578,321.984z M75.698,29.998
                                c0-5.514,4.486-10,9.999-10h179.991c5.514,0,10,4.486,10,10v45.998c0,5.514-4.486,9.999-10,9.999H85.698
                                c-5.514,0-9.999-4.486-9.999-9.999V29.998z M41.701,211.319l51.996-69.326c1.298-1.73,2-3.836,2-6v-29.998h159.992v19.999h-89.995
                                c-5.522,0-10,4.478-10,10s4.478,10,10,10h94.995l48.993,65.322c3.202,4.275,5.191,9.39,5.792,14.674H35.913
                                C36.513,220.705,38.502,215.59,41.701,211.319z M65.699,452.977c-16.541,0-29.998-13.457-29.998-29.998v-10.099h181.675
                                c-3.171,12.965-3.15,26.813,0.481,40.098H65.699z M225.219,392.98H35.7V245.987h279.986V327.7l-60.619,35.002
                                C242.428,370.003,232.212,380.396,225.219,392.98z M325.066,483.935c-28.697,16.571-65.367,6.771-81.949-21.946
                                c-16.661-28.994-6.564-65.498,21.952-81.969l54.277-31.338l59.997,103.915L325.066,483.935z M446.3,413.939l-49.637,28.659
                                l-59.998-103.917l49.638-28.656c28.716-16.578,65.373-6.761,81.955,21.957C484.913,360.844,474.785,397.49,446.3,413.939z"></path>
                                        </svg>
                                    </div>
                                    <h2><a href="#">Herbal medicine</a></h2>
                                    <a href="#">Pure Ayurveda</a>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="pa-medicine-box">
                                    <div class="pa-medi-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M290.359,432L181.335,263.467V128c0-5.891-4.776-10.667-10.667-10.667h-53.333c-5.891,0-10.667,4.776-10.667,10.667
                                    v135.765L7.266,432.747c-4.755,8.082-7.263,17.288-7.263,26.666C0.002,488.455,23.546,511.999,52.588,512h194.24
                                    c9.983-0.003,19.752-2.887,28.136-8.306C299.013,488.147,305.906,456.049,290.359,432z M246.828,490.667H52.588
                                    c-5.591,0.009-11.083-1.482-15.902-4.318c-14.876-8.754-19.839-27.91-11.085-42.786L126.53,272.075
                                    c0.964-1.639,1.472-3.506,1.472-5.408v-128h32v128c-0.001,2.055,0.592,4.066,1.707,5.792l110.72,171.125
                                    c3.194,4.935,4.894,10.687,4.896,16.566C277.33,476.998,263.677,490.661,246.828,490.667z"></path>
                                            <path d="M153.655,310.112l-18.389-10.805L44.695,453.259c-0.966,1.642-1.475,3.514-1.473,5.419
                                    c0.006,5.891,4.787,10.662,10.678,10.655h74.101V448H72.535L153.655,310.112z"></path>
                                            <path d="M486.252,245.333H320.002c-23.564,0-42.667,19.103-42.667,42.667v170.667c0.035,29.441,23.893,53.298,53.333,53.333h96
                                    c29.441-0.035,53.298-23.893,53.333-53.333V313.749l24.469-24.459c4.817-4.826,7.523-11.365,7.527-18.183
                                    C512.006,256.881,500.479,245.341,486.252,245.333z M489.378,274.208l-27.584,27.584c-2,2-3.125,4.713-3.125,7.541v149.333
                                    c0,17.673-14.327,32-32,32h-96c-17.673,0-32-14.327-32-32V288c0-11.782,9.551-21.333,21.333-21.333l166.251,0
                                    c1.174-0.001,2.301,0.465,3.131,1.296C491.106,269.689,491.104,272.485,489.378,274.208z"></path>
                                            <path d="M416.002,309.333V448h-32v21.333h42.667c5.891,0,10.667-4.776,10.667-10.667V309.333H416.002z"></path>
                                            <path d="M298.668,154.496V10.667C298.668,4.776,293.893,0,288.002,0h-74.667c-5.891,0-10.667,4.776-10.667,10.667v146.859
                                    c-13.018,4.008-25.541,9.472-37.333,16.288l10.667,18.464c12.532-7.236,25.988-12.737,40-16.352c4.712-1.217,8.004-5.469,8-10.336
                                    V21.333h53.333v141.771c0.002,5.12,3.642,9.517,8.672,10.475c37.402,7.15,71.033,27.393,94.859,57.099l16.629-13.355
                                    C372.394,186.042,337.644,163.951,298.668,154.496z"></path>
                                            <path d="M453.335,149.333c-20.619,0-37.333,16.715-37.333,37.333c0,20.619,16.715,37.333,37.333,37.333
                                    c20.619,0,37.333-16.715,37.333-37.333C490.668,166.048,473.954,149.333,453.335,149.333z M453.335,202.667
                                    c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S462.172,202.667,453.335,202.667z"></path>
                                            <path d="M416.002,74.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32s32-14.327,32-32
                                    C448.002,88.994,433.675,74.667,416.002,74.667z M416.002,117.333c-5.891,0-10.667-4.776-10.667-10.667S410.111,96,416.002,96
                                    c5.891,0,10.667,4.776,10.667,10.667S421.893,117.333,416.002,117.333z"></path>
                                            <path d="M37.335,85.333c-20.619,0-37.333,16.715-37.333,37.333C0.002,143.285,16.716,160,37.335,160
                                    c20.619,0,37.333-16.715,37.333-37.333C74.668,102.048,57.954,85.333,37.335,85.333z M37.335,138.667c-8.837,0-16-7.163-16-16
                                    s7.163-16,16-16c8.837,0,16,7.163,16,16S46.172,138.667,37.335,138.667z"></path>
                                            <path d="M85.335,10.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32
                                    C117.335,24.994,103.008,10.667,85.335,10.667z M85.335,53.333c-5.891,0-10.667-4.776-10.667-10.667
                                    C74.668,36.776,79.444,32,85.335,32c5.891,0,10.667,4.776,10.667,10.667C96.002,48.558,91.226,53.333,85.335,53.333z"></path>
                                            <g>
                                                <rect x="320.002" y="309.333" width="32" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="320.002" y="352" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="320.002" y="394.667" width="32" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="320.002" y="437.333" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="21.335" y="192" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="53.335" y="245.333" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="234.668" y="288" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="213.335" y="245.333" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="202.668" y="202.667" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="213.335" y="437.333" width="21.333" height="21.333"></rect>
                                            </g>
                                            <g>
                                                <rect x="181.335" y="394.667" width="21.333" height="21.333"></rect>
                                            </g>
                                        </svg>
                                    </div>
                                    <h2><a href="#">chemical less</a></h2>
                                    <a href="#">Herbal Medicine</a>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="pa-medicine-box">
                                    <div class="pa-medi-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M300.804,278.657c-0.011-0.023-0.026-0.044-0.037-0.067c-0.134-0.279-0.281-0.552-0.449-0.815
                                    c-0.001-0.001-0.002-0.002-0.002-0.004c-0.16-0.25-0.341-0.488-0.532-0.719c-0.049-0.059-0.1-0.116-0.15-0.173
                                    c-0.152-0.173-0.313-0.339-0.483-0.499c-0.058-0.055-0.115-0.112-0.175-0.165c-0.217-0.192-0.445-0.377-0.689-0.547
                                    c-0.012-0.008-0.023-0.016-0.035-0.024c-0.245-0.169-0.499-0.317-0.756-0.453c-0.069-0.036-0.14-0.068-0.21-0.103
                                    c-0.213-0.104-0.428-0.198-0.646-0.28c-0.069-0.026-0.138-0.053-0.208-0.077c-0.585-0.202-1.186-0.328-1.79-0.38
                                    c-0.026-0.002-0.05-0.009-0.075-0.011c-2.568-0.198-63.407-4.217-100.627,50.911c-38.492,54.246-13.309,109.769-12.218,112.107
                                    c0.01,0.023,0.025,0.042,0.036,0.065c0.261,0.547,0.591,1.065,0.986,1.542c0.048,0.058,0.098,0.114,0.147,0.17
                                    c0.153,0.174,0.315,0.341,0.486,0.503c0.058,0.055,0.114,0.111,0.173,0.163c0.218,0.193,0.447,0.378,0.692,0.549
                                    c0.3,0.209,0.618,0.392,0.946,0.555c0.123,0.061,0.249,0.108,0.374,0.162c0.2,0.086,0.4,0.17,0.608,0.239
                                    c0.152,0.051,0.305,0.09,0.459,0.131c0.188,0.049,0.376,0.094,0.569,0.129c0.162,0.029,0.323,0.052,0.486,0.07
                                    c0.093,0.011,0.183,0.033,0.276,0.04c0.368,0.028,1.935,0.135,4.46,0.135c15.076,0,64.284-3.826,96.165-51.046
                                    C327.079,336.518,301.896,280.996,300.804,278.657z M261.759,293.499c6.494-1.874,12.474-2.933,17.449-3.522l-25.899,37.414
                                    l-3.422-29.691C253.7,296.093,257.653,294.684,261.759,293.499z M235.602,305.139l4.726,41.005l-20.888,30.175l-7.447-48.098
                                    c-0.085-0.547-0.23-1.069-0.422-1.565C218.473,318.041,226.509,310.867,235.602,305.139z M190.955,417.469
                                    c-3.906-15.93-6.889-43.86,8.412-72.469l7.632,49.292L190.955,417.469z M220.766,422.518c-6.494,1.875-12.474,2.933-17.448,3.523
                                    l16.052-23.188l48.845-10.217C255.687,406.998,239.779,417.03,220.766,422.518z M281.055,374.76
                                    c-0.529-0.004-1.066,0.044-1.604,0.156l-47.641,9.965l20.888-30.175l39.972-9.997C290.688,354.364,287.089,364.549,281.055,374.76
                                    z M294.626,328.712l-28.947,7.24l25.892-37.404C293.455,306.235,295.121,316.706,294.626,328.712z"></path>
                                            <path d="M428.246,348.906c4.155,0,7.522-3.368,7.522-7.522V131.501c0-2.529-0.532-4.979-1.582-7.284L406.294,63.06V12.537
                                    C406.294,5.624,400.67,0,393.757,0H284.365h-56.258H125.195c-6.913,0-12.537,5.624-12.537,12.537v50.149l-34.085,59.222
                                    c-1.532,2.659-2.341,5.687-2.341,8.757v368.798c0,6.913,5.624,12.537,12.537,12.537h283.416h51.046
                                    c6.913,0,12.537-5.624,12.537-12.537v-106.06c0-4.154-3.367-7.522-7.522-7.522c-4.155,0-7.522,3.368-7.522,7.522v103.553h-41.008
                                    l0.416-367.373v-0.1l18.979-45.915l21.387,46.892c0.15,0.33,0.226,0.681,0.226,1.043v209.883
                                    C420.724,345.539,424.091,348.906,428.246,348.906z M127.702,15.044h92.883v42.129h-92.883V15.044z M365.66,125.112
                                    c-0.281,0.681-0.461,1.399-0.533,2.13c-0.024,0.244-0.036,0.489-0.037,0.735l-0.418,368.979H91.276V130.665
                                    c0-0.439,0.116-0.87,0.334-1.251l32.92-57.197h92.06l-25.317,57.655c-0.418,0.953-0.635,1.983-0.635,3.025v84.344
                                    c0,9.678,7.874,17.551,17.551,17.551h38.174c9.678,0,17.552-7.874,17.552-17.551v-11.388c0-4.154-3.367-7.522-7.522-7.522
                                    c-4.155,0-7.522,3.368-7.522,7.522v11.388c0,1.382-1.124,2.507-2.507,2.507H208.19c-1.383,0-2.507-1.125-2.507-2.507v-82.765
                                    l29.313-66.756c0.418-0.954,0.635-1.983,0.635-3.025V15.044h41.214v48.201l-27.434,68.52c-0.355,0.889-0.539,1.838-0.539,2.796
                                    v17.635c0,4.154,3.367,7.522,7.522,7.522c4.155,0,7.522-3.368,7.522-7.522V136.01l25.542-63.793h98.067L365.66,125.112z
                                    M391.25,57.173h-99.362V15.044h99.362V57.173z"></path>
                                        </svg>
                                    </div>
                                    <h2><a href="#">Herb Products</a></h2>
                                    <a href="#">Pure Herbal</a>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pa-why spacer-top spacer-bottom">
                    <div class="container">
                        <div class="pa-heading">
                            <img src="http://kamleshyadav.com/html/pure-ayurveda/html/assets/images/herbal.svg" alt="image" class="img-fluid" />
                            <h1>why pure Ayurveda</h1>
                            <h5>best for you</h5>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 pr-0">
                                <div class="pa-why-ul pa-why-left">
                                    <ul>
                                        <li>100 % Organic</li>
                                        <li>Best Quality</li>
                                        <li>hygienic product</li>
                                        <li>Quality tested</li>
                                        <li>Health Care</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 p-0">
                                <div class="pa-why-img">
                                    <img src="http://kamleshyadav.com/html/pure-ayurveda/html/assets/images/herbal.svg" alt="image" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 pl-0">
                                <div class="pa-why-ul pa-why-right">
                                    <ul>
                                        <li>100 % Organic</li>
                                        <li>Best Quality</li>
                                        <li>hygienic product</li>
                                        <li>Quality tested</li>
                                        <li>Health Care</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-content">
                    <section className="bg-white dark-bg-gray">
                        <div className="content-1">
                            <div className="left-content-1">
                                <h2 className="section-title">Dive into the Healing World of Ayurveda</h2>
                                <p className="section-description">Experience the profound healing potential of Ayurveda at Vaidya. Our platform is your gateway to a world where nature's remedies meet ancient wisdom. In today's fast-paced world, prioritizing your health is paramount, and Ayurveda offers a unique path to wellness. We believe in holistic healing, addressing not only the symptoms but the root causes of ailments.</p>
                                <p>Join us on this transformative journey towards balance, vitality, and well-being, guided by the time-tested wisdom of Ayurveda.</p>
                            </div>
                            <div className="right-content-1">
                                <div className="image-grid">
                                    <img className="image" src="../img/vaidya1.jpg" alt="office content 1" />
                                    <img className="mt-4 image" src="../img/vaidya2.jpg" alt="office content 2" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="faq-section">
                    <div className="faq-container">
                        <h2 className="faq-title"><span>Frequently asked questions</span></h2>

                        <div className="faq-grid">
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>

                                    <h3>What is Ayurveda?</h3>
                                </div>
                                <p className="faq-answer">Ayurveda is an ancient system of natural healing that originated in India over 5,000 years ago. It focuses on achieving balance and harmony in the body, mind, and spirit through personalized treatments, herbal remedies, diet, and lifestyle adjustments.</p>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>How can Ayurveda benefit me?</h3>
                                </div>
                                <p className="faq-answer">Ayurveda can benefit individuals seeking natural and holistic solutions for various health concerns. It promotes overall well-being, addresses chronic conditions, and offers personalized approaches to improving physical, mental, and emotional health.</p>
                            </div>

                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>Are Ayurvedic remedies safe?</h3>
                                </div>
                                <p className="faq-answer">Yes, Ayurvedic remedies are generally safe when used correctly. They are derived from natural sources and have been used for centuries. However, it's essential to consult with an Ayurvedic practitioner or healthcare professional to ensure proper usage and dosage.</p>
                            </div>

                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>How is Ayurveda different from conventional medicine?</h3>
                                </div>
                                <p className="faq-answer">Ayurveda differs from conventional medicine in that it focuses on individualized treatments, emphasizes prevention, and seeks to address the root causes of health issues rather than just managing symptoms. Ayurveda also places a strong emphasis on the mind-body connection.</p>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3> Can Ayurveda be used alongside conventional medicine?</h3>
                                </div>
                                <p className="faq-answer">Ayurveda can complement conventional medicine, but it's essential to consult with both your Ayurvedic practitioner and healthcare provider to ensure that treatments do not interact negatively. Open communication between practitioners is key.</p>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>How can I determine my Ayurvedic body type (Dosha)?</h3>
                                </div>
                                <p className="faq-answer">Go to our Blog section or You can take an online Dosha quiz or consult with an Ayurvedic practitioner for a more accurate assessment. Your Dosha influences the recommendations for diet, lifestyle, and remedies. </p>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>Is Ayurveda suitable for children and the elderly?</h3>
                                </div>
                                <p className="faq-answer">Ayurveda can be adapted for individuals of all ages. Ayurvedic principles can provide guidance on nutrition, lifestyle, and remedies for children, adults, and the elderly, helping them maintain health and vitality.</p>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    <svg className="faq-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    <h3>How long does it take to see results with Ayurvedic treatments?</h3>
                                </div>
                                <p className="faq-answer">The time it takes to see results with Ayurveda varies depending on the individual, the condition being treated, and their commitment to following Ayurvedic recommendations. Some people experience improvements quickly, while others may require more time for lasting changes.</p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div >

    );
}

export default Main;
