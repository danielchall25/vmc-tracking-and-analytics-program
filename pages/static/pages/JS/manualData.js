var rows = ['zero','one','two','three','four','five','six','seven','eight','nine'];
i = 0;
j = 1;
let AddControl = document.querySelector('#AddControl');
let p = AddControl.querySelector('#' + rows[i]);

p.innerHTML = "<div class='row mb-1 justify-content-center' id='" + 'iii' + rows[i] +"'>"+j+"</div>" + "<div class='row mb-1' id='" + 'i' + rows[i] +"'>"+ 
                "<div class='col-md-3'>"+ 
                    "<input type='text' style='width:100%;' placeholder='NSHE ID'></input>"+
                "</div>" +
                "<div class='col-md-3'>"+
                    "<input type='text' style='width:100%;' placeholder='First Name'></input>"+
                "</div>"+
                "<div class='col-md-3'>"+
                    "<input type='text' style='width:100%;' placeholder='Last Name'></input>"+
                "</div>"+
                "<div class='col-md-3'>"+
                    "<input type='text' style='width:100%;' placeholder='Location'></input>"+
                "</div>"+
            "</div>"+ //here
            "<div class='row' id='" + 'ii' + rows[i] +"'>"+
                "<div class='col-md-6'>"+ 
                    "<input type='datetime-local' style='width:100%;'></input>"+
                "</div>" +
                "<div class='col-md-6'>"+
                    "<input type='datetime-local' style='width:100%;'></input>"+
                "</div>"
            "</div>";
// "</div>";
// "<div>" + i+ "</div>"+
// var i = 0;
function addRow() {
    if(i<9) {
        // alert(i);
        i++;
        j++;
        let p = AddControl.querySelector('#' + rows[i]);

        p.innerHTML = "<div class='row mb-1 justify-content-center' id='" + 'iii' + rows[i] +"'>"+j+"</div>" + "<div class='row mb-1' id='" + 'i' + rows[i] +"'>"+
        "<div class='col-md-3'>"+
            "<input type='text' style='width:100%;' placeholder='NSHE ID'></input>"+
        "</div>" +
        "<div class='col-md-3'>"+
            "<input type='text' style='width:100%;' placeholder='First Name'></input>"+
        "</div>"+
        "<div class='col-md-3'>"+
            "<input type='text' style='width:100%;' placeholder='Last Name'></input>"+
        "</div>"+
        "<div class='col-md-3'>"+
            "<input type='text' style='width:100%;' placeholder='Location'></input>"+
        "</div>"+
    "</div>"+
    "<div class='row' id='" + 'ii' + rows[i] +"'>"+
        "<div class='col-md-6'>"+ 
            "<input type='datetime-local' style='width:100%;'></input>"+
        "</div>" +
        "<div class='col-md-6'>"+
            "<input type='datetime-local' style='width:100%;'></input>"+
        "</div>"
    "</div>";
    p.classList.add('manualBorder');

    }
}

function removeRow() {
    if(i>0) {
        let p = AddControl.querySelector('#' + rows[i]);
        p.classList.remove('manualBorder');
        var element = document.getElementById('i' + rows[i]).remove();
        var element = document.getElementById('ii' + rows[i]).remove();
        var element = document.getElementById('iii' + rows[i]).remove();

        j--;
        i--;
    }
    
}

function resetRows() {
    // i = 0;
}