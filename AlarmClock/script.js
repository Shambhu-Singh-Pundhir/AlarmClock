const hours = document.querySelector("#hours");
            const mins = document.querySelector("#minutes");
            const secs = document.querySelector("#seconds");
            const setTime = document.querySelector("#setTime");
            const stopButton = document.querySelector("#stopAlarm");
            const audio = new Audio('./AlarmClock/Flute.mp3');
            const alarmNotice = document.getElementById('alarmNotice')
            let alarmTime = [];

            function alarmSet() {
                const timeArr = setTime.value.split(":");
                
                alarmTime.push({hour:timeArr[0],min:timeArr[1]}); 
                alarmNotice.innerHTML += `<div class="alarm-single"><i>🔔</i><span>${setTime.value}</span></div>`;
                
                console.log(alarmTime)
            }

            function alarmStop() {
                audio.pause();
                audio.currentTime = 0;
                stopButton.style.visibility = "hidden"; 
                let d = new Date()
                let dateString= d.getHours() +":"+d.getMinutes()
                console.log(dateString)
                let elements = [...alarmNotice.getElementsByClassName("alarm-single")]
                elements.forEach(element=>{
                    if(element.children[1].textContent == dateString){
                        element.parentNode.removeChild(element)
                    }
                })



            }

            
            function Time() {
                
                const date = new Date();
                const curHours = date.getHours();
                const curMins = date.getMinutes();
                const curSecs = date.getSeconds();
                curSecs < 10 ? secs.innerHTML = `0${curSecs}` : secs.innerHTML = curSecs;
                curMins < 10 ? mins.innerHTML = `0${curMins}` : mins.innerHTML = curMins;
                curHours < 10 ? hours.innerHTML = `0${curHours}` : hours.innerHTML = curHours;
                for(let i=0; i<alarmTime.length;i++){

                    if(alarmTime[i].hour == curHours && alarmTime[i].min == curMins && curSecs < 1.5) {
                        audio.play();
                        stopButton.style.visibility = "visible";  
                       alarmTime.splice(i,1);
                       i--;
                      
                       console.log(alarmTime)
                    }
                }
                }

            setInterval(Time, 1000);

            Time();