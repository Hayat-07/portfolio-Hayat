const skills=[
    {
        skill:"HTML",
        percent:70,

    }
    ,{
       
        skill:"CSS",
        percent:70,
    }
    ,{
       
        skill:"SCSS",
        percent:80,
    }
    ,{
       
        skill:"Tailwind CSS",
        percent:65,
    }
    ,{
        skill:"Javascript",
        percent:75,

    }
    ,{
       
        skill:"Typescript",
        percent:65,
    }
    ,{
        skill:"React JS",
        percent:90,

    }
    ,{
       
        skill:"Node JS",
        percent:70,
    }
    ,{
       
        skill:"Express JS",
        percent:70,
    }
    ,{
       
        skill:"MongoDB",
        percent:75,
    }
   
];




let skillDiv= document.getElementById("skillDiv");
let innerBar= document.getElementById("innerBar");
console.log(skillDiv);
skills.map((x,i)=>{
    let newDiv= document.createElement("div")
    let newSkill=`
        <div class="skillBarContainer">
            <h3>${x.skill}</h3>
            <div class="skillBar">
                <div class="innerBar" style="width: ${x.percent}%">
                    <div class="percentBox" >
                        <h6>${x.percent}</h6>
                    </div>
                </div>
            </div>
        </div>
    `
    newDiv.innerHTML=newSkill;

    skillDiv.appendChild(newDiv);

})















