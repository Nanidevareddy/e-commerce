export default function Loginpage(){
    return <><div className="container">
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="textbox">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn">Login</button>
                <p className="signup">Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    </div></>
}