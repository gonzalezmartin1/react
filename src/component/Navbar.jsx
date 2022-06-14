import '../App.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">
    <img src="https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-1-1.png" alt="" width="50" height="60" /><span id="titulo">River Plate</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Novedades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Indumentaria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Jugadores</a>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>





    )
}

export default NavBar;