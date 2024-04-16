import React from 'react'
import "../styles/GeneratorOne.css"
// import SwitchButton from './SwitchButton'
import renderLineChart from './PowerChart'
import PowerChart from './PowerChart'
import AlertsAccordion from './AlertsAccordion'
import { Link } from 'react-router-dom'
import { Switch, useStatStyles } from '@chakra-ui/react'
const GeneratorOne = () => {
  const [buttonState, setButtonState] = useState(false) 
  const handleSwitchOn = ()=>{
    // setButtonState(true)
  }
  return (
    <div className='generator1-main'>
      <div className="main-left">
        <div className="navigate-dashboard-generator">
          <Link to='/' className="navigate-section">

            DASHBOARD &gt; GENERATOR
          </Link>
          <div className="generator-card">
            <div className="heading-battery-temp">
              <div className="heading-genset">GENERATOR IRC231GHU</div>
              <div className="battery-temp-switch">
                <div className="temperature-stat">
                  <div className="temp-icon"></div>
                  <div className="temp-value">32°C</div>
                </div>
                <div className="battery-stat">
                  <div className="battery-icon"></div>
                  <div className="battery-value">32%</div>
                </div>
                <div className="generator-switch">
                  <Switch colorScheme="green" size="lg" onClick={handleSwitchOn}/>
                </div>
              </div>
            </div>
            <div className="generator1-main-card-details">
              <div className="generator-img"></div>
              <div className="generator-stats-table">
                <div className="stats-titles">
                  <div className="stat-title" id="voltage">Voltage</div>
                  <div className="stat-title" id="power-kw">Power (kW)</div>
                  <div className="stat-title" id="power-kva">Power (kVA)</div>
                  <div className="stat-title" id="power-factor">Power Factor</div>
                  <div className="stat-title" id="current">Current (A)</div>
                  <div className="stat-title" id="engine-running-hr">Engine running hours (Hr)</div>
                </div>
                <div className="stats-values">
                  <div className="stat-value" id="voltage1">10</div>
                  <div className="stat-value" id="voltage2">10</div>
                  <div className="stat-value" id="voltage3">10</div>
                  <div className="stat-value" id="voltage4">10</div>
                  <div className="stat-value" id="voltage5">10</div>
                  <div className="stat-value" id="voltage6">10</div>
                </div>
              </div>
              <div className="paramter-values-generator1">
                <div className="parameter-section" id='running-timeparameter'>
                  <div className="parameter-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4.5 12.9375C4.5 16.8147 7.65405 20 11.5312 20C15.4084 20 18.5625 16.8147 18.5625 12.9375C18.5625 12.7273 18.5271 12.5215 18.5087 12.3127C18.2291 12.4061 17.9355 12.4688 17.625 12.4688C16.0741 12.4688 14.8125 11.2072 14.8125 9.65625C14.8125 9.1637 14.9425 8.67798 15.1879 8.25232L15.7334 7.30762C14.9023 6.68542 13.9479 6.27283 12.9375 6.06555V4.9375H13.875V4H9.1875V4.9375H10.125V6.04797C6.91943 6.70117 4.5 9.54175 4.5 12.9375ZM15.8507 15.7926L15.5573 16.1588C14.5726 17.3883 13.1055 18.0938 11.5312 18.0938C8.68811 18.0938 6.375 15.7806 6.375 12.9375C6.375 10.0944 8.68811 7.78125 11.5312 7.78125H12V11.6176C12.5444 11.8118 12.9375 12.3271 12.9375 12.9375C12.9375 13.0986 12.9045 13.2511 12.8545 13.3954L15.8507 15.7926Z" fill="#934621" />
                      <path d="M11.5312 13.4062C11.7899 13.4062 12 13.1961 12 12.9374C12 12.6788 11.7899 12.4687 11.5312 12.4687C11.2726 12.4687 11.0625 12.6788 11.0625 12.9374C11.0625 13.1961 11.2726 13.4062 11.5312 13.4062Z" fill="#934621" />
                      <path d="M11.5313 14.3437C10.7559 14.3437 10.125 13.7129 10.125 12.9375C10.125 12.3271 10.5181 11.8117 11.0625 11.6175V8.74484C9.11145 8.9614 7.57556 10.5185 7.35669 12.4687H8.25V13.4062H7.35986C7.57898 15.3539 9.11487 16.8897 11.0625 17.1089V16.2187H12V17.1102C12.9512 17.0042 13.8355 16.6006 14.5127 15.9229L12.2699 14.1288C12.0546 14.2628 11.803 14.3437 11.5313 14.3437Z" fill="#934621" />
                      <path d="M19.2501 8.72006L17.625 5.90622L15.9999 8.72055C15.8365 9.00388 15.75 9.32748 15.75 9.65622C15.75 10.6903 16.5909 11.5312 17.625 11.5312C18.6591 11.5312 19.5 10.6903 19.5 9.65622C19.5 9.32663 19.4135 9.00302 19.2501 8.72006Z" fill="#934621" />
                    </svg>
                  </div>
                  <div className="parameter-title">Running Time</div>
                  <div className="parameter-value">30 mins</div>
                </div>
                <div className="parameter-section" id='frequency-parameter'>
                  <div className="parameter-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17.9837 10.2202C17.8605 9.97381 17.6087 9.81818 17.3332 9.81818C17.0577 9.81818 16.8059 9.97381 16.6827 10.2202L14.5073 14.5709L11.7081 7.37282C11.6023 7.10087 11.3443 6.91847 11.0526 6.90945C10.7614 6.90107 10.4922 7.06669 10.3699 7.33161L7.65582 13.2121H4.72727C4.32557 13.2121 4 13.5377 4 13.9394C4 14.341 4.32557 14.6666 4.72727 14.6666H8.12118C8.40481 14.6666 8.6626 14.5017 8.78149 14.2441L10.973 9.49576L13.7463 16.6271C13.8505 16.8952 14.103 17.0767 14.3904 17.09C14.4017 17.0906 14.413 17.0908 14.4242 17.0908C14.6986 17.0908 14.951 16.936 15.0746 16.6888L17.3332 12.1717L18.6221 14.7494C18.8017 15.1087 19.2386 15.2543 19.5978 15.0747C19.9571 14.895 20.1027 14.4582 19.9231 14.099L17.9837 10.2202Z" fill="#934621" />
                    </svg>
                  </div>
                  <div className="parameter-title">Frequency</div>
                  <div className="parameter-value">50 Hz</div>
                </div>
                <div className="parameter-section" id='engine-rpm-parameter'>
                  <div className="parameter-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.82291 12.4331C6.92251 13.6502 7.43942 14.7761 8.30557 15.6423L8.63818 15.9749L6.64257 17.9706L6.30998 17.638C4.90751 16.2355 4.09699 14.4012 4.00016 12.4331H6.82291V12.4331Z" fill="#934621" />
                      <path d="M6.82885 11.4924H4.00833C4.12764 9.69952 4.83816 8.01661 6.04521 6.67093L8.01733 8.64309C7.34024 9.45251 6.92885 10.4388 6.82885 11.4924Z" fill="#934621" />
                      <path d="M15.6524 15.6128C16.5059 14.7593 17.0244 13.6603 17.1421 12.475H19.9966C19.8776 14.4126 19.0656 16.2186 17.6777 17.6066L17.349 17.9353L15.316 15.9492L15.6524 15.6128Z" fill="#934621" />
                      <path d="M12.485 6.80306V4.00003C14.2802 4.09884 15.962 4.78926 17.3044 5.97812L15.3047 7.97787C14.5019 7.30702 13.5262 6.90049 12.485 6.80306Z" fill="#934621" />
                      <path d="M6.71231 6.00761C8.06131 4.81067 9.74748 4.1109 11.5442 4.00266V6.79954C10.4874 6.88991 9.49621 7.2981 8.68268 7.97795L6.71231 6.00761Z" fill="#934621" />
                      <path d="M15.9699 8.64324L17.9716 6.64154C19.1916 8.00296 19.9008 9.7129 20 11.5343H17.1508C17.0656 10.4664 16.656 9.46436 15.9699 8.64324Z" fill="#934621" />
                      <path d="M9.1925 17.1369H10.1332V18.0776H11.0845V19.0184H10.1332V19.9591H9.1925V19.0184H8.25175V18.0776H9.1925V17.1369Z" fill="#934621" />
                      <path d="M15.7778 18.0776H13.426V19.0184H15.7778V18.0776Z" fill="#934621" />
                      <path d="M11.544 13.9249V9.14056H12.4847V13.9249C13.9577 14.4683 13.6057 16.6382 12.0143 16.6666C10.4227 16.6381 10.0713 14.468 11.544 13.9249Z" fill="#934621" />
                    </svg>
                  </div>
                  <div className="parameter-title">Engine RPM</div>
                  <div className="parameter-value">50</div>
                </div>
                <div className="parameter-section" id='coolant-parameter'>
                  <div className="parameter-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.1875 6.53124V5.59374H12.4687V4H11.5312V10.9717C10.8107 11.1763 10.2812 11.8397 10.2812 12.625C10.2812 13.5727 11.0523 14.3437 12 14.3437C12.9477 14.3437 13.7187 13.5727 13.7187 12.625C13.7187 11.8397 13.1893 11.1763 12.4687 10.9717V9.65623H14.1875V8.71873H12.4687V8.09373H14.1875V7.15624H12.4687V6.53124H14.1875Z" fill="#934621" />
                      <path d="M17.3334 16.2499C16.2695 16.2499 16.2109 14.9999 14.6667 14.9999C13.1328 14.9999 13.0547 16.2499 12.0002 16.2499C12.0001 16.2499 12 16.2499 11.9999 16.2499C11.9998 16.2499 11.9998 16.2499 11.9997 16.2499C10.9453 16.2499 10.8671 14.9999 9.33314 14.9999C7.78899 14.9999 7.73039 16.2499 6.66652 16.2499C5.61718 16.2499 5.52343 14.9999 4 14.9999V15.9374C5.0664 15.9374 5.12109 17.1874 6.66658 17.1874C8.16795 17.1874 8.29295 15.9374 9.3332 15.9374C10.4336 15.9374 10.4453 17.1874 11.9998 17.1874C11.9998 17.1874 11.9999 17.1874 12 17.1874C12.0001 17.1874 12.0002 17.1874 12.0002 17.1874C13.5547 17.1874 13.5664 15.9374 14.6668 15.9374C15.707 15.9374 15.832 17.1874 17.3334 17.1874C18.8789 17.1874 18.9336 15.9374 20 15.9374V14.9999C18.4765 14.9999 18.3828 16.2499 17.3334 16.2499Z" fill="#934621" />
                      <path d="M17.3334 19.0625C16.2695 19.0625 16.2109 17.8125 14.6667 17.8125C13.1328 17.8125 13.0547 19.0625 12.0002 19.0625C12.0001 19.0625 12 19.0625 11.9999 19.0625C11.9998 19.0625 11.9998 19.0625 11.9997 19.0625C10.9453 19.0625 10.8671 17.8125 9.33314 17.8125C7.78899 17.8125 7.73039 19.0625 6.66652 19.0625C5.61718 19.0625 5.52343 17.8125 4 17.8125V18.75C5.0664 18.75 5.12109 20 6.66658 20C8.16795 20 8.29295 18.75 9.3332 18.75C10.4336 18.75 10.4453 20 11.9998 20C11.9998 20 11.9999 20 12 20C12.0001 20 12.0002 20 12.0002 20C13.5547 20 13.5664 18.75 14.6668 18.75C15.707 18.75 15.832 20 17.3334 20C18.8789 20 18.9336 18.75 20 18.75V17.8125C18.4765 17.8125 18.3828 19.0625 17.3334 19.0625Z" fill="#934621" />
                    </svg>
                  </div>
                  <div className="parameter-title">Coolant Temp</div>
                  <div className="parameter-value">50°c</div>
                </div>
                <div className="parameter-section" id='lube-pressure-parameter'>
                  <div className="parameter-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15.5262 11.2921H15.5399C17.06 11.285 18.2944 10.046 18.2944 8.52399C18.2944 7.68838 17.8424 7.00177 17.2954 6.25528L15.5262 4L13.7571 6.25528C13.2101 7.0017 12.7581 7.68829 12.7581 8.52396C12.7581 10.0503 13.9999 11.2921 15.5262 11.2921Z" fill="#934621" />
                      <path d="M15.5267 12.2296L15.5101 12.2295C13.4742 12.2208 11.8206 10.5618 11.8206 8.5239C11.8206 8.01893 11.9348 7.56749 12.1171 7.14582L11.0889 5.83505L7.4669 10.4524L7.45772 10.4646C6.53436 11.7239 5.70557 12.9891 5.70557 14.6165C5.70557 17.5779 8.10902 19.9884 11.0678 19.9999L11.0897 20C14.0577 20 16.4725 17.585 16.4725 14.6166C16.4725 13.7274 16.2248 12.9464 15.8496 12.2153C15.7432 12.2246 15.6355 12.2296 15.5267 12.2296Z" fill="#934621" />
                    </svg>
                  </div>
                  <div className="parameter-title">Lube Oil Pressure</div>
                  <div className="parameter-value">50 Psi</div>
                </div>
              </div>
            </div>
            <div className="graph-section-bottom">
              <PowerChart className="line-chart" />

            </div>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="alerts-device-info">
          <AlertsAccordion />
        </div>
        <div className="contact-info-card">
          <div className="contact-info-title">
            <div className="phone-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z" stroke="#19988B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="contact-heading">CONTACT INFORMATION</div>
          </div>
          <div className="contact-details">
            <div className="detail-card">
              <div className="email-title">Email ID</div>
              <div className="email-value">sample@gmail.com</div>
            </div>
            <div className="detail-card">
              <div className="phone-title">Mobile Number</div>
              <div className="phone-value">950xx25637</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneratorOne