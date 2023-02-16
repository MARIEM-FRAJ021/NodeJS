// ce bout de code crée un mini serveur qui renvoie un message "Salut les webistes"
// Serveur lancé sur le port 8080
// require fait appel à une bibliothèque http qui nous permet de créer un serveur web
// la variable http représsente un objet js qui permet de lancer un Ser Web
// on appelle createServer() et on registre ce serveur dans la  variable server
// function fct en paramère / callback
// le paramètre req contient tous ce que le visiteur a demandé
// le paramètre res contient la réponse à envoyer
// pour récupérer la page demandée par le visiteur, il faut faire appel au module url
// parser le contenu de la requête
var http= require('http');
var url= require('url');
var querystring = require('querystring'); // querystring module pour découper chaîne de caractère.
var server = http.createServer(function(req,res){
    var params= querystring.parse(url.parse(req.url).query);
    console.log(params);
    
    //ajouter un type MIME
    /*var page= url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"Content-Type": "text/plain"});
    /*res.write(/*'<!DOCTYPE html>'+
        '<html lang="en">'+
        '<head>'+
            '<meta charset="UTF-8">'+
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
            '<title>Ma page Node.js</title>'+
        '</head>'+
        '<body>'+
        '<p> Voici un paragraphe <strong>HTML</strong> !</p>'+
        '</body>'+
        '</html>''Bien on avance');
        if (page == '/'){
            res.write('Vous êtes dans la page d\'accueil !');

        }
        else if(page =='/Contact'){
            res.write('Vous êtes dans la page contact !');
        }
        else if(page == '/Affichage/1/user'){
            res.write('Affichez l\'utilisateur qui a l\'id 1 !');
        }
        else{
            res.write('404 not found!');
        }
    res.end();*/
    res.writeHead(200,{"Content-Type": "text/plain"});
    if('id 'in params && 'login' in params){
        res.write('Votre id est'+params['id']+'et votre login'+params['login']);
    }
    else{
        res.write('Veuillez saisir votre id et login !');
    }
    res.end();

});
server.listen(8080);