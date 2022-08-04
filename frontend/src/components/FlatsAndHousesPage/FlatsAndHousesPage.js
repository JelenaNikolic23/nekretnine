import HousesAndFlatsList from "./HousesAndFlatsList";

function FlatsAndHousesPage() {
    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box text-start">
                                <h1 className="title-single text-start">Kuce i stanovi</h1>
                                <span className="color-text-a text-start">Poslovni objekti</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <span>Pocetna</span>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Kuce i stanovi
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <HousesAndFlatsList />
        </>
    )
}

export default FlatsAndHousesPage;