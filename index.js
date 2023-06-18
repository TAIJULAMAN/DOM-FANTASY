// header part starting.................................

const headerSectionHeading = document.getElementById('heading');
headerSectionHeading.style.color='red';
headerSectionHeading.style.textAlign='center';


// section-1..................................

const blogOne = document.getElementById('section-1');
blogOne.style.backgroundColor=('green');
blogOne.style.border=('5px solid red');
blogOne.style.borderRadius=('5px');
blogOne.style.color=('white');
blogOne.style.marginBottom='20px';
// blogOne.style.alignItems='center';

// section-1 heading...............................

const headingOne = document.getElementById('h-1');
headingOne.innerText='ABOUT BANGLADESH';
headingOne.style.textAlign='center';

// section-1 paragraph.........................

const pOneText = document.getElementById('p-1');
pOneText.innerText='Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.';
pOneText.style.padding='10px';
pOneText.style.margin='10px';

// // section-1 button1

const btns = document.getElementsByClassName('btn');
for( const btn of btns){
    btn.style.padding='5px 10px';
    btn.style.backgroundColor='red';
    btn.style.border='0px';
    btn.style.borderRadius='5px';
    btn.style.marginLeft='450px';
    btn.style.marginBottom='30px';
    btn.style.marginTop='30px';
};


// section-2...................................

const blogTwo = document.getElementById('section-2');
blogTwo.style.backgroundColor=('blue');
blogTwo.style.borderRadius=('5px');
blogTwo.style.border=('5px solid red');
blogTwo.style.color=('white');
blogTwo.style.marginBottom=('20px');

// section-2 heading...................................

const headingTwo = document.getElementById('h-2');
headingTwo.innerText='BANGLADESH HISTORY';
headingTwo.style.textAlign='center';

// section-2 paragraph..............................

const pTwoText = document.getElementById('p-2');
pTwoText.innerText='Bangladesh forms the sovereign part of the historic and ethnolinguistic region of Bengal, which was divided during the Partition of India in 1947.[17] Ancient Bengal was an important cultural centre in the Indian subcontinent as the home of the states of Vanga, Pundra, Gangaridai, Gauda, Samatata, and Harikela. The Mauryan, Gupta, Pala, Sena, Chandra and Deva dynasties were the last pre-Islamic rulers of Bengal. The Muslim conquest of Bengal began in 1204 when Bakhtiar Khalji overran northern Bengal and invaded Tibet. Becoming part of the Delhi Sultanate, three city-states emerged in the 14th century with much of eastern Bengal being ruled from Sonargaon. Sufi missionary leaders like Sultan Balkhi, Shah Jalal and Shah Makhdum Rupos helped in spreading Muslim rule. The region was unified into an independent, unitary Bengal Sultanate.';
pTwoText.style.padding='10px';
pTwoText.style.margin='10px';

// section-3..........................   

const blogThree = document.getElementById('section-3');
blogThree.style.backgroundColor=('Turquoise');
blogThree.style.border=('5px solid red');
blogThree.style.borderRadius=('5px');
blogThree.style.color=('white');

// section-3 heading ..........................

const headingThree = document.getElementById('h-3');
headingThree.innerText=' ISLAMIC BENGAL';
headingThree.style.textAlign='center';

// section-3 paragraph.....................

const pThreeText = document.getElementById('p-3');
pThreeText.innerText='The early history of Islam in Bengal is divided into two phases. The first phase is the period of maritime trade with Arabia and Persia between the 8th and 12th centuries. The second phase covers centuries of Muslim dynastic rule after the Islamic conquest of Bengal. The writings of Al-Idrisi, Ibn Hawqal, Al-Masudi, Ibn Khordadbeh and Sulaiman record the maritime links between Arabia, Persia and Bengal.[61] Muslim trade with Bengal flourished after the fall of the Sasanian Empire and the Arab takeover of Persian trade routes. Much of this trade occurred with southeastern Bengal in areas east of the Meghna River.';
pThreeText.style.padding='10px';
pThreeText.style.margin='10px';

//historical places.........................................................................

// calling historical places..

