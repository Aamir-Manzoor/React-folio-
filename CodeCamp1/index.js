function Header(){
    return(
        <nav>
        <h1>I am Excited</h1>
        <ul className="list">
        <li>pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </nav>
    )
}


function Footer(){
    return(
        <div>
        <p>Amir @ all rights reserved</p>
        </div>
    )
}


function MyList(){
    return(
        <div>
        <ul>
            <li>hi</li>        
            <li>hello</li>        
            <li>Kese hoo</li>        
            <li>KIdr hoo</li>        
        </ul>
        </div>
    )
}




ReactDOM.render(
    <div>
    <Header/>
    <MyList/>
    <Footer/>
    </div>
    ,document.getElementById("root")
    )