// Select three different pieces of data 
let starName = "Mars";
let starType = "Planet";
const discoverYear = 1609;

// Develop a function called populateHeader. This function should target the celestial-name element in the HTML and set its text content to the name of your celestial body. 
function populateHeader(){
    const celestialNameNode = document.querySelector("#celestial-name");
    console.log(celestialNameNode);
    let isFlag = false;
    // use try block to make sure the process can be ran properly
    try{
        celestialNameNode.textContent = starName;
    }catch (error){
        console.error(error);
        isFlag = true;
    }finally{
        if(isFlag){
            console.log('an error happened');
        }else{
            console.log('the name is added successfully')
        }
    }
    
}

// Implementing Event Listeners

const hiddenFact = "Mars has the tallest volcano in the solar system called Olympus Mons."

document.querySelector("#reveal-fact").addEventListener("click", () => {
    console.log("Button clicked!"); 
    let isFlag = false;
    const spaceFactNode = document.querySelector("#space-fact")
    try{
        spaceFactNode.textContent = hiddenFact;
        spaceFactNode.style.display = "block"
    }catch (error){
        console.error(error)
        isFlag = true;
    }finally{
        if(isFlag){
            console.log('an error happened');
        }else{
            console.log('the fact is visible')
        }
    }
    
})


// Manipulating the DOM
let isFlag = false;
const information = "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots"


const newParagraph = document.createElement('p');
newParagraph.textContent = information;

const celestialInfoNode = document.querySelector("#celestial-info");
console.log(celestialInfoNode);
try{
    celestialInfoNode.appendChild(newParagraph);
}catch(error){
    console.error(error);
    isFlag = true;
}finally{
    if(isFlag){
        console.log('an error happened');
    }else{
        console.log('a new paragraph is created')
    }
}

// Using Arrow Functions

const convertLightYearsToMiles = (lightYears) => {
    const milesPerLightYear = 5.879e12;
    const miles = milesPerLightYear * lightYears;
    return miles;
}
console.log(convertLightYearsToMiles(0.0000238)); // 139920200


//Looping Through Data

const fact01 = "Mars is the fourth planet from the Sun";
const fact02 = "The surface of Mars is orange-red because it is covered in iron(III) oxide dust"
const fact03 = "Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing"
const fact04 = "Mars is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi)"
const fact05 = "Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos."

let i = 0;
function addNewList(){
    let factArray = [fact01, fact02, fact03, fact04, fact05];
    const newElementUl = document.createElement('ul');
    
    for(i=0; i<5; i++){
        const newElementLi = document.createElement('li');
    
        newElementLi.textContent = factArray[i];
        newElementUl.appendChild(newElementLi);
    }
    celestialInfoNode.appendChild(newElementUl)
    
}

window.onload = function(){
    addNewList();
   populateHeader();
}

// const celestialInfoNode = document.querySelector("#celestial-info");
// const spaceFactNode = document.querySelector("#space-fact"); 