const historicalPlacesSection = document.getElementById('historical-places');
historicalPlacesSection.style.border='5px solid red';
historicalPlacesSection.style.backgroundColor='Lavender';
historicalPlacesSection.style.marginTop='10px';
historicalPlacesSection.style.borderRadius='5px';

// hisrorical-places-heading..................

const historicalPlacesHeading = document.getElementById('historical-places-heading');
historicalPlacesHeading.innerText='HISTORICAL PLACES OF BANGLADESH';
historicalPlacesHeading.style.color='red';
historicalPlacesHeading.style.textAlign='center';

// // hisrorical-places-paragraph................

const historicalPlacesParagraph =document.getElementById ('historical-places-detail'); 
historicalPlacesParagraph.innerText='Historical places are physical sites or landmarks that have significant historical, cultural, or architectural value. These places provide a glimpse into the past, allowing us to learn about different civilizations, events, and aspects of human history. They often hold great importance in terms of heritage, tourism, and education.Historical places can include:';
historicalPlacesParagraph.style.color='black';
historicalPlacesParagraph.style.margin='10px';
historicalPlacesParagraph.style.padding='10px';

// historical places ul making with all li child.............

// calling parent
const ul =document.getElementById('places');

// making child..1
const li1 =document.createElement('li');
li1.innerText='Lalbagh Fort, Dhaka - A 17th-century Mughal fort complex with mosques, mausoleums, and a museum.';
// child..1 add in parent
ul.appendChild(li1);

// // making child..2
const li2=document.createElement('li');
li2.innerText='Ahsan Manzil, Dhaka - Also known as the Pink Palace, it was the residence of the Nawab of Dhaka and is now a museum.';
// child..2 add in parent
ul.appendChild(li2);


// // making child..3
const li3=document.createElement('li');
li3.innerText='Sonargaon, Narayanganj - An ancient capital of Bengal with historical sites like Panam City and the Folk Arts and Crafts Museum.an Manzil, Dhaka - Also known as the Pink Palace, it was the residence of the Nawab of Dhaka and is now a museum.';
// child..2 add in parent
ul.appendChild(li3);


// // making child..4
const li4=document.createElement('li');
li4.innerText='Paharpur Buddhist Monastery, Naogaon - A UNESCO World Heritage Site, it is one of the largest Buddhist monasteries in South Asia.';
// child..2 add in parent
ul.appendChild(li4);


// // making child..5
const li5=document.createElement('li');
li5.innerText='Mahasthangarh, Bogra - An ancient archaeological site with ruins dating back to the 3rd century BC, including the ancient capital of Pundranagara.';
// child..2 add in parent
ul.appendChild(li5);


// // making child..6
const li6=document.createElement('li');
li6.innerText='Shat Gombuj Mosque, Bagerhat - Also known as the Sixty Dome Mosque, it is a UNESCO World Heritage Site and an impressive example of medieval Islamic architecture.';
// child..2 add in parent
ul.appendChild(li6);


// making child..7
const li7=document.createElement('li');
li7.innerText='Kantaji Temple, Dinajpur - A terracotta Hindu temple from the late 18th century, known for its intricate carvings.';
// child..2 add in parent
ul.appendChild(li7);


// making child..8
const li8=document.createElement('li');
li8.innerText='Mainamati Ruins, Comilla - An archaeological site with Buddhist ruins, including ancient monasteries, stupas, and sculptures.';
// child..2 add in parent
ul.appendChild(li8);

// button colour change effect by clicking................................

// first button click effect..

document.getElementById('first').addEventListener('click', makePink() );
function makepink()
{
    blogOne.style.backgroundColor ='pink';
};

// second button click effect..

document.getElementById('second').addEventListener('click', makeyellow() );
function makeyellow()
{
    blogTwo.style.backgroundColor ='yellow';
};

// third button click effect..

document.getElementById('third').addEventListener('click', makeMaroon() );
function makeMaroon()
{
    blogThree.style.backgroundColor ='maroon';
};

// third button click effect..

document.getElementById('fourth').addEventListener('click', makeLavender() );
function makeLavender()
{
    historicalPlacesSection.style.backgroundColor ='Lavender';
};
