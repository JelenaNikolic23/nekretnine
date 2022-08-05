import PageIntro from "../Common/PageIntro";

function ContactPage() {

    const pageIntroProps = {
        title: "Kontakt",
        subtitle: "Kako do nas?",
        pathLabel: "Kontakt"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-map box">
                            <div id="map" className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="450" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;