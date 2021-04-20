var otaskController;
sap.ui.controller("weather.Controller.task", 
{
	onInit : function ()  {               
		otaskController=this;
		otaskController.getView().byId("humiradio").setPercentage(0);
		otaskController.getView().byId("humiradio").setValueColor('#00FFF8');
		console.log("On Init");
	},
	onAfterRendering: function(){
		console.log("On After Rendering");
		otaskController.datetime();
		otaskController.autorefresh();
		otaskController.tpColumn();
		otaskController.tpLine();
	},
	datetime: function(){		
		//date and time
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date+' '+time;
			otaskController.getView().byId("date").setText(dateTime);
			var firstName = document.getElementById("hidden_firstname").value;
			var lastName = document.getElementById("hidden_lastname").value;
			if (firstName.includes("firstname")) 
				firstName = "";
			 else 
				firstName;
			firstName = "Hello, " + firstName + " " + lastName;
			otaskController.getView().byId("userName").setText(firstName);
		//end time and date
   	 },

	onPressRefresh: function(){
			otaskController.find();
   	 },

	autorefresh :  function(){
		var dur=600;
		var timer = dur, minutes, seconds,af;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			af="Auto refresh in "+minutes + ":" + seconds;
			otaskController.getView().byId("autorefresh").setText(af);
			if (--timer < 0) {
				timer = dur;
				otaskController.find();
				}
			}, 1000);
	},




	find: function(){
		//START
		var SA= otaskController.getView().byId("productInput").getValue();
		var productDetail;
			var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Praveen/Project/eval task/SQL_EV_TASK1_FIND&Content-Type=text/json&Param.1="+SA
			$.ajax({
				url: url,
				type: "POST",
				success: function (data, txt, jqXHR) {
					if(data.Rowsets.Rowset != undefined){					
						productDetail = data.Rowsets.Rowset[0].Row
						var oModel = new sap.ui.model.json.JSONModel(productDetail);
						otaskController.getView().setModel(oModel);
						//start currentvalue
							TEMP = data.Rowsets.Rowset[0].Row[0].TEMP;	
							otaskController.getView().byId("TEMP").setText(TEMP);
						//end currentvalue
						//start HUMI
							HUMIDITY = data.Rowsets.Rowset[0].Row[0].HUMIDITY;	
							otaskController.getView().byId("humiradio").setPercentage(HUMIDITY);
						//end HUMI
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
				}
			});
		//END
	},
	
	tpLine : function() {	
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Praveen/Project/eval task/SQL_EV_TASK1_FIND&Content-Type=text/json&Param.1="+"Mumbai"
		$.ajax({
			url: url,
			type: "POST",
			async : true,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					otaskController.getView().setModel(oModel);
					//start currentvalue
						TEMP = data.Rowsets.Rowset[0].Row[0].TEMP;	
						otaskController.getView().byId("TEMP").setText(TEMP);
					//end currentvalue
					//start HUMI
						HUMIDITY = data.Rowsets.Rowset[0].Row[0].HUMIDITY;	
						otaskController.getView().byId("humiradio").setPercentage(HUMIDITY);
					//end HUMI
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = otaskController.getView().byId("VizframelinenId");
		oVizFrame.setVizType("line");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: "DATE",
				value: "{DATE}"
			}],
			measures: [{
				name: 'Humidity',
				value: "{HUMIDITY}"
			}],
			data: {
				path: "/"
			}
		});
		oVizFrame.setDataset(oDataset);

		 feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["Humidity"]
		}),
		  feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "categoryAxis",
			"type": "Dimension",
			"values": ["DATE"]
		});
		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedCategoryAxis);
		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#07FF00','#1D7AFF'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "top"}
				   },
			valueAxis: {label: { },title: {visible: false}},
			categoryAxis: {title: {visible: false}},
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});


	},


	tpColumn : function() {			
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Praveen/Project/eval task/SQL_EV_TASK1_FIND&Content-Type=text/json&Param.1="+"Mumbai"
		$.ajax({
			url: url,
			type: "POST",
			async : true,
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					otaskController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		var oVizFrame = otaskController.getView().byId("VizframestackId");
		oVizFrame.setVizType("column");
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: "DATE",
				value: "{DATE}"
			}],
			measures: [{
				name: 'TEMPERATURE_MIN',
				value: "{TEMP_MIN}"
			},{
				name: 'TEMPERATURE_MAX',
				value: "{TEMP_MAX}"
			}],
			data: {
				path: "/"
			}
		});
		oVizFrame.setDataset(oDataset);
		 feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["TEMPERATURE_MIN"]
		}),
		 feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "valueAxis",
			"type": "Measure",
			"values": ["TEMPERATURE_MAX"]
		}),
		  feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			"uid": "categoryAxis",
			"type": "Dimension",
			"values": ["DATE"]
		});
		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedValueAxis1);
		oVizFrame.addFeed(feedCategoryAxis);
		oVizFrame.setVizProperties({
			plotArea: {
					colorPalette: ['#25FF00','#00E9FF'],
					dataLabel: {showTotal: true,visible:true,hideWhenOverlap:true},
					//dataShape: {primaryAxis: ["bar", "bar"]}
				   },
				   legend: {visible: true},
				   legendGroup: {
					   layout: { position: "top"}
				   },
			valueAxis: {label: { },title: {visible: false}},
			categoryAxis: {title: {visible: false}},
			tooltip: {visible: true},
			title: {visible: true, text: "" }
		});
	},


});
