"use strict";var app=angular.module("WeagleApp",[]);Parse.initialize("6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw","cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe"),app.config(["$routeProvider",function(a){a.when("/",{controller:"LoginCtrl",templateUrl:"views/login.html"}).when("/home",{controller:"GetLocation",templateUrl:"views/main.html"}).when("/message",{controller:"MessagesCtrl",templateUrl:"views/message.html"}).when("/checkins",{controller:"CheckInCtrl",templateUrl:"views/checkin.html"}).when("/checkin",{controller:"EmployeCheckInCtrl",templateUrl:"views/employe_checkin.html"}).when("/task",{controller:"TaskCtrl",templateUrl:"views/task.html"}).when("/logout",{controller:"LogoutCtrl",templateUrl:"views/login.html"}).otherwise({redirectTo:"/home"})}]),app.run(["$rootScope","$location","AuthenticationService","FlashService",function(a,b,c,d){var e=["/home","/message","/checkins","/task"],f=["/logout"];a.$on("$routeChangeStart",function(){_(e).contains(b.path())&&!c.isLoggedIn()&&(b.path("/"),d.show("Please log in to continue.")),a.navCurrent=b.path(),c.isLoggedIn()&&"User"===a.Role&&!_(f).contains(b.path())&&b.path("/checkin")})}]),app.factory("FlashService",["$rootScope",function(a){return{show:function(b){a.flash=b},clear:function(){a.flash=""}}}]),app.factory("AuthenticationService",["$rootScope","$location","FlashService",function(a,b,c){var d=function(a){c.show(a)},e=function(b,c,d){a.Username=b,a.Useremail=c,a.Role=d},f=function(){Parse.User.logOut(),a.Username="",a.Useremail=""},g=function(){a.loginLoadingFlag=!1};return{login:function(f){a.loginLoadingFlag=!0,Parse.User.logIn(f.username,f.password,{success:function(d){e(d.get("name"),d.getEmail()),d.get("role"),c.clear(),b.path("/home"),a.$apply(),g()},error:function(){d("Username/Password incorrect"),g(),a.$apply()}})},logout:function(){f(),d("Logged out successfully"),b.path("/")},isLoggedIn:function(){var a=Parse.User.current();return a?(e(a.get("name"),a.getEmail(),a.get("role")),!0):!1}}}]),app.controller("LoginCtrl",["$scope","$location","AuthenticationService",function(a,b,c){a.credentials={username:"",password:""},c.isLoggedIn()&&b.path("/home"),a.login=function(){c.login(a.credentials)}}]),app.controller("LogoutCtrl",["$scope","AuthenticationService",function(a,b){b.logout()}]),app.controller("GetLocation",["$scope","$filter","AuthenticationService","FlashService",function(a,b,c,d){function e(){a.mainSelection="loading";for(var b=0;b<i.length;b++)i[b].setMap(null);i=[]}a.noDeviceFlag=!1;var f=new Parse.Query("User");f.equalTo("parent",a.Useremail),f.find({success:function(b){0===b.length?a.$apply(a.noDeviceFlag=!0):a.$apply(function(){a.Users=b.map(function(a){return{id:a.get("email"),name:a.get("name"),photo:a.get("photo")}})})},error:function(b){a.noDeviceFlag=!0,console.error("Parse Error: "+b.code+" "+b.message)}}),google.maps.visualRefresh=!0;var g=new google.maps.LatLng(12,75),h=new google.maps.Map(document.getElementById("map_canvas"),{zoom:7,center:g,mapTypeId:google.maps.MapTypeId.ROADMAP}),i=[];a.mapLocate=function(b,c,f){a.mainSelection="loading",a.selected=b,google.maps.event.trigger(h,"resize");var j=new Parse.Query("Location");j.equalTo("email",b),j.find({success:function(b){if(d.clear(),b.length>0){f?a.selected="showAll":e();var j=b[0];g=new google.maps.LatLng(j.get("lat"),j.get("lon"));var k=new MarkerWithLabel({position:g,map:h,labelContent:c,labelAnchor:new google.maps.Point(22,0),labelClass:"label label-success",labelStyle:{opacity:.85}});i.push(k),h.panTo(g),a.mainSelection="maps"}else f||(e(),d.show("No location information for this Device"),a.mainSelection="maps");a.$apply()},error:function(a){console.error("Parse Error: "+a.code+" "+a.message)}})},a.showAll=function(){a.mainSelection="loading",e(),f=new Parse.Query("User"),f.equalTo("parent",a.Useremail),f.find({success:function(b){for(var c in b)a.mapLocate(b[c].getEmail(),b[c].get("name"),!0);a.mainSelection="maps"}})},a.checkIn=function(b){a.advanceSearchFlag=!1,a.mainSelection="loading",a.selected=b;var c=new Parse.Query("Checkin");c.equalTo("email",b),c.descending("createdAt"),c.find({success:function(b){a.checkIns=b.map(function(a){return{location:a.get("location"),message:a.get("message"),time:a.createdAt}}),a.mainSelection="checkins",a.$apply()}})},a.searchCheckin=function(){angular.element(".chechinDatatable").dataTable({aoColumns:[null,null,{sType:"datetime-us"}],aaSorting:[[2,"desc"]]}),a.advanceSearchFlag=!0},a.closeCheckins=function(){a.advanceSearchFlag=!1,a.mainSelection="maps"},a.findMe=function(){navigator.geolocation.getCurrentPosition(function(b){e(),g=new google.maps.LatLng(b.coords.latitude,b.coords.longitude);var c=new MarkerWithLabel({position:g,map:h,labelContent:name,labelAnchor:new google.maps.Point(22,0),labelClass:"label label-success",labelStyle:{opacity:.85}});i.push(c),h.panTo(g),a.mainSelection="maps"},function(){})},a.tracks=function(c){a.mainSelection="loading",a.selected=c,e();var f,j=new Parse.Query("Checkin");j.equalTo("email",c),j.limit(10),j.descending("createdAt");var k=new google.maps.InfoWindow({content:""});j.find({success:function(c){if(d.clear(),c.length>0){var j=0;for(var l in c)c[l].get("coordinates")&&(j++,g=new google.maps.LatLng(c[l].get("coordinates").latitude,c[l].get("coordinates").longitude),f=new MarkerWithLabel({position:g,map:h,labelContent:j,labelAnchor:new google.maps.Point(10,38),labelClass:"label label-danger label-round",labelStyle:{opacity:.95},html:c[l].get("message")+" <br>"+b("date")(c[l].createdAt,"dd/MM/yy hh:mm a")}),google.maps.event.addListener(f,"click",function(){k.setContent(this.html),k.open(h,this)}),i.push(f));h.panTo(g),a.mainSelection="maps"}else flag||(e(),d.show("No location information for this Device"),a.mainSelection="maps");a.$apply()},error:function(a){console.error("Parse Error: "+a.code+" "+a.message)}})}}]),app.controller("MessagesCtrl",["$scope","AuthenticationService",function(a){var b=new Parse.Query("User"),c=a.Useremail;a.usersFromParse=[],a.userEmailStack=[],b.find({success:function(b){for(var c in b)a.usersFromParse.push({index:c,email:b[c].get("email"),value:b[c].get("name")});$("#wea_InputEmail").typeahead({name:"user",local:a.usersFromParse,engine:Hogan,template:['<p class="typeahead-name">{{value}}</p>','<p class="typeahead-email">{{email}}</p>'].join("")}).on("typeahead:selected",function(b,c){a.$apply(function(){a.flagAlreadyAdded=!1;for(var b in a.userEmailStack)a.userEmailStack[b].index===c.index&&(a.flagAlreadyAdded=!0);a.flagAlreadyAdded||a.userEmailStack.push(c)}),$(this).val("")})},error:function(a){console.error("Parse Error: "+a.code+" "+a.message)}}),a.deleteUser=function(b){a.$apply(a.userEmailStack.splice(b,1))},a.sendMessage=function(){var b=Parse.Object.extend("messages");a.width=0;var d=100/a.userEmailStack.length,e=function(b){a.width+=b,a.width>95&&(a.messagesSend=!0)};a.messageSending=!0;for(var f in a.userEmailStack){var g=new b;g.set("sender",c),g.set("receiver",a.userEmailStack[f].email),g.set("readFlag",!1),g.set("message",a.weaInputMessage),g.save(null,{success:function(){a.$apply(e(d))},error:function(a){console.error("Failed to create new object, with error code: "+a.description)}})}}}]),app.controller("CheckInCtrl",["$scope","$route","AuthenticationService",function(a,b){var c=new Parse.Query("User");c.equalTo("parent",a.Useremail);var d;c.find({success:function(a){0===a.length||(d=a.map(function(a){return{id:a.get("email"),name:a.get("name"),photo:a.get("photo")}}))}}).then(function(b){var c=new Parse.Query("Checkin");c.descending("createdAt"),c.limit(200),c.find({success:function(c){a.checkIns=[],_.map(c,function(c){for(var d in b)b[d].get("email")===c.get("email")&&a.checkIns.push({name:b[d].get("name"),photo:b[d].get("photo"),location:c.get("location"),message:c.get("message"),time:c.createdAt})}),a.$apply(),angular.element(".chechinDatatable").dataTable({aoColumns:[null,null,null,{sType:"datetime-us"}],aaSorting:[[3,"desc"]]})}})}).then(function(){}),a.reload=function(){b.reload()}}]),app.controller("EmployeCheckInCtrl",["$scope",function(a){a.checkined=!1;var b,c,d=new google.maps.Geocoder;navigator.geolocation.getCurrentPosition(function(e){b=e.coords.latitude,c=e.coords.longitude;var f=new google.maps.LatLng(b,c);d.geocode({latLng:f},function(b,c){c==google.maps.GeocoderStatus.OK?b[1]?(a.place=b[1].formatted_address,a.$apply()):alert("Location not Avalable"):alert("Geocoder failed due to: "+c)})},function(){}),a.empCheckin=function(){var d=Parse.Object.extend("Checkin"),e=new d,f=a.Useremail,g=a.weaInputMessage;e.set("email",f),e.set("message",g);var h=new Parse.GeoPoint({latitude:b,longitude:c});e.set("coordinates",h),e.set("location",a.place),e.save(null,{success:function(){a.checkined=!0,a.$apply(),alert("You have successfully checkedIn")},error:function(a){console.error(a)}})}}]),app.controller("TaskCtrl",["$scope","$route",function(a){var b=new Parse.Query("Tasks");b.ascending("priority"),b.limit(100),b.find({success:function(b){a.Tasks=b.map(function(a){return{id:a.id,title:a.get("title"),desc:a.get("description"),priority:a.get("priority"),comments:a.get("comments"),assignedTo:a.get("assignedTo"),photo:a.get("photo"),signature:a.get("signature"),status:a.get("status"),cDate:a.createdAt}}),a.$apply()}}),a.addComment=function(c){b.get(c.id,{success:function(b){c.comments||(c.comments=[]),c.comments.push(c.newComment),c.newComment="",a.$apply(),b.set("comments",c.comments),b.save()},error:function(){}})},a.addTask=function(b){var c=Parse.Object.extend("Tasks"),d=new c;d.set("title",b.name),d.set("assignedTo",b.assignTo),d.set("priority",b.priority),d.set("description",b.desc),d.set("status","Open"),d.save(null,{success:function(b){a.Tasks.push({id:b.id,title:b.get("title"),desc:b.get("description"),priority:b.get("priority"),comments:b.get("comments"),assignedTo:b.get("assignedTo"),photo:b.get("photo"),signature:b.get("signature"),status:b.get("status"),cDate:b.createdAt}),a.newTask.status=!1,a.$apply()}})}}]);