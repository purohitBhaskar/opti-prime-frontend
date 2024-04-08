import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import "../styles/AlertsAccordion.css"

const AlertsAccordion = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple variant="none">
            <AccordionItem border="none">
                <h2>
                    <AccordionButton

                    >
                        <Box as="span" flex='1' textAlign='left' pb={5}
                            style={{
                                width: "315px",
                                display: "flex", flexDirection: "row",
                                gap: "33px",
                                color: "#DDD",

                                /* H3 */
                                fontFamily: "Prompt",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "28px", /* 155.556% */
                                letterSpacing: "1.8px",
                                textTransform: "uppercase",
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10.29 3.86L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7239C2.83871 20.901 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.86C13.5318 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z" stroke="#19988B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 9V13" stroke="#19988B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 17H12.01" stroke="#19988B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Alerts (12)
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    style={{
                        width: "300px",
                        height: "118px",
                        backgroundColor: ""
                    }} className='ac-panel'
                    ml={10} overflow="auto"
                    bgColor="#0A1517" display='flex' flexDir='column' justifyContent='space-between' >
                    <div className="alert-stats-row">
                        <div className="notification-icon-title">
                            <div className="alert-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#C37C5A" />
                                </svg>
                            </div>
                            <div className="alert-title">Start Alert</div>
                        </div>
                        <div className="alert-time">10:32 am</div>
                    </div>
                    <div className="alert-details">
                        Optiprime started with 2 generator configuration
                    </div>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem border='none' mt={30} borderBottom='1px solid white'>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' pb={5}
                            style={{
                                width: "315px",
                                display: "flex", flexDirection: "row",
                                gap: "33px",
                                color: "#DDD",

                                /* H3 */
                                fontFamily: "Prompt",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "28px", /* 155.556% */
                                letterSpacing: "1.8px",
                                textTransform: "uppercase",
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 14V10.5M12 7H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="#19988B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Device Info
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <div className="specifications-panel">
                        <div className="specifications-heading">Spcifications</div>
                        <div className="specifications">
                            <div className="specification">
                                <div className="specification-title">Location</div>
                                <div className="specification-value">Pune Baner</div>
                            </div>
                            <div className="specification">
                                <div className="specification-title">Sys Voltage</div>
                                <div className="specification-value">50 V</div>
                            </div>
                            <div className="specification">
                                <div className="specification-title">Cylinder</div>
                                <div className="specification-value">Lorem</div>
                            </div>
                            <div className="specification">
                                <div className="specification-title">Battery Alternator</div>
                                <div className="specification-value">Lorem, ipsum.</div>
                            </div>
                            <div className="specification">
                                <div className="specification-title">Intake Air method</div>
                                <div className="specification-value">Lorem</div>
                            </div>
                            <div className="specification">
                                <div className="specification-title">Type</div>
                                <div className="specification-value">Lorem ipsum</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="detailed-infos-panel">
                        <div className="detailed-infos-heading">Detailed Info</div>
                        <div className="detailed-infos">
                            <div className="detailed-info">
                                <div className="detailed-info-title">Location</div>
                                <div className="detailed-info-value">Pune Baner</div>
                            </div>
                            <div className="detailed-info">
                                <div className="detailed-info-title">Sys Voltage</div>
                                <div className="detailed-info-value">50 V</div>
                            </div>
                            <div className="detailed-info">
                                <div className="detailed-info-title">Cylinder</div>
                                <div className="detailed-info-value">Lorem</div>
                            </div>
                            <div className="detailed-info">
                                <div className="detailed-info-title">Battery Alternator</div>
                                <div className="detailed-info-value">Lorem, ipsum.</div>
                            </div>
                            <div className="detailed-info">
                                <div className="detailed-info-title">Intake Air method</div>
                                <div className="detailed-info-value">Lorem</div>
                            </div>
                            <div className="detailed-info">
                                <div className="detailed-info-title">Type</div>
                                <div className="detailed-info-value">Lorem ipsum</div>
                            </div>
                            
                        </div>
                    </div>
                </AccordionPanel>
            </AccordionItem>
        </Accordion >
    )
}

export default AlertsAccordion