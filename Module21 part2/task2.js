// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findFriendBySmallName(name){
    let smallName = name[0];
    for(const nam of name){
        if(nam.length < smallName.length){
            smallName = nam;
        }
    }
    return smallName;
}
const result = findFriendBySmallName(heights2);
console.log(result);