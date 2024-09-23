let nums1 = [1,2,3,0,0,0]; 
let m = 3;
let nums2 = [2,5,6];
let n = 3;

// let nums1 = [1]; 
// let m = 1;
// let nums2 = [];
// let n = 0;

// let nums1 = [0]; 
// let m = 0;
// let nums2 = [1];
// let n = 1;


function merge(nums1, m, nums2, n) {

    nums1 = nums1.map((x,index) => {
        if(x===0){
            if(m === 0) return nums2[index];
            return nums2[index- n];
        }
        return x;
    })

    nums1.forEach((x, index) => {
        if(nums1[index+1]){
            if(x > nums1[index+1]){
                let largervalue = x;
                let smallervalue = nums1[index+1];
    
                nums1[index] = smallervalue;
                nums1[index+1]= largervalue;
            }
        }
    });


    console.log(`
    nums1: ${nums1}
    m: ${m}
    nums2: ${nums2}
    n: ${n}
    `)


};

merge(nums1,m,nums2,n);