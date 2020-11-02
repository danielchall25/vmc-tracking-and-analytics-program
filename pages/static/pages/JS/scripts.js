$(document).ready(function() {
    // all custom jQuery will go here
    /* When the user selects a graph type from the dropdown menu,
    clear a graph selection (if one is already selected) and call the appropriate
    function to insert the HTML code for the specific graph */
    $( "#GraphType" ).change(function() {
        if($('#GraphType').val=="Disabled")
            showNothing();
        else if($('#GraphType').val() == "Histogram") {
            showNothing();
            showHistogram();
        }
        else if($('#GraphType').val() == "X and Y Plot") {
            showNothing();
            show2DXY();
        }
        else if($('#GraphType').val() == "3D (X, Y, Z) Plot") {
            showNothing();
            show3DPlot();
        }
        else if($('#GraphType').val() == "Pie Chart") {
            showNothing()
            showPieChart();
        }
        else if($('#GraphType').val() == "Scatter Plot") {
            showNothing()
            showScatterPlot();

        }
        else if($('#GraphType').val() == "Bar Graph") {
            showNothing();
            showBarGraph();
        }
        else if($('#GraphType').val() == "Individual Statistic") {
            showNothing();
            showIndStat();
        }






});
    // Clear the HTML code for the Graph type
    function showNothing(){
        $('#GraphContainer').empty();

    }
    // Histogram HTML code
    function showHistogram() {
        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        <div class=\"row form-group\"> \
            <div class=\"col-6 auto\"> \
                <select name=\"Histogram\" id=\"Histogram\" class=\"col-sm text-center\"> \
                    <option value=\"disabled\" disable selected value>--- Statistic ---</option> \
                    \<option value = \"Age\">Age</option> \
                    \<option value = \"Distance From Campus\">Distance From Campus</option> \
                    \<option valule = \"Specific Visit Date\">Specific Visit Date</options>\
                    \<option value = \"G.P.A.\">G.P.A.</options>\
                </select> \
            </div> \
            \<div class=\"col-6-auto\">\
                \<div class='form-group'>\
                \<input type='frequency' class='form-control' id='freqDist' aria-describedby='freq' placeholder='Frequency Divisions'>\
                \</div> \
            </div>\
        </div>\
        <div class='row form-group'> \
          <button onClick='DropDownSelect('GraphType');'>Get Histogram</button> \
        </div>";
       $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"
}

    function show2DXY(){
        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        \<div class=\"row form-group\"> \
           \<div class='col-6 auto'> \
           \    <select name='X-Axis' id='X-Value' class='col-sm text-center'>\
           \        <option value='disabledX' disable selected value>--- X-Axis ---</option>\
           \        <option value='Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
           \    </select>\
           \</div>\
           \ <div class='col-6 auto'>\
           <select name='Y-Axis' id='Y-Value' class='col-sm text-center'> \
            <option value='disabledY' disable selected value>--- Y-Axis ---</option> \
                    <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
                </select> \
           </div> \
        </div>\
        <div class='row form-group justify-content-center'> \
          <button onClick='DropDownSelect('GraphType');'>Get Graph</button>\
        </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"
    }

    function show3DPlot(){
        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        \<div class=\"row form-group\"> \
           \<div class='col-4 auto'> \
           \    <select name='X-Axis' id='X-Value3D' class='col-sm text-center'>\
           \        <option value='disabledX' disable selected value>--- X-Axis ---</option>\
           \        <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
           \        <option value='Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
           \    </select>\
           \</div>\
           \ <div class='col-4 auto'>\
           <select name='Y-Axis' id='Y-Value3D' class='col-sm text-center'> \
            <option value='disabledY' disable selected value>--- Y-Axis ---</option> \
                    <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
           \        <option value='Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
                </select> \
           </div> \
           \ <div class='col-4 auto'>\
           <select name='Z-Axis' id='Z-Value3D' class='col-sm text-center'> \
            <option value='disabledZ' disable selected value>--- Z-Axis ---</option> \
                    <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
           \        <option value = 'Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
            \    </select> \
           </div> \
        </div>\
        <div class='row form-group justify-content-center'> \
          <button onClick='DropDownSelect('GraphType');'>Get 3D Graph</button>\
        </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"

    }

    // Add HTML code for pie chart
    function showPieChart() {
        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        <div class=\"row form-group\"> \
            <div class=\"col-6 auto\"> \
                <select name=\"PieChart\" id=\"PieChart\" class=\"col-sm text-center\"> \
                    <option value=\"disabled\" disable selected value>---Statistic---</option> \
                    \<option value = \"Academic Career\">Academic Career</option> \
                    \<option value = \"Ethnicity\">Ethnicity</options>\
                    \<option value = \"Age\">Age</options>\
                    \<option value = \"Gender\">Gender</options>\
                    \<option value = \"Benefit Chapter\">Benefit Chapter</options> \
                </select> \
            </div> \
        </div>\
        <div class='PlaceHolder' id='PlaceHolderRow'> </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"

        $("#PieChart").change(function () {
            $('#PlaceHolderRow').empty();
            if ($('#PieChart').val != "disabled") {
              var data="<div class=\"row form-group\" id='PieListTime'> \
                    <div class=\"col-6 auto\"> \
                        <select name=\"PieTime\" id=\"PieTime\" class=\"col-sm text-center\"> \
                            <option value=\"disabled\" disable selected value>Visit Period</option> \
                            \<option value = 'Total'>Total</option>\
                            \<option value = \"Year\">Year</option> \
                            \<option value = \"Month\">Month</options>\
                            \<option value = \"Week\">Week</options>\
                            \<option value = \"Day\">Day</options>\
                            \<option value = \"Hour\">Hour</options> \
                        </select> \
                    </div> \
                </div>\
            <div class='row form-group'> \
                <button onClick='DropDownSelect('GraphType');'>Get Pie Chart</button> \
            </div>";
                $('#PlaceHolderRow').append(data); // Insert it into the graph container in "VisualizationsPage.html"
            }
        });
    }

    function showScatterPlot() {
        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        \<div class=\"row form-group\"> \
           \<div class='col-6 auto'> \
           \    <select name='X-Axis' id='X-Value' class='col-sm text-center'>\
           \        <option value='disabledX' disable selected value>--- X-Axis ---</option>\
           \        <option value='Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
           \        <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
           \    </select>\
           \</div>\
           \ <div class='col-6 auto'>\
           <select name='Y-Axis' id='Y-Value' class='col-sm text-center'> \
            <option value='disabledY' disable selected value>--- Y-Axis ---</option> \
                    <option value = 'All visitors'>All Visitors</option> \
                    <option value = 'Graduate Students'>Graduate Students</option> \
                    <option valule = 'Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Ethnicity'>Ethnicity</option>\
                    <option value = 'Age'>Age</options>\
                    <option value = 'Gender'>Gender</option>\
                    <option value = 'Benefit Chapter'>Benefit Chapter</option>\
                    <option value='disabledX' disable selected value>--- X-Axis ---</option>\
           \        <option value='Months'>Months</option> \
           \        <option value='Days in Month'>Days in Month</option>\
           \        <option value='Days in week'>Days in week</option>\
           \        <option value='Single Day'>Single Day</option>\
           \        <option value='Year'>Year</option> \
                </select> \
           </div> \
        </div>\
        <div class='row form-group justify-content-center'> \
          <button onClick='DropDownSelect('GraphType');'>Get Graph</button>\
        </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"
    }
        // If the user selects 'Bar Graph'
        function showBarGraph() {

        var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
            <div class=\"row form-group\"> \
                <div class=\"col-6 auto\"> \
                    <select name=\"Bar Graph\" id=\"Bar Graph\" class=\"col-sm text-center\"> \
                        \<option value=\"disabled\" disable selected value>--- Statistic ---</option> \
                        \<option value = \"Academic Career\">Academic Career</option> \
                        \<option value = \"Ethnicity\">Ethnicity</options>\
                        \<option value = \"Age\">Age</options>\
                        \<option value = \"Gender\">Gender</options>\
                        \<option value = \"Benefit Chapter\">Benefit Chapter</options> \
                    </select> \
                </div> \
                \<div class='col-6 auto'>\
                    <select name='Y-Axis' id='Y-Value' class='col-sm text-center'> \
                        <option value='disabledY' disable selected value>--- Y-Axis ---</option> \
                        <option value = 'All students'>All Visitors</option> \
                        <option value = 'G.P.A.'>G.P.A.</option> \
                        <option valule = 'Number of Undergraduate Students'>Undergraduate Students</option>\
                        <option valule = 'Number of Graduate Students'>Graduate Students</option> \
                        <option value='Number of Visits'>Number of Visits</option>\
                    </select> \
                </div> \
           </div>\
           <div class='row form-group justify-content-center'> \
                <button onClick='DropDownSelect('GraphType');'>Get Bar Graph</button> \
            </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.html"

        }

        // Function for showing inividual statistic (e.g. average G.P.A, average age)
        function showIndStat()
        {
             var data = "<div class=\"graphOptions container border w-50 bg-dark\" id=\"Graph\"> </div> \
        \<div class=\"row form-group\"> \
           \<div class='col-4 auto'> \
           \    <select name='Statistic' id='Statistic' class='col-sm text-center'>\
           \        <option value='disabledX' disable selected value>--- Statistic ---</option>\
           \        <option value = 'Average # Daily visitors'>All Visitors</option> \
                    <option value = 'Average # Graduate Students'>Graduate Students</option> \
                    <option valule='Average # Undergraduate Students'>Undergraduate Students</option>\
                    <option value = 'Average G.P.A'>Ethnicity</option>\
           \    </select>\
           \</div>\
        </div>\
        <div class='row form-group justify-content-center'> \
          <button onClick='DropDownSelect('GraphType');'>Get Individual Statistic</button>\
        </div>";
        $('#GraphContainer').append(data); // Insert it into the graph container in "VisualizationsPage.
        }

});


