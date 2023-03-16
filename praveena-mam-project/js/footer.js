const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="footer-container">
  <div class="main-footer">
    <div class="">
        <h4>Women</h4>
        <li>Tops</li>
        <li>Dresses</li>
        <li>Jeans</li>
    </div>
    <div class="">
      <h4>Men</h4>

        <li>Shirts</li>
        <li>Pants</li>
        <li>Shoes</li>
    </div>
    <div class="">
      <h4>Kids</h4>
        <li>Boys</li>
        <li>Girls</li>
        <li>Toys</li>
    </div>
    <div class="">
      <h4>Links</h4>
        <li>Home</li>
        <li>Contact</li>
        <li>Login</li>
    </div>
  </div>
  <div class="footer-line"></div>
  <p class="text-center">&copy; 2023 My Company. All Rights Reserved.</p>
</div>

    `;
}

createFooter();