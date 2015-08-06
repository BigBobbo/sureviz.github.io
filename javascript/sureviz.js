//##############################################################
//Toggle Sidebar
//##############################################################
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('wrapper').classList.toggle("toggled");
}, false);



//##############################################################
//Add Rows
//##############################################################
var rowcount = 1;


function row444(testcount) { return '<div class="row">' +
        '<div class="col-md-4" id="row' + testcount +'col1" data-type="none" data-xaxis="none" data-yaxis="none" data-text="none">.col-md-4' +
            '<button onclick="workbenchRegister(this)">Click me</button>' +
        '</div>' +
        '<div class="col-md-4" id="row' + testcount +'col2" data-type="none" data-xaxis="none" data-yaxis="none" data-text="none">.col-md-4' +
            '<button onclick="workbenchRegister(this)">Click me</button>' +
        '</div>' +
        '<div class="col-md-4" id="row' + testcount +'col3" data-type="none" data-xaxis="none" data-yaxis="none" data-text="none">.col-md-4' +
            '<button onclick="workbenchRegister(this)">Click me</button>' +
        '</div>' +
      '</div>'}

var row363 = '<div class="row">' +
        '<div class="col-md-3">.col-md-3</div>' +
        '<div class="col-md-6">.col-md-6</div>' +
        '<div class="col-md-3">.col-md-3' +
        '<button onclick="workbenchRegister()">Click me</button>' +
        '</div>' +
      '</div>'

var row804 = '<div class="row">' +
        '<div class="col-md-8">.col-md-8</div>' +
        '<div class="col-md-4">.col-md-4' +
        '<button onclick="workbenchRegister()">Click me</button>' +
        '</div>' +
      '</div>'
        
var row408 =  '<div class="row">' +
        '<div class="col-md-4">.col-md-4</div>' +
        '<div class="col-md-8">.col-md-8' +
        '<button onclick="workbenchRegister()">Click me</button>' +
        '</div>' +
      '</div>'

var row12 = '<div class="row">' +
        '<div class="col-md-12">.col-md-12' +
        '<button onclick="workbenchRegister()">Click me</button>' +
        '</div>' +
      '</div>'


document.getElementById('add_444').addEventListener('click', function() {
    var elem = document.createElement('div');
    elem.innerHTML = row444(rowcount)
    elem.id = "test_" + rowcount;
    rowcount++;
    document.getElementById('graph_rows').appendChild(elem);
}, false);

document.getElementById('add_363').addEventListener('click', function() {
    var elem = document.createElement('div');
    elem.innerHTML = row363
    elem.id = "test_" + rowcount;
    rowcount++;
    document.getElementById('graph_rows').appendChild(elem);
}, false);

document.getElementById('add_804').addEventListener('click', function() {
    var elem = document.createElement('div');
    elem.innerHTML = row804
    elem.id = "test_" + rowcount;
    rowcount++;
    document.getElementById('graph_rows').appendChild(elem);
}, false);

document.getElementById('add_408').addEventListener('click', function() {
    var elem = document.createElement('div');
    elem.innerHTML = row408
    elem.id = "test_" + rowcount;
    rowcount++;
    document.getElementById('graph_rows').appendChild(elem);
}, false);

document.getElementById('add_12').addEventListener('click', function() {
    var elem = document.createElement('div');
    elem.innerHTML = row12
    elem.id = "test_" + rowcount;
    rowcount++;
    document.getElementById('graph_rows').appendChild(elem);
}, false);


//  Part where the chart will get attached. Need to sort out conceptually where this is happening, and what is happening
//var outboundDim  = ndx.dimension(function(d) {return d.outbound;});
//var outboundGroup = outboundDim.group().reduceCount();
//
//var outboundRingChart   = dc.pieChart("#test_0");
//outboundRingChart
//    .width(150).height(150)
//    .dimension(outboundDim)
//    .group(outboundGroup)
//    .innerRadius(30);
//
//dc.renderAll();



