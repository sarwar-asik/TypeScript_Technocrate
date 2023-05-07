"use strict";
const crush1 = {
    name: "Tinisa",
    age: 22,
    profession: "Developer",
    address: "Dhaka"
};
const crush2 = {
    name: "Pinia",
    // age:22,
    profession: "actress",
    address: "chtg"
};
const isCrushMarried = false;
const CourseName = "Next Level web Development";
const calculate = (nums1, nums2, operation) => {
    return operation(nums1, nums2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
