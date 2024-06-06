$('document').ready(function () {
    $("#btn-start").click(function () {
        $("Section").toggle()
        $("main").toggle();
    })

    $("body").css({
        backgroundImage: "linear-gradient(225deg, green, yellow, red)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        fontWeight: 700,
        flexDirection: "column"
    });

    $("main").hide();

    $("section").css({
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: "100vh",
        minWidth: "100vw",
        position: "relative",
    })

    $("section #h1 span").css({color: "yellow"})

    $("#h1").css({
        color:" rgb(210, 214, 190)", 
        backgroundColor: "black", 
        opacity: "0.7", 
        textAlign: "center",
        padding: "5px",
        borderRadius: "7px",
    })

    $("main").css({
        position: "relative",
        height: "100vh"
    })

    $(".calc-bg").css({
        background: "rgb(132, 132, 132)", 
        padding: "1.2rem", 
        borderRadius: "8px", 
        boxShadow: "10px 10px 10px black",
        marginTop: "20px",
    })

    $(".label-input").css({
        display: "flex", 
        flexDirection: "column", 
        padding: "0.3rem"
    })
    $(".btns").css({
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: "8px"
    })
    $("input").css({
        border: "none", 
        padding: "10px", 
        margin: "5px 0", 
        background: "rgb(240, 240, 243)", 
        borderRadius: "8px"
    })

    $("#vat-percentage, #service-charge").css("color", "rgb(90, 20, 201")
    
    $("#total-amount").css({
        color: "white",
        background: "black",
        padding: "7px",
        borderRadius: "7px",
    })
    $(".link").css({
        position: "absolute",
        bottom: "30px",
        left: "30px"
    })
    $("a").css({textDecoration: "none"})
})