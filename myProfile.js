//Who you are
//what you like
//where you are located

window.addEventListener('DOMContentLoaded', () => {





    const nameHeader = document.createElement("h1");

    nameHeader.setAttribute("id", "name");
    //nameHeader.id='myname'

    nameHeader.setAttribute("class", "my-name");
    nameHeader.classList.add('anything')
    nameHeader.classList.remove('anything')

    // const h1Text = document.createTextNode("Mark Zuckerberg");
    // nameHeader.appendChild(h1Text);

    nameHeader.innerHTML = 'Mark Zuckerberg'


    document.body.appendChild(nameHeader)


    const detailList = document.createElement('ul')
    detailList.setAttribute('id', 'ZuckFacts')
    detailList.setAttribute('class', 'CEOFacts')
    detailList.innerHTML = 'Details about me'
    document.body.appendChild(detailList)

    ////////////////////////

    const detailsArr = [
        "<li>I like to drink iced lattes.</li>",
        "<li>I smoke meats.</li>",
        "<li>I consume your data.</li>",
        "<li>You can't block me from Facebook.</li>",
        "<li>They made a movie about me.</li>"
    ];
    const liString = detailsArr.join(" ");

    detailList.innerHTML = liString;



    let myDetail = document.querySelectorAll('li')

    myDetail.forEach((li) => {

        li.className = 'factItem';
    })

    const Timezone = document.createElement('span')
    Timezone.setAttribute('class', 'clock')
    Timezone.innerHTML = 'I live in Palo Alto'
    const getTime = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        let titleText = `${hours}:${minutes}:${seconds}`
        return titleText;
    }
    
    setInterval(getTime, 1000)
    Timezone.append(getTime())
    detailList.appendChild(Timezone)
    document.body.appendChild(Timezone)



    


})