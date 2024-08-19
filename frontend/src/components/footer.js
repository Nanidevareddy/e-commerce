export default function Footer() {
    return <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li><strong>Email:</strong> contact@yourwebsite.com</li>
          <li><strong>Phone:</strong> +1 234 567 890</li>
          <li><strong>Address:</strong> 1234 Street Name, City, State, 56789</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Newsletter</h3>
        <form action="#" method="post">
          <input type="email" placeholder="Your email address" required/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
    </div>
  </footer>
}