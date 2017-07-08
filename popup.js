/**
 * Created by anmol on 6/7/17.
 */

let input;
let inputArr=[];
let btn;
let ObjArr=[];
let url1="http://localhost/YouTube/parse.php?q=";
$(function(){

    input=$('#amount');
    btn=$('#spendAmount')
    btn.click(function(){
         inputArr=input.val().split('\n');
        console.log(inputArr);
        //getdata(inputArr.join(','));

        getLoop()

    });

});


function getLoop(){
    for(i in inputArr){
        getdata(inputArr[i]);
    }


    setTimeout(after1,3000)

}

function getdata(id){

    $.ajax({
        type:'GET',
        url:url1+id,
        contentType: 'application/json',
        jsonp:false,
        success: function(json) {

            let jsonParse=JSON.parse(json)
            console.log(JSON.parse(json))
            console.log(jsonParse.id)

            ObjArr.push(new objc(id,jsonParse.id));

            console.log(ObjArr);

        },
        error: function(e) {
            console.log(e.message);
        }
    })
}

let str=' ';

function after1(){

    for(i in ObjArr){
        str=str+ObjArr[i].id+","
    }

    str=str.substr(0,str.length-1)


    console.log(str);

    youtube();

}

function youtube(){

    let url="http://www.youtube.com/watch_videos?video_ids=";

    console.log(url)


    var createData={
        "url":url+str,
        "type":"popup",
        "top":5,
        "left":5,
        "width":Math.round(screen.availWidth/2),
        "height":screen.availHeight/2
    }


    chrome.windows.create(createData,function(){})

}


function objc(name,id){
    this.name=name;
    this.id=id;
}