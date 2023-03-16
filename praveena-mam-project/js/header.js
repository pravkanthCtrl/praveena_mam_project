// Create the first part of the header
const headerPartOne = document.createElement("div");
headerPartOne.classList.add("header-part-one");
headerPartOne.innerHTML = 
`
<nav class="header-main d-flex align-items-center justify-content-between">
<img src="./img/logo.png" alt=""> 
<div class="nav-search d-flex align-items-center">
  <input type="text" placeholder="Product name, Category name etc..">
  <button type="submit" class="btn btn-primary">Search</button>
</div>
<div class="header-login d-flex align-items-center gap-3">
  <button>Login</button>
  <a href="cartpage.html" class="nav-cart-btn"><i class="fa fa-shopping-cart fa-2x"></i></a>
</div>
</nav>
`;

// Create the second part of the header
const headerPartTwo = document.createElement("div");
headerPartTwo.classList.add("header-part-two");
headerPartTwo.innerHTML = `
<div class="nav-2 navbar-light bg-light">
<ul class="nav-2-ul">
  <li>Home</li>
  <li>All Products</li>
  <li class="nav-item dropdown nav-dropdown">
    <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Women
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">All Products</a>
      <a class="dropdown-item" href="#">Dresses</a>
      <a class="dropdown-item" href="#">Pants</a>
      <a class="dropdown-item" href="#">Skirts</a>
    </div>
  </li>
  <li class="nav-item dropdown nav-dropdown">
    <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Men
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">All Products</a>
      <a class="dropdown-item" href="#">Dresses</a>
      <a class="dropdown-item" href="#">Pants</a>
      <a class="dropdown-item" href="#">Skirts</a>
    </div>
  </li>
  <li>Kids</li>
  <li>Contact</li>
</ul>
</div>


`;

// Add the two parts to the header
const header = document.getElementById("header1");
header.appendChild(headerPartOne);
header.appendChild(headerPartTwo);
