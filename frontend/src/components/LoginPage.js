import PageIntro from "./Common/PageIntro";

function LoginPage() {

    const pageIntroProps = {
        title: "Prijava za agente",
        subtitle: "U slucaju da nemate nalog, obratite se menadzmentu",
        pathLabel: "Prijava"
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <div className="row mb-5">
            <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="userName" className="form-label">Korisnicko ime</label>
                            <input type="email" className="form-control" id="userName" aria-describedby="userName" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Lozinka</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button className="btn btn-b-n">Prijava</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginPage;
