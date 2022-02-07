(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded',function(){
    let ctMaxH = 30,
        ctMaxVM = 30,
        ctMaxVR = 30,
        ctCurH = ctMaxH,
        ctCurVM = ctMaxVM,
        ctCurVR = ctMaxVR,
        intervalH = 1000,
        intervalVM = 2000,
        intervalVR = 3000,
        threshold = ctMaxH * 0.6,
        points = 2,
        widther = 4,
        alive =		true,
        dangerH = false,
        dangerVM = false,
        dangerVR = false,
        getMtrH = document.getElementById('mtrH'),
        getMtrVM = document.getElementById('mtrVM'),
        getMtrVR = document.getElementById('mtrVR'),
        getStyleH = getMtrH.style,
        getStyleVM = getMtrVM.style,
        getStyleVR = getMtrVR.style,
        bdrStart = "1px solid ",
        clrDfltH = "green",  
        clrDfltVM = "orange",  
        clrDfltVR = "blue",  
        clrCurH = clrDfltH,
        clrCurVM = clrDfltVM,
        clrCurVR = clrDfltVR,
        clrWarn = "#FF0040", 
        getBtnVM = document.getElementById('btnVM'),
        getBtnVR = document.getElementById('btnVR'),
        getEyes = document.getElementById('petEyes'),
        eyesOK =   "o....o",
        eyesSick = "@....@",
        eyesDead = "x....x",
        getStyleFb = 	document.getElementById('feedback').style;
        getStyleFb.display = 'none';
        meterWidth();
        setInterval(function(){
            if(alive == true){
                    loseVM();
                    checkDangerVM();
            }
        },intervalVM);
        setInterval(function(){
            if(alive == true){
                    loseVR();
                    checkDangerVR();
            }
        },intervalVR);
        setInterval(function(){
            meterWidth();
            checkDangerH();
            if(dangerH == true)
                {
                    warnH();
                    loseH();  
                }
            else
                {
                    okH();
                }
        
            if(dangerVM == true)
                {
                    warnVM();      
                }
            else
                {
                    okVM();
                }
            if(dangerVR == true)
                {
                    warnVR();      
                }
            else
                {
                    okVR();
                }
if(ctCurH < 0){
    alive = false;
    }
    if(alive == false)
    {
        ending();
        }
        },intervalH);
        getBtnVM.addEventListener("click",function(){
            if(alive == true){
                if(ctCurVM + points <= ctMaxVM)
                    {
                        ctCurVM = ctCurVM + points;
                    
                        if(ctCurH + points < ctMaxH)
                            {
                                ctCurH = ctCurH + points;
                            }
                    
                        meterWidth();
                        checkDangerH();
                        checkDangerVM();
                        checkDangerVR();
                    
                        if(dangerH == false)
                        {okH();}
                        if(dangerVM == false)
                        {okVM();}
                        if(dangerVR == false)
                        {okVR();}
                }
            }
        });
        
getBtnVR.addEventListener("click",function(){
        if(alive == true){
        if(ctCurVR + points <= ctMaxVR)
            {
                ctCurVR = ctCurVR + points;
                if(ctCurH + points < ctMaxH)
                    {
                        ctCurH = ctCurH + points;
                    }
                meterWidth();
                checkDangerH();
                checkDangerVM();
                checkDangerVR();
                if(dangerH == false)
                    {okH();}
                if(dangerVM == false)
                    {okVM();}
                if(dangerVR == false)
                    {okVR();}
            }
        }
    });
function meterWidth(){
            getStyleH.width = ctCurH * widther + "px";	 
            getStyleVM.width = ctCurVM * widther + "px";	 
            getStyleVR.width = ctCurVR * widther + "px";	 
        }
function checkDangerVM(){
            if(ctCurVM < threshold)
                {
                    dangerVM = true;
                }
            else
                {
                    dangerVM = false;	
                }
        }
function checkDangerVR(){
    if(ctCurVR < threshold)
        {
            dangerVR = true;
        }
        else
        {
            dangerVR = false;
        }
    }
    function checkDangerH(){
        if((ctCurVM < threshold || ctCurVR < threshold)  && alive == true)
            {
                dangerH = true;
            }
        else
            {
                dangerH = false;
            }
        }
    function loseVM(){
        ctCurVM = ctCurVM - points;
        }
    function loseVR(){
        ctCurVR = ctCurVR - points;
    }
    function loseH(){
        ctCurH = ctCurH - points;        
    }
    function warnVM(){
        getEyes.innerHTML = eyesSick;
        getStyleVM.border = bdrStart + clrWarn;
    }
    function warnVR(){
        getEyes.innerHTML = eyesSick;
        getStyleVR.border = bdrStart + clrWarn;
    }
    function warnH(){
        getEyes.innerHTML = eyesSick;
        getStyleH.border = bdrStart + clrWarn;
    }
    function okVM(){
        getStyleVM.border = bdrStart + clrDfltVM;
    }
    function okVR(){
        getStyleVR.border = bdrStart + clrDfltVR;
    }
    function okH(){
        getEyes.innerHTML = eyesOK;
        getStyleH.border = bdrStart + clrDfltH;
    }
    function ending(){
        getEyes.innerHTML = eyesDead;
        getStyleFb.display = 'block';
    }
    
    });
    
})();
