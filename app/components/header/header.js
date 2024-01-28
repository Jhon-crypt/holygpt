import '../..//styles/header.css'
import { GiCrossedAirFlows, GiIronCross, GiHospitalCross } from "react-icons/gi";
import { FaCross } from "react-icons/fa";
import { GiJerusalemCross } from "react-icons/gi";
import { BrowserView, MobileView } from 'react-device-detect';



export default function HolyHeader() {

    return (

        <>

            <nav class="navbar navbar-expand-lg">
                <div class="container px-5 mt-4">
                    <BrowserView>
                        <a id="text-heading" class="nav-link" aria-current="page" href="#">Holy~GPT</a>
                    </BrowserView>
                    <a class="navbar-brand" href="#">
                        <GiCrossedAirFlows style={{ fontSize: "35px" }} />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <MobileView>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a id="text-heading" class="nav-link" aria-current="page" href="#">Holy~GPT</a>
                                </li>
                            </ul>
                        </MobileView>
                        <div class="d-flex align-items-center ms-auto">
                            <button id="action-header-button" type="button" class="me-3">
                                <span className='me-2'><GiHospitalCross /></span>
                                <span className='me-2'><FaCross /></span>
                                <span className='me-2'><GiIronCross /></span>
                                <span className='me-2'><GiJerusalemCross /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}