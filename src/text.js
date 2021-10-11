<header id="header">
<h1><a href="index.html">Condomínio React</a></h1>
<nav class="links">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Eventos</a></li>
        <li><a href="#">Profisionais</a></li>
        <li><a href="#">Aluguel</a></li>
        <li><a href="#">Sobre</a></li>
    </ul>
</nav>
<div className='divSearch'>
    <form id="searchs" method="get" action="#">
        <input type="text" name="query" placeholder="Search" />
    </form>
    <a href="#"><SearchOutlinedIcon className='iconSearch' /></a>
</div>
</header>
<div className='menu'>
<a href='#'>
    <MenuOutlinedIcon className='buttonMenu' />
</a>
</div>






------------------------------------------

* {
    margin: 0;
    padding: 0;
}
#wrapper {
    display: flex;
    align-items: center;
    border-bottom: 0.02em solid #a4a4a4;
}
#header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
}
#header h1 a {
    text-decoration: none;
    color: #a4a4a4;
    font-size: 22px;
    margin-left: 0.5em;
}
#header .menu .buttonMenu {
    color: #ffe6e6;
    font-size: 2em;
}

.links ul {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
}
.links ul li {
    padding: 1em;
    font-size: 16PX;
    list-style: none;
    
}
.links ul li a {
    text-decoration: none;
    color: #a4a4a4;
}
.links ul li a:hover {
    color: #19A3A7;
}
.divSearch {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.divSearch a .iconSearch{
    color: #a4a4a4;
    font-size: 2em;
}

#searchs input {
    width: 200px;
    height: 30px;
    border-radius: 0.3em;
    border: 0.1em solid #d4d4d4;
}

@media screen and (max-width: 960px){
    #wrapper {
        display: flex;
    }
    #wrapper .menu {
        margin-top: -25px;
    }
    #header {
        display: inline-block;
        padding: 0 0 0 0em;
        margin: 0 0 0 0em;
        
    }
    #header h1 {
        padding: 0 0 0 1em;
    }
    #header .main .search {
        display: none;
    }
    #header .links {
        display: none;
        transition: ease-in 3s;
    }
    .divSearch {
        display: flex;
        justify-content: space-between; 
        width: 100%;
        margin-left: 1.8em;
        margin-bottom: 0.2em;
    }
    #searchs input {
       width: 100%;
    }
    #searchs {
        width: 100%;
    }
}