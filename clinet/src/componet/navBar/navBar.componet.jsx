// <!DOCTYPE html>
// <!-- Coding By CodingNepal - codingnepalweb.com -->
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

//     <!-- ===== CSS ===== -->
//     <link rel="stylesheet" href="style.css">

//     <!-- ===== Boxicons CSS ===== -->
//     <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

//      <title>Responsive Navigation Menu Bar</title>
// </head>
//<body>
import "./navBar.style.css";

const NavBar = () => {
  return (
    <nav>
      <div class="nav-bar">
        <i class="bx bx-menu sidebarOpen"></i>
        <span class="logo navLogo">
          <a href="#">CodingLab</a>
        </span>

        <div class="menu">
          <div class="logo-toggle">
            <span class="logo">
              <a href="#">CodingLab</a>
            </span>
            <i class="bx bx-x siderbarClose"></i>
          </div>

          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="darkLight-searchBox">
          <div class="dark-light">
            <i class="bx bx-moon moon"></i>
            <i class="bx bx-sun sun"></i>
          </div>

          <div class="searchBox">
            <div class="searchToggle">
              <i class="bx bx-x cancel"></i>
              <i class="bx bx-search search"></i>
            </div>

            <div class="search-field">
              <input type="text" placeholder="Search..." />
              <i class="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
