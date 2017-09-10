$(document).ready ( function(){
 var appendSite;
 let channelList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","habathcx", "RobotCaleb", "noobs2ninjas"];
  
  function getJson(streamList){
  for (i=0;i<streamList.length;i++){
    let site =streamList[i];
        $.ajax(
         {url: "https://wind-bow.gomix.me/twitch-api/channels/"+streamList[i],
          dataType: 'jsonp',
          success: function(result){
            
        $("#test").append(
          "<hr style='height:10px' color='black' ><div class ='row media-middle'><div class = 'col-sm-3 list><a href = '#'><img class='img-fluid thumbnail' alt = '"+result.display_name+"' src='" + result.logo +"'></a></div> <div class = 'col-sm-5 list media-middle' ><a href='https://www.twitch.tv/"+ site +"'><h3>"+result.display_name+"</h3></a></div> <div class = 'col-sm-4 list' id='"+site+"'></div></div>")
            $.ajax(
         {url: "https://wind-bow.gomix.me/twitch-api/streams/"+site,
          dataType: 'jsonp',
          success: function(data){
           
            
      if (data.stream==null)
      {
       $("#"+site).append( "<h5> Not Currently Streaming </h5>");
      }
            else{console.log(data);
                 
                $("#"+site).append( "<a href='https://www.twitch.tv/"+ site +"'><h5> Now streaming "+data.stream.game+"</h5></a></div></div>");
                }
    }});
     }});
  
     
    
     
  
  }}
  getJson (channelList);
  
  

  });