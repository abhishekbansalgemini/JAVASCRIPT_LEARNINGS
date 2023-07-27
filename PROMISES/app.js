// const x = new Promise(function (resolve, reject) {
//   let randomNumber = Math.random();
//   console.log(randomNumber);
//   if (randomNumber < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// x.then(function () {
//   console.log("Inside Resolved");
// }).catch(function () {
//   console.log("Inside Rejected");
// });


// Promise states --> fulfilled, reject, pending

// let see, how can we solve the problem of callback hell using promises with same example taken in callback hell

function downloadFile(url) {

    return new Promise((resolve, reject) => {


        if (!url.startsWith('http')) {
            throw new Error("Invalid URL!!");
        }
        
        console.log(`Starting the download from ${url}`);
        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);

    })
}


function compressFile(path) {


    return new Promise((resolve,reject) => {
        
        console.log(`Starting the file compression for ${path}`);
        setTimeout(() => {
            const compressedPath = path.split('.')[0]+'.zip';
            resolve(compressedPath);
        },2000)
    })

}

function uploadFile(compressedPath) {
    

    return new Promise((resolve, reject) => {
        
        console.log(`Starting the file upload from ${compressedPath}`);

        setTimeout(() => {
            const uploadedPath = 'http://localsytem/' + compressedPath;
            resolve(uploadedPath);
        }, 3000);
    })
}

downloadFile('http://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log('Everything done');
    })
    .catch((err) => {
        console.log("Something went wrong");
        // console.log(err);
        console.log(err.message);
    });