<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Contactez nous | Leader de l'Incin&eacute;ration et du Nettoyage Industriel au Cameroun</title>
        <?php include 'pageFragments/head.php' ?>
        <meta name="keywords" content="Port de Douala, Incinération des déchets, Recyclage des déchets industriels, Recyclage des huiles usées, Traitement des huiles usées, prestation de services, Enlevement des poubelles, Protection de l'environement, Dépollution, Societé pétrolière, Traitement des eaux, Garage M Cameroun, Garage Marine du Cameroun..." />
        <meta name="description" content="Port de Douala, Incinération des déchets, Recyclage des déchets industriels, Recyclage des huiles usées, Traitement des huiles usées, prestation de services, Enlevement des poubelles, Protection de l'environement, Dépollution, Societé pétrolière, Traitement des eaux, Garage M Cameroun, Garage Marine du Cameroun..." />
        <?php include 'pageFragments/head.php' ?>
        
        <link href="style/forms.css" rel="stylesheet" type="text/css" />
        <style>
            #banner {background-position: center center; background-repeat: no-repeat; background-size: 100% auto;border-bottom: solid 1px #c6c6c6; float: left;height: 322px;margin-top: 72px; overflow: hidden;width: 980px}
            .slide-img { height: 320px;width: 956px}
            #stage {float: left;margin-top: 12px; width: 100%}
            
            .illustration {float: left; width: 950px}
            .illustration .contact {background-size: 100% auto; background-image: url(_images/contacs.jpg); background-repeat: no-repeat;float: left; height: 550px; margin-top: 25px; width: 500px}
            .illustration p {line-height: 22px; margin-top: 12px}
            .illustration li {color: #008432; margin-top: 10px}
            #logon-form {border: solid  1px #89EBAE; float: right; margin: 40px 0; padding: 10px; width: 310px}
        </style>

    </head>

    <body>
        <?php include 'pageFragments/top.php' ?>
        <div class="wrapper">
            <div id='banner' style="background-image: url(_images/contact.jpg)"></div>
            <section class="stage">
                <header>Contactez nous</header>
                <div class="illustration">
                    <div class="contact"></div>
                    <div id='logon-form'>
                                <form id="form">
                                    <div><input class="name" type="text" placeholder="Votre nom"> </div>
                                    <div><input class="phone" type="text" placeholder="Telehone"> </div>
                                    <div><input class="email" type="email" placeholder="Addresse Email"> </div>
                                    <div><input class="object" type="text" placeholder="Objet"> </div>
                                    <div><textarea class="message"  placeholder="Message...." style="height: 100px; width: 296px; resize: none"></textarea> </div>
                                </form>
                                <div class='clear'></div>
                                <div style="margin-top: 10px" >
                                     <div class="button confirm2 submit" style=" float: right">Envoyer</div>
                                </div>
                            </div>
                </div>
            </section>
            <div class="clear"></div>
        </div>
        <?php include 'pageFragments/footer.php' ?>
        <?php include 'pageFragments/custom-js.php' ?>
    </body>
    
    <script type="text/javascript">
        (function() {
         $('nav li.contact').addClass('current')
        })()
    </script>
</html>