/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_COLLECTION_POTION = new Array();
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (itemName,itemType,itemDescription,itemEffect) {
    let potion = {
        "name" : itemName,
        "type" : (itemEffect<0 || itemType==0) ? "poison": "potion",
        "desc" : itemDescription,
        "effect": (itemEffect<0)? itemEffect*(-1): itemEffect
    }
    NFT_COLLECTION_POTION.push(potion);
    return potion;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("==== COLLECTION ====")
    for(var i=0; i<NFT_COLLECTION_POTION.length;i++){
        Object.keys(NFT_COLLECTION_POTION[i]).forEach((prop)=> console.log(prop + " : " + NFT_COLLECTION_POTION[i][prop]));
    }
    console.log("==== End of List ====")
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Collection count: " + NFT_COLLECTION_POTION.length);
}

// call your functions below this line
console.log("Minted:" + mintNFT("HP Potion",1,"Instantly Heal 50 HP.",50).name);
console.log("Minted:" + mintNFT("Explosion Potion",1,"Damages for 1 instance.",-50).name);
console.log("Minted:" + mintNFT("Slow Poison",0,"Damages for 1 instance.",-30).name);
listNFTs();
getTotalSupply();