// This will generate the text file content based on the form data
function buildData(){
    var txtData = "MusicPlayer: "+$("#MusicPlayer").val()+
            "\r\nVideoPlayer: "+$("#VideoPlayer").val()+
            "\r\nApplications: "+($("#Applications").val();

    return txtData;
}
// This will be executed when the document is ready
$(function(){
    // This will act when the submit BUTTON is clicked
    $("#profile").submit(function(event){
        event.preventDefault();
        var txtData = buildData();
        window.location.href="data:application/octet-stream;base64,"+Base64.encode(txtData);
    });

    // This will act when the submit LINK is clicked
    $("#submitLink").click(function(event){
        var txtData = buildData();
        $(this).attr('download','sugguestedName.txt')
            .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
    });
});
