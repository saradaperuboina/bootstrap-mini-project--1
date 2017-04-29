/**
 * Created by Krishna on 10/10/2016.
 */

jQuery(function () {

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    var addRow = function (data) {

        if (data === undefined) {
            data = {
                fname: $('#fname').val(),
                lname: $('#lname').val(),
                email: $('#email').val(),
                phone: $('#phne').val()
            }
            $('#fname').val("");
            $('#lname').val("");
            $('#email').val("");
            $('#phne').val("");
        }

        var table = $('#tbl').find('tbody');
        var str = "\
            <tr> \
                <td class='col-sm-2 text-center'>\
                    <p>" + data.fname + "</p>\
                    <input type='text' class='hide edit'/>\
                </td>  \
                <td class='col-sm-2 text-center'>\
                    <p>" + data.lname + "</p>\
                    <input type='text' class='hide edit'/>\
                </td>  \
                <td class='col-sm-2 text-center'>\
                    <p>" + data.email + "</p>\
                    <input type='text' class='hide edit'/>\
                </td>  \
                <td class='col-sm-2 text-center'>\
                    <p>" + data.phone + "</p>\
                    <input type='text' class='hide edit'/>\
                </td>  \
                <td class='col-sm-2 text-center edit'>\
                    <button class='btn btn-danger rounded remove'>-</button>\
                </td>\
            </tr>";

        $(table).find('tr').last().before($(str));
    };

    $(document).on('click','.remove',function(){
        $(this).parents('tr').remove();
    });

    $(document).on('dblclick','#tbl td',function(){
        var text = $(this).find('p').text();
        $(this).find('p').addClass('hide');
        $(this).find('input').val(text);
        $(this).find('input').removeClass('hide');
        $(this).find('input').focus();
    });

    $(document).on('mouseenter mouseleave','#tbl td', function(e){
        if (e.altKey) {
            removecellstyling();
            if (e.type === 'mouseenter' && $(this).children('button').length === 0
                && $(this).children('p').length !== 0) {
                $(this).addClass('hover');
            }
        }
    });

    var removecellstyling = function () {
        $('.hover').removeClass('hover');
    };

    $(document).on('keyup', function (e) {
        removecellstyling();
        return false;
    });

    $(document).on('click',function(e){
        var ele = $(document).find('input:visible.edit');
        if ($(ele).length == 1 && $(ele)[0] !== e.target) {
            var text = $($(ele)[0]).val();
            $($(ele)[0]).siblings().text(text);
            $($(ele)[0]).siblings().removeClass('hide');
            $($(ele)[0]).addClass('hide');
        }
    });

    var initializeTable = function () {
        var data = [{
            fname: "James",
            lname: "Benton",
            email: "jbutt@gmail.com",
            phone: "504-621-8927"
        }, {
            fname: "Veronika",
            lname: "Inouye",
            email: "vinouye@aol.com",
            phone: "408-540-1785"
        }, {
            fname: "Francine",
            lname: "Vocelka",
            email: "francine_vocelka@vocelka.com",
            phone: "505-977-3911"
        }, {
            fname: "Karl",
            lname: "Klonowski",
            email: "karl_klonowski@yahoo.com",
            phone: "908-877-6135"
        }, {
            fname: "Freeman",
            lname: "Gochal",
            email: "freeman_gochal@aol.com",
            phone: "610-476-3501"
        }];
        for (var i = 0; i < 5; i++) {
            addRow(data[i]);
        }
    };

    $('#addRow').click(function () {
        addRow();
    });

    $('#hide1').click(function(){
        $('#img1').show();
    });

    $('#hide2').click(function(){
        $('#img1').hide();
    });

    $('#hide3').click(function(){
        $('#img1').toggle();
    });

    $('#fade1').on('dblclick',function(){
        $('#div1').fadeIn();
    });

    $('#fade2').on('dblclick',function(){
        $('#div1').fadeOut();
    });

    $('#fade3').on('dblclick',function(){
        $('#div1').fadeToggle();
    });

    $('#fade4').on('dblclick',function(){
        $('#div2').fadeTo('slow',parseInt($('#rangeinput').val())/10);
    });

    $('#rangeinput').change(function(){
        var opacity = parseInt($(this).val())/10;
        $('#rangeValue').text(opacity + " opacity");
    });

    $('#div10').on('mouseover',function(){
        $(this).stop();
        $(this).animate({
            opacity:0.5,
            height:"400px",
            width:"400px",
            fontSize: "30px"
        },3000, function(){
            window.alert("Mouseenter Event Done!");
        })
    });

    $('#div10').on('mouseleave',function(e){
        $(this).stop();
        $(this).animate({
            opacity:1,
            height:"200px",
            width:"200px",
            fontSize: "12px"
        },3000,function(){
            window.alert("Mouseleave Event Done!");
        });
    });

    $("#keyinput1").keypress(function() {
        $("#keydiv1").fadeOut(2000).fadeIn(2000).fadeTo(2000,0.2).fadeTo(2000,1);
    });

    $("#keyinput2").keypress(function() {
        $("#keydiv2")
            .animate({
                width:"500px",
                height:"500px"
            },2000)
            .animate({
                left:"-250px",
                opacity:0.2
            },2000)
            .animate({
                width:"200px",
                height:"200px",
                left:"0px",
                opacity:1
            },2000);
    });

    initializeTable();

});
