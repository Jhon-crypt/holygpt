export default function HolyHeader() {

    return (

        <>

            <nav class="navbar navbar-expand-lg">
                <div class="container px-5 mt-4">
                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarButtonsExample"
                        aria-expanded="false" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="/images/bootstrap-logo.svg" width="36" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Dashboard</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center ms-auto">
                            <button type="button" class="btn btn-default px-3 me-2">
                                Login
                            </button>
                            <button type="button" class="btn btn-primary me-3">
                                Sign up for free
                            </button>
                            <a
                                class="btn btn-subtle px-3"
                                href="https://github.com/mdbootstrap/mdb-ui-kit"
                                role="button"
                            ><i class="fab fa-github"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}