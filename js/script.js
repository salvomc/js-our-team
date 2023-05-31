
const teamArray = 
[
    {
        "name":"Wayne Barnett",
        "role":"Founder & CEO",
        "image":"wayne-barnett-founder-ceo.jpg",
    },

    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "image":"angela-caroll-chief-editor.jpg",
    },

    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "image":"walter-gordon-office-manager.jpg",
    },

    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "image":"angela-lopez-social-media-manager.jpg",
    },

    {
        "name":"Scott Estrada",
        "role":"Developer",
        "image":"scott-estrada-developer.jpg",
    },
    
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "image":"barbara-ramos-graphic-designer.jpg",
    }
]

console.log(teamArray);

const cardsContainer = document.getElementById('cards-col');
for(let i=0; i<teamArray.length;i++)
{
    let teamMember = teamArray[i];
    console.log(teamMember);

    let card =  `
                    <div class="card">
                        <h3>${teamMember.image}</h3>
                        <h3>${teamMember.name}</h3>
                        <p>${teamMember.role}</p>
                        </div>
                    </div>
                `
    cardsContainer.innerHTML += card;
}