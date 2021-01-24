var turn = 1
    function Clicked(id){
        const ID = document.getElementById(id)
        const xTURN = document.getElementById('xturn')
        const oTURN = document.getElementById('oturn')
        turn++
        if(turn % 2 == 1) {
            ID.innerText = 'O'
            xTURN.classList.remove('xAtFirst')
            xTURN.classList.add('xTurn')
            oTURN.classList.remove('oTurn')
            oTURN.classList.add('oAtFirst')
            ID.classList.remove('none')
            ID.classList.add('O')
            ID.onclick=false
        }
        else {
            ID.innerText = 'X'
            oTURN.classList.remove('oAtFirst')
            oTURN.classList.add('oTurn')
            xTURN.classList.remove('xTurn')
            xTURN.classList.add('xAtFirst')
            ID.classList.remove('none')
            ID.classList.add('X')
            ID.onclick=false
        }
        CheckOut(id)
    }
    
    function CheckOut(id){
        var newID = parseInt(id)
        var win = document.getElementById(id).className
        const id1 = document.getElementById('1').className
        const id2 = document.getElementById('2').className
        const id3 = document.getElementById('3').className
        const id4 = document.getElementById('4').className
        const id5 = document.getElementById('5').className
        const id6 = document.getElementById('6').className
        const id7 = document.getElementById('7').className
        const id8 = document.getElementById('8').className
        const id9 = document.getElementById('9').className
        //1
        if(newID===1){
            if(id1===id2&&id1===id3) Winner(id)
            else if(id1===id4&&id1===id7) Winner(id)
            else if(id1===id5&&id1===id9) Winner(id)
        }
        //2
        else if(newID===2){
            if(id1===id2&&id1===id3) Winner(id)
            else if(id2===id5&&id2===id8) Winner(id)
        }
        //3
        else if(newID===3){
            if(id1===id2&&id1===id3) Winner(id)
            else if(id3===id6&&id3===id9) Winner(id)
            else if(id3===id5&&id3===id7) Winner(id)
        }
        //4
        else if(newID===4){
            if(id4===id5&&id4===id6) Winner(id)
            else if(id4===id1&&id4===id7) Winner(id)
        }
        //5
        else if(newID===5){
            if(id5===id2&&id5===id8) Winner(id)
            else if(id5===id4&&id5===id6) Winner(id)
            else if(id5===id3&&id5===id7) Winner(id)
            else if(id5===id1&&id5===id9) Winner(id)
        }
        //6
        else if(newID===6){
            if(id6===id5&&id6===id4) Winner(id)
            else if(id6===id3&&id6===id9) Winner(id)
        }
        //7
        else if(newID===7){
            if(id7===id4&&id7===id1) Winner(id)
            else if(id7===id8&&id7===id9) Winner(id)
            else if(id7===id5&&id7===id3) Winner(id)
        }
        //8
        else if(newID===8){
            if(id8===id2&&id8===id5) Winner(id)
            else if(id8===id7&&id8===id9) Winner(id)
        }
        //9
        else if(newID===9){
            if(id9===id8&&id9===id7) Winner(id)
            else if(id9===id6&&id9===id3) Winner(id)
            else if(id9===id5&&id9===id1) Winner(id)
        }
    }

    function Winner(id){
        document.getElementById('result').innerHTML = 'Player ' + document.getElementById(id).className + ' Won !'
        document.getElementById('result').classList.remove('result')
        document.getElementById('result').classList.add('resultShowed')
        for(var i = 1;i<=9;i++){
            document.getElementsByTagName('td')[i-1].onclick = false
        }
    }