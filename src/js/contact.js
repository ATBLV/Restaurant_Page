
function contact() {
    removeAllChildNodes(container);

    let hours = `
    <div>
        <h3>OPENING HOURS</h3>
            <div>
                <ul>
                    <li >Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7am - 3pm</li>
                    <li>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7am - 3pm</li>
                    <li>Wednesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7am - 3pm</li>
                    <li>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7am - 3pm</li>
                    <li>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7am - 3pm</li>
                    <li>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am - 3pm</li>
                    <li>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am - 3pm</li>
                </ul>
            </div>
    </div>
        `

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('animate');
    contactDetails.classList.add('contact');
    const contactHeader = document.createElement('h1');
    contactHeader.innerHTML = "Contact us";

    contactDetails.append(contactHeader);
    contactDetails.innerHTML = hours;
    container.append(contactDetails);
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default contact;