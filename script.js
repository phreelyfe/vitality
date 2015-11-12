// Add your javascript here
Parse.initialize("1TzcjXBFcvaFF3UURc6eKSvRspfVz1Yo7sY3pg8b", "MPljLULeWDIMk3i3GHSrXmS40PqiAc8UpNhPpYK3");

var commands = window.commands = {};
var userName = window.commands.userName = "Ray";

$(document).ready(function() {
    var pageTitle = window.commands.pageTitle = document.getElementsByTagName('body');

    if (pageTitle[0].id == "homePage") {
        console.log("This is Home Screen");

    } else if (pageTitle[0].id == "ratingsPage") {
        console.log("This is Ratings Page");

    } else if (pageTitle[0].id == "goalsPage") {
        console.log("This is Goals Page");

    } else if (pageTitle[0].id == "progressScreen") {
        console.log("This is Progress Screen");

    } else if (pageTitle[0].id == "trackerPage") {
        console.log("This is Tracker Page");

    } else if (pageTitle[0].id == "activityList") {
        console.log("This is Activity List Screen");

        var activities = window.commands.activities = new Parse.Query("ActivityList");
        var activityList = [];

        // Grab All Users Activities
        activities.equalTo("userName", userName);
        activities.find({
            success: function(res) {
                // console.log(res, "Amount of items", res.length);
                res.forEach(function(e, i, a) {
                    // console.log(["Each Item", e], "ID", e.id);
                    e.attributes.objectId = e.id;
                    activityList.push({data: e.attributes, id: e.id});
                });
            },
            error: function(res, err) {
                console.warn(res, err, "Error has occured");
            }
        }).then(function() {
            console.log("Here is Activities Avail:", activityList);

            createActivies(activityList);
        });
        
        
        function createActivies(al) {
        	// console.log(["Activity List", al], ["Type", typeof al], ["Is Array?", Array.isArray(al)]);

        	al.forEach(function(e,i,a){
        	   // console.log("ELEMENT", e);
        		var table = window.commands.table = document.getElementById('activitiesTable');
        		var itemName = e.data.item;
        		var itemType = e.data.type;
        		var itemInstructions = e.data.instructions;
        		var objId = e.id;
        		
        		var tr = document.createElement('tr');
        		tr.className = "table-data";
        		tr.addEventListener("click", function(ev){
        		    console.log(["Clicked with Data", ev], ["Children", ev.target.parentNode.children]);
        		    var children = ev.target.parentNode.children;
        		    var o = {
        		        item: children[0].innerHTML
        		    };
        		    
        		    
        		}, false);

        		var td1 = document.createElement('td');
        		var td2 = document.createElement('td');
        		var td3 = document.createElement('td');
        		var hd = document.createElement('td');

        		var text1 = document.createTextNode(itemName);
        		var text2 = document.createTextNode(itemType);
        		var text3 = document.createTextNode(itemInstructions);
        		var hidden = document.createTextNode(objId);

        		td1.appendChild(text1);
        		td2.appendChild(text2);
        		td3.appendChild(text3);
        		hd.appendChild(hidden);

        		tr.appendChild(td1);
        		tr.appendChild(td2);
        		tr.appendChild(td3);
        		hd.className = "table-id";
        		hd.style.visibility = "hidden";
        		hd.style.display = "none";
        		tr.appendChild(hd);
        		
        		table.tBodies[0].appendChild(tr);

        		// console.log(["Table", table], ["tr", tr], ["instructions", e.instructions]);
        		// console.log("This is Table tr To Add", tr);
        		

        	});
        }



    } else if (pageTitle[0].id == "activityScreen") {
        console.log("This is Activity Screen");

    } else if (pageTitle[0].id == "activityScreen") {
        console.log("This is Activity Screen");

    } else if (pageTitle[0].id == "rewardsScreen") {
        console.log("This is Rewards Page");

    } else if (pageTitle[0].id == "caloricGoalPage") {
        console.log("This is Caloric Goals Page");

    }
    
    function encodeAndSend(url, data) {
        var s = JSON.stringify(data);
        var u = url + "?";
        var encData = encodeURIComponent(s);
        
        window.location.replace(u+encData);
        
    }
    
    function decodeData(data) {
        var d = data.replace("?", "");
        var o = decodeURIComponent(d);
        
        return o;
        
    }
    
    window.commands.sendData = encodeAndSend;
    window.commands.grabData = decodeData;
});

// POST DATA TO NEW URL
// function postAndRedirect(url, postData)
// {
//     var postFormStr = "<form method='POST' action='" + url + "'>\n";

//     for (var key in postData)
//     {
//         if (postData.hasOwnProperty(key))
//         {
//             postFormStr += "<input type='hidden' name='" + key + "' value='" + postData[key] + "'></input>";
//         }
//     }

//     postFormStr += "</form>";

//     var formElement = $(postFormStr);

//     $('body').append(formElement);
//     $(formElement).submit();
// }

// OR

// var myRedirect = function(redirectUrl, arg, value) {
//   var form = $('<form action="' + redirectUrl + '" method="post">' +
//   '<input type="hidden" name="'+ arg +'" value="' + value + '"></input>' + '</form>');
//   $('body').append(form);
//   $(form).submit();
// };

// SEND WITH 
// myRedirect("/yourRedirectingUrl", "arg", "argValue");

// OR
// //your variable
// var data = "brightcherry";

// //passing the variable into the window.location URL
// window.location.replace("/newpage/page.php?id=" + product_id);