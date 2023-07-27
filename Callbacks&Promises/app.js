// Callback hell

// suppose if you want to upload a high quality image to the server (upload profile picture at fb)
// So first file is downloaded, then it get compressed, then it will get upload

function downloadFile(url, downloaded){
    console.log("Starting the download from this " + url);
    // then it will take some time to download
    setTimeout(()=>{
        const path = url.split("/").pop();
        downloaded(path);
    }, 3000);
}

function compressFile(path, compressed){
    console.log("Starting the file compression for " + path);
    setTimeout(()=>{
        const compressedPath = path.split(".")[0]+".zip";
        compressed(compressedPath);
    }, 2000)
}

function uploadFile(compressedPath, uploaded){
    console.log("Starting the file upload from "+compressedPath);
    setTimeout(()=>{
        const uploadedPath = "http://localsystem/"+compressedPath;
        uploaded(uploadedPath);
    }, 3000)
}


downloadFile("https://www.facebook.com/profile.jpg", function(path){
    console.log("FILE DOWNLOAD SUCCESSFULLY as "+path);
    compressFile(path, function(compressedPath){
        console.log("File Compressed Successfully as "+compressedPath);
        uploadFile(compressedPath, function(uploadedPath){
            console.log("File uploaded successfully at "+uploadedPath);
            console.log("Everything done");
        })
    })
})


// So Above you can see that, nested functions are there (this is known as callback hell).... so this is not a good practice to write callback inside callback
// and doing same thing again and again... It is something that is not a right practice. This will make your code
// more complicated.

// So instead of that try to do above task linearly in place of doing it in the nested way.
// So here comes the concept of PROMISES