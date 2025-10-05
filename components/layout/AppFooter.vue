<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h2 class="logo">MangaHub</h2>
        <p>Your one-stop destination for the best translated webtoons and manga.</p>
      </div>

      <div class="footer-section links">
        <h4>Navigate</h4>
        <ul>
          <li><NuxtLink to="/public">Home</NuxtLink></li>
          <li><NuxtLink to="/browse">Browse</NuxtLink></li>
          <li><NuxtLink to="/my-list">My List</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section links">
        <h4>Legal</h4>
        <ul>
          <li><NuxtLink to="/terms">Terms of Service</NuxtLink></li>
          <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section social">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85C2.229 3.855 3.746 2.31 6.97 2.163 8.234 2.105 8.614 2.093 12 2.093zm0 1.626c-3.142 0-3.488.012-4.717.068-2.677.122-3.996 1.448-4.118 4.118-.056 1.228-.068 1.574-.068 4.717s.012 3.488.068 4.717c.122 2.67 1.448 3.996 4.118 4.118 1.229.056 1.574.068 4.717.068s3.488-.012 4.717-.068c2.67-.122 3.996-1.448 4.118-4.118.056-1.228.068-1.574.068-4.717s-.012-3.488-.068-4.717c-.122-2.67-1.448-3.996-4.118-4.118-1.228-.056-1.574-.068-4.717-.068zM12 6.874a5.126 5.126 0 100 10.252 5.126 5.126 0 000-10.252zM12 15a3 3 0 110-6 3 3 0 010 6zm6.406-9.696a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path></svg>
          </a>
          <a href="#" aria-label="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.222 0H3.778C2.128 0 .778 1.35 1.778 3.028L12 21.333l10.222-18.305C23.222 1.35 21.872 0 20.222 0zM8.667 12.667H6.889l-1.333-2.222 1.333-2.223h1.778l-1.333 2.223zm4.666 0h-1.777l-1.334-2.222 1.334-2.223h1.777L12 10.444zm4.667 0h-1.778L15 10.444l1.333-2.223h1.778l-1.333 2.223z"></path></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 MangaHub. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--primary-color);
  border-top: 1px solid var(--border-color);
  padding: 3rem 2rem 1rem;
  color: #aaa;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  padding-bottom: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section.about {
  flex: 2;
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--text-color);
  margin: 0 0 1rem;
}

.about p {
  line-height: 1.6;
  max-width: 350px;
}

.footer-section h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  margin: 0 0 1rem;
  font-weight: 600;
}

.links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links li {
  margin-bottom: 0.75rem;
}

.links a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--accent-color);
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: #aaa;
  transition: color 0.2s ease;
}

.social-icons a:hover {
  color: var(--text-color);
}

.social-icons svg {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  .about p {
    margin: 0 auto;
  }
  .social-icons {
    justify-content: center;
  }
}
</style>