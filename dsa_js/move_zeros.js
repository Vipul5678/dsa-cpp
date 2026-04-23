/**
 * Move Zeroes - In-place
 * @param {number[]} nums
 * @return {void}
 */
function moveZeroes(nums) {
    let j = 0;

    // Step 1: non-zero ko aage lao
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    // Step 2: baaki positions me 0 fill
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
}

// ✅ Test
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1,3,12,0,0]