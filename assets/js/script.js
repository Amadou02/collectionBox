$(function() {
    // Base de données articles
    var piece1 = {
        'categorie': 'piece',
        'nom': 'Triens or du VIIème siècle',
        'prix': '1680',
        'quantite': '1',
        'description': 'Mérovingens BAVDOMERE OR 1.26grs,Avers: + CABILO - NO FIT., Revers: + BAVDOMERES MONETARIVS. ,TTB+ ',
        'img': 'P01'
    };
    var piece2 = {
        'categorie': 'piece',
        'nom': 'Double Henri d\'or 1er type',
        'prix': '5000',
        'quantite': '1',
        'description': 'Monnaie, France, François II (1559-1560), Double Henri d\'or, 1560, Poitiers, TTB, Or Buste à cuirasse damasquinée de Henri II à droite Croix formée de 4 H couronnés, au centre la lettre d\'atelier, croissants en 1 et 3 et fleurs de lis en 2 et 4. HENRICVS.II.D.G.FRANC.REX Pièce de monnaie fabriquée au nom de Henri II',
        'img': 'P02'
    };
    var piece3 = {
        'categorie': 'piece',
        'nom': '30 Sols au génie 1791',
        'prix': '112',
        'quantite': '2',
        'description': 'argent 10grs',
        'img': 'P03'
    };
    var piece4 = {
        'categorie': 'piece',
        'nom': '1 francs 1908',
        'prix': '6',
        'quantite': '5',
        'description': 'Date de 1908',
        'img': 'P04'
    };
    var timbre1 = {
        'categorie': 'timbre',
        'nom': 'TIMBRE NAPOLEON N°18',
        'prix': '560',
        'quantite': '1',
        'description': 'TIMBRE NAPOLEON N°18  - 1 Fr. neuf* réimpression 1862  signé Calvès   défaut avec clair.  voir photos  Côte 2200€',
        'img': 'T01'
    };
    var timbre2 = {
        'categorie': 'timbre',
        'nom': '10F orange Arc de Triomphe',
        'prix': '8',
        'quantite': '4',
        'description': 'Neuf sans trace de charnière. Très beau.',
        'img': 'T02'
    };
    var timbre3 = {
        'categorie': 'timbre',
        'nom': 'Timbre poste 0,30',
        'prix': '0.31',
        'quantite': '10',
        'description': 'TIMBRE POSTE N° 1509 OBLITERE',
        'img': 'T03'
    };
    var timbre4 = {
        'categorie': 'timbre',
        'nom': 'FRANCE Sage 35c',
        'prix': '200',
        'quantite': '1',
        'description': 'FRANCE Sage n°93* 35c centrage courant frais signé Calves',
        'img': 'T04'
    };
    var oeuvre1 = {
        'categorie': 'oeuvre',
        'nom': 'Tableau thème marine signé Mabille',
        'prix': '100',
        'quantite': '1',
        'description': 'Bon état général. Dimensions 61 x 38 cm',
        'img': 'O01'
    };
    var oeuvre2 = {
        'categorie': 'oeuvre',
        'nom': 'Les 3 roses',
        'prix': '25',
        'quantite': '1',
        'description': 'Huile sur Toile de Bernard Le Béguec Format F3 27cm sur 22cm',
        'img': 'O02'
    };
    var oeuvre3 = {
        'categorie': 'oeuvre',
        'nom': 'Margueritte Deval – La devinette des Maturins',
        'prix': '10',
        'quantite': '2',
        'description': ' Lithographie originale, signée  par l\'artiste, en haut à droite Tirée de la revue  "  LE  RIRE "   n° 274   du 3 fev.1900 , Feuille  seule  -  Publicités au dos .   Dimensions : 23 x 31 cm  Excellent état',
        'img': 'O03'
    };
    var oeuvre4 = {
        'categorie': 'oeuvre',
        'nom': 'Litho CHARENTON les CARRIERES',
        'prix': '15',
        'quantite': '3',
        'description': 'RARE )  GUERRE  FRANCO  ALLEMANDE  1870 - 1871 SIEGE  DE  PARIS   1870         Militaria - CHARENTON LES CARRIERES  :  RETOUR A PARIS , 28 JANVIER 1871 . - Bérod, Editeur. (Paris) -- Date d´édition :…',
        'img': 'O04'
    };
    var meuble1 = {
        'categorie': 'meuble',
        'nom': 'Cabinet italien ',
        'prix': '3600',
        'quantite': '1',
        'description': 'Epoque : 18ème siècle Etat : En l\'état  Matière : Placage Longueur : 78,5 Hauteur : 62 Profondeur : 35,5',
        'img': 'M01'
    };
    var meuble2 = {
        'categorie': 'meuble',
        'nom': 'Petit Argentier De Style Louis XVI ',
        'prix': '1150',
        'quantite': '2',
        'description': 'poque : 19ème siècle Etat : Bon état  Matière : Noyer Largeur : 124 Hauteur : 210 Profondeur : 58',
        'img': 'M02'
    };
    var meuble3 = {
        'categorie': 'meuble',
        'nom': 'Cave à Liqueurs Fin 19ème ',
        'prix': '320',
        'quantite': '5',
        'description': 'Epoque : 19ème siècle Etat : Très bon état  Matière : Cristal et carton Longueur : 27cm Hauteur : 23cm Profondeur : 21cm',
        'img': 'M03'
    };
    var meuble4 = {
        'categorie': 'meuble',
        'nom': 'Étagère Japonisante',
        'prix': '1850',
        'quantite': '2',
        'description': 'De Gabriel Viardot D’époque Napoléon III, Artiste : Gabriel Viardot Epoque : 19ème siècle Etat : Bon état  Matière : Bois sculpté Largeur : 79 cm Hauteur : 75 cm Profondeur : 26 cm',
        'img': 'M04'
    };
    var voiture1 = {
        'categorie': 'voiture',
        'nom': 'Renault 4CV 1960',
        'prix': '19950',
        'quantite': '1',
        'description': 'Points forts: -Magnifiquement restauré -Belle couleur bleu azur -Pare-chocs chromés -Tableau de bord blanc - Volant à deux branches - Sièges tissus gris/rouge',
        'img': 'V01'
    };
    var voiture2 = {
        'categorie': 'voiture',
        'nom': 'Triumph TR4A IRS 1966 ',
        'prix': '36950',
        'quantite': '1',
        'description': ' Triumph TR4A IRS 1966 Overdrive  Points forts: - Belle couleur rouge - Jantes à rayons chromés - Overdrive - Feux antibrouillard - Capote Mohair - Sellerie luxe avec appuie-tête',
        'img': 'V02'
    };
    var voiture3 = {
        'categorie': 'voiture',
        'nom': 'Austin Healey Sprite MK1 1960',
        'prix': '24950',
        'quantite': '1',
        'description': 'Points forts: - Version "Frogeye" MK1 - Moteur 1275cc avec carburateur Weber - Très bon état - Volant en bois Moto-Lita - Belle couleur noire',
        'img': 'V03'
    };
    var voiture4 = {
        'categorie': 'voiture',
        'nom': 'Mercedes-Benz 190SL 1956',
        'prix': '99000',
        'quantite': '1',
        'description': 'Points forts • Moteur restauré • Bien entretenue • Peinture rouge',
        'img': 'V04'
    };

    // Initialisation des arrays & variables
    var arrayPiece = [piece1, piece2, piece3, piece4];
    var arrayTimbre = [timbre1, timbre2, timbre3, timbre4];
    var arrayOeuvre = [oeuvre1, oeuvre2, oeuvre3, oeuvre4];
    var arrayMeuble = [meuble1, meuble2, meuble3, meuble4];
    var arrayVoiture = [voiture1, voiture2, voiture3, voiture4];
    var arrayContent = [arrayPiece, arrayTimbre, arrayOeuvre, arrayMeuble, arrayVoiture];
    var bagArray = [];
    var inShoppingBag = 0;

    // Fonction créant les blocs articles
    $(arrayContent).each(function(x) {
        $(arrayContent[x]).each(function(y) {
            $('#content').append(`
        <div id="${arrayContent[x][y]["img"]}" class="col-lg-3 article ${arrayContent[x][y]["categorie"]}">
          <img class="smallImg img-fluid" src="assets/img/${arrayContent[x][y]["img"]}.jpg" alt="">
          <div>
            <h4 class="text-center">${arrayContent[x][y]["nom"]}</h4>
            <p class="text-center">${arrayContent[x][y]["prix"]} €</p>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn-outline-info btn-sm addShoppingBag">
                Ajouter au panier
              </button>
            </div>
				  </div>
        </div>
        `);
        });
    });

    // Fonction afichant la description de l'article en hover
    $('.article').mouseover(function() {
        let elementOver = this.id;
        let description;
        $(arrayContent).each(function(x) {
            $(arrayContent[x]).each(function(y) {
                if (arrayContent[x][y]['img'] == elementOver) {
                    description = arrayContent[x][y]['description'];
                }
            })
        })
        $('.tail-description>p').html(description);
        $('.tail-description').css('display', 'block');
        $(document).bind('mousemove', function(e) {
            $('.tail-description').css({
                left: e.pageX + 20,
                top: e.pageY
            });
        });
    })

    // Fonction effaçant la description quand le curseur est out
    $('.article').mouseout(function() {
        $('.tail-description').css('display', 'none');
    })

    // Fonction ajoutant +1 au nombre d'element du panier sur le front
    $('.addShoppingBag').click(function() {
        ++inShoppingBag;
        if (inShoppingBag > 0) {
            $('#shopping-number').css('background-color', 'green');
        }
        $('#shopping-number').html(`${inShoppingBag}`);
        let elementClicked = $(this).parents('div').parents('div').attr('id');
        writeShoppingBag(elementClicked);
    })

    // Fonction ajoutant élements dans la modale du panier
    var once = false;

    function writeShoppingBag(id) {
        let isFound = false;
        $(arrayContent).each(function(x) {
            $(arrayContent[x]).each(function(y) {
                if (arrayContent[x][y]['img'] == id) {
                    $(bagArray).each(function(i) {
                        if (bagArray[i] == id) {
                            ++bagArray[i + 1]
                            isFound = true;
                        }
                    })
                    if (!isFound) {
                        bagArray.push(id);
                        bagArray.push(1);
                    }
                    $('#modalBag .modal-body').html('');
                    $('#modalBag .modal-footer>span').html('');
                    $(bagArray).each(function(i) {
                        $(arrayContent).each(function(x) {
                            $(arrayContent[x]).each(function(y) {
                                if (bagArray[i] == arrayContent[x][y]['img']) {
                                    $('#modalBag .modal-body').append(`
                                      <div class="${arrayContent[x][y]['img']} d-flex justify-content-between align-items-center">
                                        <span>${arrayContent[x][y]['nom']}</span>
                                        <div class="d-flex align-items-center">
                                          <span>${bagArray[i+1]}</span>
                                          <button type="button" class="btn-outline-info btn-sm ml-2 addShoppingBagOne">
                                             +
                                          </button>
                                          <button type="button" class="btn-outline-info btn-sm ml-2 removeShoppingBagOne">
                                             -
                                          </button>
                                          <button type="button" class="btn-outline-info btn-sm ml-2 removeShoppingBag">
                                             X
                                          </button>
                                        </div>
                                      </div>
                                    `)
                                }
                            })
                        })
                    })
                }
            })
        })
        if (!once) {
            $(document).on('click', 'button.removeShoppingBag', deleteShoppingBag);
            $(document).on('click', 'button.removeShoppingBagOne', oneDeleteShoppingBag);
            $(document).on('click', 'button.addShoppingBagOne', oneAddShoppingBag);
        }
        once = true;
        calcTotalPrice();
    }

    // Fonction permettant de supprimer un élement du panier
    function deleteShoppingBag() {
        let id = $(this).parents('div').parents('div').attr('class');
        id = id.substr(0, 3);
        $(bagArray).each(function(i) {
            if (bagArray[i] == id) {
                let quantite = bagArray[i + 1];
                bagArray.splice(i, 2);
                $(`.${id}`).remove();
                inShoppingBag = inShoppingBag - quantite;
                if (inShoppingBag == 0) {
                    $('#shopping-number').css('background-color', 'red');
                }
                $('#shopping-number').html(`${inShoppingBag}`);
                if (inShoppingBag == 0) {
                    $('#modalBag .modal-body').append(`
                      <p>Votre panier est vide !</p>
                      `)
                }
                calcTotalPrice();
            }
        })
    }

    // Fonction -1 panier
    function oneDeleteShoppingBag() {
        let ref = $(this).parents('div').parents('div').attr('class');
        ref = ref.substr(0, 3);
        $(bagArray).each(function(i) {
            if (bagArray[i] == ref) {
                bagArray[i + 1] = --bagArray[i + 1]
                    --inShoppingBag;
                if (inShoppingBag == 0) {
                    $('#shopping-number').css('background-color', 'red');
                }
                $('#shopping-number').html(`${inShoppingBag}`);
                if (inShoppingBag == 0) {
                    $('#modalBag .modal-body').append(`
                <p>Votre panier est vide !</p>
                `)
                }
                if (bagArray[i + 1] == 0) {
                    $(`.${ref}`).remove();
                    bagArray.splice(i, 2);
                }
                $(`.${ref}>div>span`).html('');
                $(`.${ref}>div>span`).append(`
            ${bagArray[i+1]}
            `);
            }
        })
        calcTotalPrice();
    }

    // Fonction +1 panier
    function oneAddShoppingBag() {
        let ref = $(this).parents('div').parents('div').attr('class');
        ref = ref.substr(0, 3);
        $(bagArray).each(function(i) {
            if (bagArray[i] == ref) {
                bagArray[i + 1] = ++bagArray[i + 1]
                    ++inShoppingBag;
                $('#shopping-number').html(`${inShoppingBag}`);
                $(`.${ref}>div>span`).html('');
                $(`.${ref}>div>span`).append(`
            ${bagArray[i+1]}
            `);
            }
        })
        calcTotalPrice();
    }

    // Fonction calculant le prix total des élements du panier
    function calcTotalPrice() {
        let totalPrice = 0;
        $(bagArray).each(function(i) {
            if (!isNaN(bagArray[i])) {
                $(arrayContent).each(function(x) {
                    $(arrayContent[x]).each(function(y) {
                        if (bagArray[i - 1] == arrayContent[x][y]['img']) {
                            totalPrice = totalPrice + (bagArray[i] * parseFloat(arrayContent[x][y]['prix']));
                        }
                    })
                })
            }
        })
        $('#modalBag .modal-footer>span').html('');
        $('#modalBag .modal-footer>span').append(`
          Prix total à payer : ${totalPrice} €
          `);
    }

    // Fonction recherche
    $('#input-search').keyup(function() {
        $('#content>div').css('display', 'none')
        let input = $(this).val();
        let regexp = new RegExp(`${input}`, 'i');
        $(arrayContent).each(function(x) {
            $(arrayContent[x]).each(function(y) {
                if ((regexp.test(arrayContent[x][y]['nom'])) || (regexp.test(arrayContent[x][y]['categorie'])) || (regexp.test(arrayContent[x][y]['description']))) {
                    $(`#${arrayContent[x][y]['img']}`).css('display', 'block');
                }
            })
        })
    })

    // Fonction permettant d'afficher la catégorie voulue
    $('#home, #piece, #timbre, #oeuvre, #meuble, #voiture').click(function() {
        let button = this.id;
        $('.piece, .timbre, .oeuvre, .meuble, .voiture').css('display', 'block');
        if (button == 'piece') {
            $('.timbre, .oeuvre, .meuble, .voiture').css('display', 'none');
        } else if (button == 'timbre') {
            $('.piece, .oeuvre, .meuble, .voiture').css('display', 'none');
        } else if (button == 'oeuvre') {
            $('.timbre, .piece, .meuble, .voiture').css('display', 'none');
        } else if (button == 'meuble') {
            $('.timbre, .oeuvre, .piece, .voiture').css('display', 'none');
        } else if (button == 'voiture') {
            $('.timbre, .oeuvre, .meuble, .piece').css('display', 'none');
        }
    });

    // Affiche une alerte quand on clique sur le bouton acheter de la modale, et réinitialise toutes les variables et l'ui
    $('#buy').click(function() {
        if (inShoppingBag > 0) {
            alert('Merci pour votre achat !');
            $('#modalBag .modal-body').html('');
            bagArray = [];
            inShoppingBag = 0;
            $('#shopping-number').html(`${inShoppingBag}`);
            $('#shopping-number').css('background-color', 'red');
            calcTotalPrice();
            return;
        }
        alert('Votre panier est vide !')
    })

    // Fonction de test et de debug
    $('button').click(function() {
        console.log(bagArray);
    })
});
