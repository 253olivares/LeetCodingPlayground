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
        
            // flowerbed.forEach((plot, index) => {
            //     console.log("Flower:",plot,"At:",index)
            //     let plotBehind = flowerbed[index-1];
            //     let plotInfront = flowerbed[index+1];
            //     if (plot === 0 && plotBehind === 0 || null && plotInfront === 0 || null) {
            //         counter ++;
            //         console.log(plot === 0 && plotBehind === 0 || null && plotInfront === 0 || null);
            //     }

                
            // });

            console.log(flowerbed.length)

            for(let i = 0; i< flowerbed.length; i++){
                console.log("Flower:",flowerbed[i],"At:",i)
                let previousBed = flowerbed[i-1];
                console.log("previous:",previousBed);
                let nextBed = flowerbed[i+1];
                console.log("next:",nextBed);
                if(flowerbed[i]===0 && (previousBed === 0 || previousBed === undefined )&& (nextBed === 0 || nextBed === undefined) ) {
                    console.log(previousBed)
                    console.log(i)
                    console.log(nextBed)
                    counter++;
                    i++;
                }

            }

            return n<=counter;
    }

    // test
    //  [1,0,0,0,1,0,0]
    //  2