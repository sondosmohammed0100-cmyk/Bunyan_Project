function FormDashboard({ setIsTyping }) {

    const handleChange = (e) => {
        if (e.target.value.trim() !== "") {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    };

    return (
        <div className="container">

            <form onSubmit={(e) => e.preventDefault()}>

                {/* Email */}
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>

                    <input
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />

                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>

                </div>

                {/* Password */}
                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>

                    <input
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />

                </div>

                {/* Checkbox */}
                <div className="mb-3 form-check">

                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />

                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>

                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>

            </form>

        </div>
    );
}

export default FormDashboard;