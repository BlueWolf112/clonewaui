$(".tab").on('click', function() {
  $(".tab").removeClass('active');
  $(this).addClass('active');
});

$(".overflow").click(function () {
  $(".widget-menu").removeClass('disappear');
  Remove();
  }
);

function Remove() {
  $(document).mouseup(function(e){
      var container = $(".widget-menu");
      // If the target of the click isn't the container
      if(!container.is(e.target) && container.has(e.target).length === 0){
          $(".widget-menu").addClass('disappear');
      }
      
  });
};
var chatBody = $("#conversation-body");
var tab = $(".tab-contact");
//var combo = chatBody, tab;
let statusBody = $(".status-body");
function underConstruction () {
  tab.addClass('disappear');
  chatBody.addClass('disappear');
  statusBody.removeClass('disappear');
  //alert("This page is in progress!");
}
function munculCHAT() {
  chatBody.removeClass('disappear');
  tab.removeClass('disappear');
  statusBody.addClass('disappear');
}


/* Connect to Data Base |JSON| */
function summonCHAT() {
$.getJSON("database.json", function (data) {
  let meta = data.CHAT
  $.each(meta, function(i, data){
    //filter untuk pin
    const a = data.pin;
    let v = (a === true) ? "block" : "none";
    //filter untuk pesan
    const b = data.msgCount;
    if (b == 0) {
      var y = "none";
      var clrDate = " #8696A0";
    } else {
      var y = "block";
      var clrDate = "#00A884";
    }
    //filter untuk tanda centang
    const read = data.read;
    if (read === true) {
      var centang = "DoubleTickWABlue.svg";
    } else if (read === false){
      var centang = "DoubleTickWAGray.svg";
    } else {
      var centang2 = "none";
    }
    const foto = data.photo;
    //code untuk bagian chat
    $("#conversation-body").append('<div class="contact_container"><div class="contact_selector"><div class="contact_photo"><img src="gambarkontak/'+foto+'"></div></div><div class="conversation_content" onclick=""><div class="conversation_header"><div class="contact_name_container"><div class="contact_name"><span class="name">'+data.name+'</span></div></div><div class="conversation_date" style="color: '+clrDate+'">'+data.date+'</div></div><div class="conversation_footer "><div class="left-idc"><div class="status_indicator"><img src="resource/'+centang+'" style="display:'+centang2+'"></div><div class="single_msg">'+data.lastMsg+'</div></div><div class="right-idc"><div class="mute"></div><div class="pin center"><img src="/resource/pin-angle-fill.svg" style="display: '+v+'"></div><div class="msg_count" style="display: '+y+'"><span>'+data.msgCount+'</span></div></div></div></div></div>');
  });
} );
};
summonCHAT();
