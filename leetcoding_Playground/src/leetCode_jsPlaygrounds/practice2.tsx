export const practice2 = (nums: number[], val: number): number =>{
    
    let i:number = nums.indexOf(val)
    let k:number = i;

    while (i<nums.length) {
        
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        
        i++;
    }

    return k
}