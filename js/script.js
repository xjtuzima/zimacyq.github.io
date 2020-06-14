$("document").ready(function () {
    var qrCode = new QRCode("qrCode", {
        text: "               " + "A57156B9CE243267E053E207310AAFD3" + "               ",
        width: 150,
        height: 150,
        colorDark: "#f97afb",
        correctLevel: QRCode.CorrectLevel.H
    });
    $("#menuToggler").click(function () {
        $(".floatMenu").toggle("fast");
    });
});