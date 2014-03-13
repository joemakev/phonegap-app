var phono = $.phono({
  apiKey: "",
  onReady: function() {
    $("#call").attr("disabled", false).val("Call");
  }
});

$("#call").click(function() {
  $("#call").attr("disabled", true).val("Busy");
  phono.phone.dial("985-655-2500", {
    onRing: function() {
      $("#status").html("Ringing");
    },
    onAnswer: function() {
      $("#status").html("Answered");
    },
    onHangup: function() {
      $("#call").attr("disabled", false).val("Call");
      $("#status").html("Hangup");
    }
  });
});