//##############################################################
//Workbench
//##############################################################
var selectedFrame = "none" //Do i need this?

function workbenchInit() {
    var chartMenu = document.getElementById('chartSelect');
    var currentChart = "none"
    
    for(var i = 0, j = chartMenu.options.length; i < j; ++i) {
        if(chartMenu.options[i].innerHTML === currentChart) {
           chartMenu.selectedIndex = i;
           break;
        }}
};


function workbenchRegister(button) {
    var parentdiv = button.parentNode;
    selectedFrame = parentdiv.id
    console.log(selectedFrame)
    var selectedDiv = document.getElementById(selectedFrame);
    var chartMenu = document.getElementById('chartSelect');
    chartMenu.style.display = 'block';
    var currentChart = selectedDiv.dataset.type
    for(var i = 0, j = chartMenu.options.length; i < j; ++i) {
        if(chartMenu.options[i].value === currentChart) {
           chartMenu.selectedIndex = i;
//            Here the creation must go
           break;
        }}
    
    document.getElementById("dataSelection").innerHTML = ''    
    
    if(currentChart == "none"){
    } else {
    xValuePop()
    var chartMenu = document.getElementById('x_dropper');
    var currentxaxis = selectedDiv.dataset.xaxis
    for(var i = 0, j = chartMenu.options.length; i < j; ++i) {
    if(chartMenu.options[i].innerHTML === currentxaxis) {
       chartMenu.selectedIndex = i;
       break;
    }}
        if(selectedDiv.dataset.yaxis != "none"){
                yValuePop()
    var chartMenu = document.getElementById('y_dropper');
    var currentyaxis = selectedDiv.dataset.yaxis
    for(var i = 0, j = chartMenu.options.length; i < j; ++i) {
    if(chartMenu.options[i].innerHTML === currentyaxis) {
       chartMenu.selectedIndex = i;
       break;
    }}
        }
            
     createButton()   
    }
    };
    
    

