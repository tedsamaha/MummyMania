


loader = document.getElementById('loader')
loader.style.visibility = 'hidden'
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
let backgroundPercentage;
let skinPercentage;
let bodyPercentage;
let objectPercentage;
let eyePercentage;
let mouthPercentage;
let headPercentage;

function setInputFilter(textbox, inputFilter) {
    [
        'input',
        'keydown',
        'keyup',
        'mousedown',
        'mouseup',
        'select',
        'contextmenu',
        'drop',
    ].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty('oldValue')) {
                this.value = this.oldValue;
                this.setSelectionRange(
                    this.oldSelectionStart,
                    this.oldSelectionEnd,
                );
            } else {
                this.value = '';
            }
        });
    });
}





const inputID = document.getElementById('nft-input-2');

const viewBtn = document.getElementById('viewBtn');

var IDvalue;

viewBtn.addEventListener('click', () => {

   
    
    bodyPercentage = 0
    skinPercentage = 0
    backgroundPercentage = 0
    objectPercentage = 0
    eyePercentage = 0
    mouthPercentage = 0
    headPercentage = 0
    let explorer = document.getElementById("hathorExplorer");
    document.getElementById("rarityscore").innerHTML = ''
    document.getElementById("imgID").src = ''
    document.getElementById("mummyName").innerHTML = ''
    document.getElementById("bginfo").innerHTML = ''
    document.getElementById("skininfo").innerHTML = ''
    document.getElementById("bodyinfo").innerHTML = ''
    document.getElementById("object").innerHTML = ''
    document.getElementById("headinfo").innerHTML = ''
    document.getElementById("mouthinfo").innerHTML = ''
    document.getElementById("eyesinfo").innerHTML = ''
    document.getElementById("desc").innerHTML = ''
    document.getElementById('informationdiv').style.visibility = "visible"

    document.getElementById('informationdiv').style.visibility = "hidden"

    if (inputID.value === '') {
        console.log('cannot be blank')

    } else {

        if (inputID.value == 0) {
            IDvalue = '0'


        } else {
            IDvalue = inputID.value.replace(/^0+/, '');

        }
        loader.style.visibility = 'visible'
        // console.log('value info: ' + IDvalue)
        var requestOptions3 = {
            method: 'GET',
            redirect: 'follow'
          };
        
          fetch("https://mummymania.herokuapp.com/API/GetTokenID/"+ IDvalue, requestOptions3)
            .then(response => response.json())
            .then(data => {
              console.log('tokenID: ', data['TokenID'][0].TokenID)
              let uuid = data['TokenID'][0].TokenID;
                explorer.innerHTML = '<a href=https://explorer.hathor.network/token_detail/'+ uuid +  ' target="_blank"class="UUID-card"> View on Hathor</a>'
              
             
            });
    

        $.getJSON('https://mummymania.mypinata.cloud/ipfs/QmZtAhjPkty2AizmBqHwEXLDAT5JUzp8k5tiWN3YHgXgj3/' + IDvalue + '.json', function (data) {
            loader.style.visibility = 'hidden'
            // console.log(data);

            // BACKGROUND PERCENTAGES
            switch
            (data['attributes'][0].value) {

                case
                    "RIO DE JANEIRO":
                    backgroundPercentage = 5.8;
                    break;

                case
                    "PURPLE":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "420":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "DARK DESERT":
                    backgroundPercentage = 5.8;
                    break;

                case
                    "ENCHANTED FOREST":
                    backgroundPercentage = 3;
                    break;

                case
                    "HIEROGLYPHICS":
                    backgroundPercentage = 1.6;
                    break;

                case
                    "GREAT WALL OF CHINA":
                    backgroundPercentage = 5.8;
                    break;

                case
                    "GREEN":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "HALLOWEEN":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "LAVA":
                    backgroundPercentage = 1.6;
                    break;

                case
                    "HOT AIR BALLOONS":
                    backgroundPercentage = 3;
                    break;

                case
                    "LGBTQ+":
                    backgroundPercentage = 3;
                    break;

                case
                    "ORANGE":
                    backgroundPercentage = 6.6;
                    break;

                case
                    "PURPLE GREEN GRADIENT":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "PYRAMIDS":
                    backgroundPercentage = 5.8;
                    break;

                case
                    "BASKETBALL COURT":
                    backgroundPercentage = 5.8;
                    break;

                case
                    "COLOSSEUM":
                    backgroundPercentage = 6;
                    break;

                case
                    "NEW YORK":
                    backgroundPercentage = 6.4;
                    break;

                case
                    "TAJ MAHAL":
                    backgroundPercentage = 3;
                    break;

                case
                    "GOLDEN TOMB":
                    backgroundPercentage = 1.8;
                    break;

                case
                    "TOXIC":
                    backgroundPercentage = 3;
                    break;

            }

            // SKIN PERCENTAGES
            switch
            (data['attributes'][1].value) {

                case
                    "ORIGINAL":
                    skinPercentage = 17.5;
                    break;

                case
                    "GREEN PURPLE GRADIENT":
                    skinPercentage = 22.5;
                    break;

                case
                    "LEOPARD SKIN":
                    skinPercentage = 2.5;
                    break;

                case
                    "LGBTQ+":
                    skinPercentage = 5;
                    break;

                case
                    "POISONOUS":
                    skinPercentage = 5;
                    break;

                case
                    "CYAN SKIN":
                    skinPercentage = 22.5;
                    break;

                case
                    "SUN":
                    skinPercentage = 17.5;
                    break;

                case
                    "TATTOOED ":
                    skinPercentage = 5;
                    break;

                case
                    "ZEBRA":
                    skinPercentage = 2.5;
                    break;



            }


            // BODY PERCENTAGES
            switch
            (data['attributes'][2].value) {

                case
                    "ALADDIN VEST":
                    bodyPercentage = 4;
                    break;

                case
                    "BLUE":
                    bodyPercentage = 11.25;
                    break;

                case
                    "KOBE BRYANT":
                    bodyPercentage = 2.5;
                    break;

                case
                    "TRIPPY SHIRT":
                    bodyPercentage = 2.3;
                    break;

                case
                    "ETHEREUM NECKLACE":
                    bodyPercentage = 0.4;
                    break;

                case
                    "CLOTH":
                    bodyPercentage = 6;
                    break;

                case
                    "GENERAL":
                    bodyPercentage = 11.25;
                    break;

                case
                    "GOLD BANDAGE":
                    bodyPercentage = 2.3;
                    break;

                case
                    "HAWAIIAN SHIRT":
                    bodyPercentage = 5;
                    break;

                case
                    "INFLATABLE DUCKY":
                    bodyPercentage = 2.5;
                    break;

                case
                    "LEBRON JAMES":
                    bodyPercentage = 2.5;
                    break;
                case
                    "LGBTQ+ SHIRT":
                    bodyPercentage = 5;
                    break;
                case
                    "MICHAEL JORDAN":
                    bodyPercentage = 2.5;
                    break;
                case
                    "PHAROAH NECKLACE":
                    bodyPercentage = 2.5;
                    break;
                case
                    "PINK BANDAGE":
                    bodyPercentage = 11.25;
                    break;
                case
                    "DARK PINK BANDAGE":
                    bodyPercentage = 11.25;
                    break;
                case
                    "PURPLE BANDAGE":
                    bodyPercentage = 5;
                    break;
                case
                    "SUNSET BANDAGE":
                    bodyPercentage = 5;
                    break;
                case
                    "VALENTINE BANDAGE":
                    bodyPercentage = 2.5;
                    break;
                case
                    "WHO LET THE MUMMY OUT SHIRT":
                    bodyPercentage = 5;
                    break;



            }

            // OBJECT PERCENTAGES
            switch
            (data['attributes'][3].value) {

                case
                    "ALADDIN OIL LAMP":
                    objectPercentage = 8.75;
                    break;

                case
                    "AXE":
                    objectPercentage = 15;
                    break;

                case
                    "BLOODY DRINK":
                    objectPercentage = 15;
                    break;

                case
                    "BONG":
                    objectPercentage = 3.75;
                    break;

                case
                    "CHICKEN LEG":
                    objectPercentage = 3.75;
                    break;

                case
                    "CLEOPATRA STAFF":
                    objectPercentage = 1.9;
                    break;

                case
                    "SODA BOTTLE":
                    objectPercentage = 15;
                    break;

                case
                    "COTTON CANDY":
                    objectPercentage = 8.75;
                    break;

                case
                    "HTR STAFF":
                    objectPercentage = 0.6;
                    break;

                case
                    "ANKH STAFF":
                    objectPercentage = 1.9;
                    break;

                case
                    "LAB POISON":
                    objectPercentage = 3.75;
                    break;
                case
                    "JAFAR'S STAFF":
                    objectPercentage = 0.6;
                    break;
                case
                    "RUBBER DUCKY":
                    objectPercentage = 3.75;
                    break;
                case
                    "SPIDER ICE CREAM":
                    objectPercentage = 8.75;
                    break;
                case
                    "VOODOO DOLL":
                    objectPercentage = 8.75;
                    break;




            }

            // HEAD PERCENTAGES
            switch
            (data['attributes'][6].value) {

                case
                    "ALADDIN HAT":
                    headPercentage = 10;
                    break;

                case
                    "ANUBIS MASK":
                    headPercentage = 1.25;
                    break;

                case
                    "BASEBALL CAP":
                    headPercentage = 10;
                    break;

                case
                    "BUNNY EARS":
                    headPercentage = 3;
                    break;

                case
                    "CLEOPATRA HAIR":
                    headPercentage = 1.25;
                    break;

                case
                    "FEMALE PHARAOH HAT":
                    headPercentage = 1.25;
                    break;

                case
                    "ORIGINAL":
                    headPercentage = 25;
                    break;

                case
                    "GOLDEN LEAFS":
                    headPercentage = 3;
                    break;

                case
                    "WHO'S YOUR MUMMY HAT":
                    headPercentage = 20;
                    break;

                case
                    "BLOODY TANK":
                    headPercentage = 3;
                    break;

                case
                    "HEADPHONES":
                    headPercentage = 15;
                    break;

                case
                    "TUTANKHAMUN'S HAT":
                    headPercentage = 1.25;
                    break;
                case
                    "POISON":
                    headPercentage = 3;
                    break;
                case
                    "GAS MASK":
                    headPercentage = 3;
                    break;





            }

            // MOUTH PERCENTAGES
            switch
            (data['attributes'][4].value) {

                case
                    "ACID TAB":
                    mouthPercentage = 3.75;
                    break;

                case
                    "BROKEN TEETH":
                    mouthPercentage = 8.75;
                    break;

                case
                    "BUBBLE MOUTH":
                    mouthPercentage = 3.75;
                    break;

                case
                    "DROOLING MOUTH":
                    mouthPercentage = 8.75;
                    break;

                case
                    "JOINT":
                    mouthPercentage = 3.75;
                    break;

                case
                    "OPEN MOUTH":
                    mouthPercentage = 11.25;
                    break;

                case
                    "PUMPKIN MOUTH":
                    mouthPercentage = 11.25;
                    break;

                case
                    "SAD MOUTH":
                    mouthPercentage = 11.25;
                    break;

                case
                    "SCREAMING":
                    mouthPercentage = 8.75;
                    break;

                case
                    "SMILING":
                    mouthPercentage = 8.75;
                    break;

                case
                    "STITCHED MOUTH":
                    mouthPercentage = 2.5;
                    break;

                case
                    "TONGUE OUT":
                    mouthPercentage = 2.5;
                    break;
                case
                    "VAMPIRE TEETH":
                    mouthPercentage = 3.75;
                    break;
                case
                    "WORRIED":
                    mouthPercentage = 11.25;
                    break;





            }

            // EYES PERCENTAGES
            switch
            (data['attributes'][5].value) {

                case
                    "ANGRY":
                    eyePercentage = 5.8;
                    break;
                case
                    "CLEOPATRA":
                    eyePercentage = 2.2;
                    break;
                case
                    "CONFUSED":
                    eyePercentage = 5.8;
                    break;
                case
                    "FOCUSED":
                    eyePercentage = 2.5;
                    break;
                case
                    "ORIGINAL":
                    eyePercentage = 11.25;
                    break;

                case
                    "HEART":
                    eyePercentage = 2.5;
                    break;

                case
                    "HIGH":
                    eyePercentage = 5.8;
                    break;

                case
                    "HTR":
                    eyePercentage = 0.6;
                    break;

                case
                    "PHARAOH":
                    eyePercentage = 2.2;
                    break;

                case
                    "POISON":
                    eyePercentage = 2.5;
                    break;

                case
                    "POPPING":
                    eyePercentage = 2.5;
                    break;

                case
                    "DUMB":
                    eyePercentage = 11.25;
                    break;

                case
                    "RED":
                    eyePercentage = 5.8;
                    break;

                case
                    "SHY":
                    eyePercentage = 2.5;
                    break;

                case
                    "TIRED":
                    eyePercentage = 6;
                    break;

                case
                    "TURQUOISE":
                    eyePercentage = 5.8;
                    break;

                case
                    "WHITE":
                    eyePercentage = 11.25;
                    break;

                case
                    "WORMS":
                    eyePercentage = 2.5;
                    break;
                case
                    "YELLOW":
                    eyePercentage = 11.25;
                    break;






            }


            console.log('background percentage ', backgroundPercentage)
            console.log('skin percentage ', skinPercentage)
            console.log('body percentage ', bodyPercentage)
            console.log('object percentage ', objectPercentage)
            console.log('head percentage ', headPercentage)
            console.log('eyes percentage ', eyePercentage)
            console.log('mouth percentage ', mouthPercentage)

            TotalPercentage = backgroundPercentage + skinPercentage + bodyPercentage + objectPercentage + headPercentage + eyePercentage + mouthPercentage
            total = TotalPercentage / 7

            console.log('total percentage ', TotalPercentage)
            console.log('total percentage over 14.69 ', total +'/14.69')
// 102.85
            finalPercentage = (total * 100)/14.69
            rarityscore =Math.round(100 - finalPercentage) 
            console.log('final percentage: ', finalPercentage)
            console.log('rarity score: ', rarityscore)



            document.getElementById("imgID").src = "https://mummymania.mypinata.cloud/ipfs/QmbQfPA1t5JcRcKf2eN8L9fgjZzkoDowFaWN2dShUEWvhu/" + IDvalue + ".jpg";
            document.getElementById("mummyName").innerHTML = '<b>' + data['name'] + '</b> '
            document.getElementById("bginfo").innerHTML = '<b>' + data['attributes'][0].value + '</b> '
            document.getElementById("bgpercentage").innerHTML = backgroundPercentage + '%'
            document.getElementById("rarityscore").innerHTML = 'Rarity Score: ' + rarityscore
            document.getElementById("skininfo").innerHTML = '<b>' + data['attributes'][1].value + '</b> '
            document.getElementById("skinpercentage").innerHTML = skinPercentage + '%'
            document.getElementById("bodyinfo").innerHTML = '<b>' + data['attributes'][2].value + '</b> '
            document.getElementById("bodypercentage").innerHTML = bodyPercentage + '%'
            document.getElementById("object").innerHTML = '<b>' + data['attributes'][3].value + '</b> '
            document.getElementById("objectpercentage").innerHTML = objectPercentage + '%'
            document.getElementById("headinfo").innerHTML = '<b>' + data['attributes'][6].value + '</b> '
            document.getElementById("headpercentage").innerHTML = headPercentage + '%'
            document.getElementById("mouthinfo").innerHTML = '<b>' + data['attributes'][4].value + '</b> '
            document.getElementById("mouthpercentage").innerHTML = mouthPercentage + '%'
            document.getElementById("eyesinfo").innerHTML = '<b>' + data['attributes'][5].value + '</b> '
            document.getElementById("eyespercentage").innerHTML = eyePercentage + '%'
            document.getElementById("desc").innerHTML = "<b> Description: </b>" + data['name'] + " of 10000"
            document.getElementById('informationdiv').style.visibility = "visible"

        });






    }

});

setInputFilter(inputID, function (value) {
    return /^\d*$/.test(value) && (value === '' || parseInt(value) <= 9999) && (value === '' || parseInt(value) >= 0);
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}





//usage:
