import '../../styles/hero.css'
import '../../styles/header.css'
import HolyGptModal from '../modal/holyGptModal'

export default function CenteredHero() {

    return (

        <>
            <div class="px-4 py-5 my-5 text-center">
                <h1 id="centered-hero-text-header" class="display-5 fw-bold">Your AI Bible<br /> Companion Journey</h1>
                <div class="col-lg-6 mx-auto">
                    <p id="centered-hero-text" class="lead mb-4">Experience personalized Bible lessons with HolyGPT, your AI companion for spiritual growth.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button id="action-button-1" type="button" class="gap-3" data-bs-toggle="modal" data-bs-target="#holyGptModal">Explore Now</button>
                        <button id="action-header-button" type="button" class="">Custom HolyGpt</button>
                    </div>
                </div>
            </div>

            <HolyGptModal />
        </>

    )

}