function workbenchUpdate() {
    var selectBox = document.getElementById("chartSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue)
    
    var selectedDiv = document.getElementById(selectedFrame);
    selectedDiv.dataset.type = selectedValue
    
    document.getElementById("dataSelection").innerHTML = ''

    
    if(selectBox.options[selectBox.selectedIndex].dataset.xaxis == "true"){
    xValuePop()
    }
    
    if(selectBox.options[selectBox.selectedIndex].dataset.yaxis == "true"){
    yValuePop()
    }
    createButton()
   };




//function workbenchDataSelectionInit() {
//    
//}
//Shoulnt need this as it an init based on an empty cell...or can it if none are selected.. hmmm

//function workbenchDataSelectionUpdate() {
//    
//}

function xValuePop() {
    var divelem = document.createElement('div')
    divelem.id = "x_selector"
    document.getElementById('dataSelection').appendChild(divelem);

    var elem = document.createElement('select')
    elem.id = "x_dropper"
    elem.onchange = xValueUpdate
    document.getElementById('x_selector').appendChild(elem);
    for (i = 0; i < data_dict.length; i++) {
                column_data = data_dict[i];

                elem = document.createElement('option');
                elem.value = column_data.name;
                elem.textContent = column_data.name;
                document.getElementById('x_dropper').appendChild(elem);
    }
}


function yValuePop() {
    var divelem = document.createElement('div')
    divelem.id = "y_selector"
    document.getElementById('dataSelection').appendChild(divelem);

    var elem = document.createElement('select')
    elem.id = "y_dropper"
    elem.onchange = yValueUpdate
    document.getElementById('y_selector').appendChild(elem);
    
    for (i = 0; i < data_dict.length; i++) {
                column_data = data_dict[i];

                elem = document.createElement('option');
                elem.value = column_data.name;
                elem.textContent = column_data.name;
                document.getElementById('y_dropper').appendChild(elem);
    }
}

function createButton(){
    var createBtn = document.createElement('button')
    var t = document.createTextNode("CLICK ME");       // Create a text node
    createBtn.appendChild(t);                                // Append the text to <button>
    createBtn.onclick = addChart
    document.getElementById('dataSelection').appendChild(createBtn);

    
}


function yValueUpdate(){
    console.log("y updated with")
    var selectBox = document.getElementById("chartSelect");
    var selectX = document.getElementById("x_dropper");
    var selectY = document.getElementById("y_dropper");
    
    var selectedDiv = document.getElementById(selectedFrame);
    selectedDiv.dataset.yaxis = selectY.options[selectY.selectedIndex].value
    
    if((selectBox.options[selectBox.selectedIndex].dataset.xaxis == "false")        ||
       (selectX.options[selectX.selectedIndex].value != "none")){
            console.log("x updated with" +
                        selectX.options[selectX.selectedIndex].value)
            console.log("y updated with" +
                        selectY.options[selectY.selectedIndex].value)            
    }
    };


function xValueUpdate(){
    console.log("x updated with")
    var selectBox = document.getElementById("chartSelect");
    var selectX = document.getElementById("x_dropper");
    var selectY = document.getElementById("y_dropper");
    
    var selectedDiv = document.getElementById(selectedFrame);
    selectedDiv.dataset.xaxis = selectX.options[selectX.selectedIndex].value
    
    if(
        (selectBox.options[selectBox.selectedIndex].dataset.yaxis == "false") ||  
       (selectY.options[selectY.selectedIndex].value != "none")){
            console.log("x updated with" +
                        selectX.options[selectX.selectedIndex].value)
//            console.log("y updated with" +
//                        selectY.options[selectY.selectedIndex].value)            
    }
    };


//##############################################################
//Actual Chart Adding
//##############################################################


function addChart(){
    var selectBox = document.getElementById("chartSelect");
    var selectX = document.getElementById("x_dropper");
    var xaxis = selectX.options[selectX.selectedIndex].value
    
//    If a Y exists use it, otherwise make it none
    if(selectBox.options[selectBox.selectedIndex].dataset.yaxis == "true"){   
    var selectY = document.getElementById("y_dropper");
    var yaxis = selectY.options[selectY.selectedIndex].value
    } else { 
    var selectedDiv = document.getElementById(selectedFrame);
    selectedDiv.dataset.yaxis = "none"
    }
    
    
//    Use crossfilter, this may need to change with multiple axis
    var chartDim  = ndx.dimension(function(d) {return d[xaxis];});
    var chartGroup = chartDim.group().reduceCount();

    
//    Depending on the selected chart add it to the div
    if(selectBox.options[selectBox.selectedIndex].value == "pie_select"){   
    var ringChart   = dc.pieChart("#" + selectedFrame);
    ringChart
        .width(150).height(150)
        .dimension(chartDim)
        .group(chartGroup)
        .innerRadius(30);
    }
    
    if(selectBox.options[selectBox.selectedIndex].value == "line_select"){   
    var barChart = dc.rowChart("#" + selectedFrame);
      barChart.width(150)
        .height(150)
        .margins({top: 5, left: 10, right: 10, bottom: 20})
        .dimension(chartDim)
        .group(chartGroup)
        .colors(d3.scale.category10())
        .label(function (d){return d.key;})
        .title(function(d){return d.value;})
        .elasticX(true)
    }
    dc.renderAll();
}



//##############################################################
//Overall Data
//##############################################################





//
//
//function xXaluePop() {
//    var elem = document.createElement('select')
//    elem.id = "dropper"
//    document.getElementById('dataSelection').appendChild(elem);
//    for (i = 0; i < data_dict.length; i++) {
//                column_data = data_dict[i];
//
//                elem = document.createElement('option');
//                elem.value = column_data.name;
//                elem.textContent = column_data.name;
//                document.getElementById('dropper').appendChild(elem);
//    }
//}
//
