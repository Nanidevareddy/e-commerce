export default function Signin() {
    return <><div class="container">
        <div class="signin-box">
            <h2>Sign In</h2>
            <form>
                <div class="textbox">
                    <input type="email" placeholder="Email ID" required/>
                </div>
                <div class="textbox">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div class="textbox">
                    <input type="password" placeholder="Password" required/>
                </div>
                <button type="submit" class="btn">Sign In</button>
                <p class="signup">Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    </div></>
}