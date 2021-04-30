



class NavBar extends React.Component {



    render() {

        return <>

        
              <nav style="z-index: 1;" class="navbar navbar-expand-lg navbar-dark  bd-navbar">
        <a class="navbar-brand" href="#"><img class="img" src="assets\netflix_logo.png" alt="" height="50" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#tv-shows">TV Shows</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#movies">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#recently-added">Recently Added</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#my-list">My List</a>
                </li>
            </ul>

            <ul class="nav justify-content-end">
                <li class="nav-item mt-2">
                    <a href="#"><img class="img" src="assets\images.png" width="30" /></a>
                    <div class="btn-group">
                </li>

                <li id="kids" class="nav-item mt-1 text muted">
                    <a class="nav-link" href="#">KIDS</a>
                </li>
                <li class="nav-item mt-2">
                    <a href="#"><img class="img" src="assets\bell.png" width="20" /></a>
                    <div class="btn-group">
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="img" src="assets\avatar.png" alt="" width="35" height="30" />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#"><img class="img" src="assets\avatar.png" alt=""
                                width="40" />Me</a>
                        <a class="dropdown-item" href="#"><img class="img" src="assets\kids_icon.png" alt=""
                                width="40" />Kids</a>
                        <a class="dropdown-item" href="editProfile.html">Manage profiles</a>
                        <a class="dropdown-item" href="accountSetting.html">Account</a>


                        <a class="dropdown-item" href="#">Help Center</a>
                        <a class="dropdown-item" href="#">Sign Out of Netflix</a>
                    </div>

                </li>

            </ul>

        </div>
    </nav>
        </>




    }
}

export default NavBar


