// const canPlaceFlowers = (flowerbed: number[], n : number) : boolean => {
// //  Can place flowers

// // You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// // Giving an integer array flowerbed containing 0's and 1's where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers 
// // can be planted in flowerbed without violating the no adjacent flowers rule and false otherwise. 

// // constraints 

// // 1 <= flowerbed.length <= 2*10^4

// // flowerbed[i] is 0 or 1

// // There are no two adjacent flowers in flowerbed

// // 0 <= n <= flowerbed.length

//     let counter = 0

//     for(let i=0; i<flowerbed.length-1 ;i++) {
//         if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1]===0 ) {
//             counter++
//             i++
//         }
//         if  (flowerbed[i]==0 && i==0 && flowerbed[i+1]==0) counter ++;
//         if (flowerbed[i]==0 && i==flowerbed.length-1 && flowerbed[i-1]==0) counter++;

//     }

//     return n <= counter;
// }

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let counter = 0
    
        // for(let i=0; i<flowerbed.length-1 ; i++) {
        //     if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1]===0 ) {
        //         counter++
        //         i++
        //     }
        //     if  (flowerbed[i]===0 && i===0 && flowerbed[i+1]===0) counter ++;
        //     if (flowerbed[i]==0 && i==flowerbed.length-1 && flowerbed[i-1]==0) counter++;
    
        // }
    
        flowerbed.forEach((plot, index) => {
            console.log("Flower:",plot,"At:",index)
        });

        return n <= counter;
    }

    // test
    //  [1,0,0,0,1,0,0]
    //  2