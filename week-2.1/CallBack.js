function HarshaAsyncFunction(callback){
    callback("Hi there!")
}
async function main() {
    HarshaAsyncFunction(function(value){
        console.log(value);

    })
}
main();