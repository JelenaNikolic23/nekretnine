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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5617.319734488748!2d19.81508462837177!3d45.254670369044625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b104a3283515d%3A0xcf7891c8d7726837!2z0KXQsNGY0LTRg9C6INCS0LXRmdC60L7QstCwIDExLCDQndC-0LLQuCDQodCw0LQgMjExMzc!5e0!3m2!1ssr!2srs!4v1660216357625!5m2!1ssr!2srs" width="100%" height="450" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;