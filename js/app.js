$(document).ready( function() {

$(".submit").submit(function(e){
		e.preventDefault();
		var tags2 = $("#query").val();
		getTopAnswerers(tags2);
	});

function get10K()

	var request = {
		site:"last10k",
		order: "desc",
		sort:"creation"
		subscription-key:"",
	};


	$.ajax({
		type:"GET",
		url:"https://services.last10k.com",
		data: request,
		dataType:"jsonp",
		sucesss:function(data){

		}
	})

};

https://dev.last10k.com/docs/services/53c7e3aafd2dff034f040002/operations/53c7e3aafd2dff034f0803f1/console