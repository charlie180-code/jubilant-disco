// structure de contrôle
// liste des amis d'un utilisateur provenant de la base de données
// variable tableau
var friends = ['Diori Hamani', 'Ibrahim Baaré Mainassara', 'Abdourahamane Tiani']

var posts = [
    ['post1', 'comments1', 87744],
    ['post2', 'comments2', 1000],
    ['post3', 'comments3', 500]
]

for (let i = 0; i < posts.length; i++) {
    console.log(
        posts[i][2]
    )
}

const Employee = {
    nom: 'Bader Salissou Saâdou',
    wage: '500 $',
    situation: 'single'
}

console.log(Employee.situation)