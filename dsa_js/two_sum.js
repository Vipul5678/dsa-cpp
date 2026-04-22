/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));   // [0,1]
console.log(twoSum([3, 2, 4], 6));        // [1,2]
console.log(twoSum([3, 3], 6));           // [0,1]