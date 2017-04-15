var g = G$("Jane", "Doe");
g.greet().setLang('es').greet(true).log();
$('#login').click(function (){
    var login = G$('Jane', 'Doe');
    login.setLang($('#lang').val()).myGreeting('#greeting', true).log();
})
