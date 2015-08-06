var test_data = [{state: "California", airline: "AA", canceled: "False", outbound:"outbound", delay_airline: -27.0},
{state: "California", airline: "AA", canceled: "False", outbound: "inbound", delay_airline: -46.0},
{state: "California", airline: "AA", canceled: "False", outbound: "outbound", delay_airline: -8.0},
{state: "California", airline: "AA", canceled: "False", outbound: "inbound", delay_airline: 54.0},
{state: "California", airline: "AA", canceled: "False", outbound: "outbound", delay_airline: 0.0},
{state: "California", airline: "UA", canceled: "False", outbound: "inbound", delay_airline: -18.0},
{state: "California", airline: "UA", canceled: "False", outbound: "outbound", delay_airline: 22.0},
{state: "Florida", airline: "UA", canceled: "False", outbound: "inbound", delay_airline: -17.0},
{state: "Wyoming", airline: "UA", canceled: "False", outbound: "outbound", delay_airline: -5.0},
{state: "Wyoming", airline: "UA", canceled: "False", outbound: "inbound", delay_airline: 26.0}];

var ndx = crossfilter(test_data);

var data_dict = [{name:"none", type:"string", unique:"7"},
                    {name:"state", type:"string", unique:"7"},
                 {name:"airline", type:"string", unique:"9"},
                 {name:"canceled", type:"Bool", unique:"2"},
                 {name:"outbound", type:"string", unique:"2"},
                 {name:"delay_airline", type:"num", unique:"7"}];