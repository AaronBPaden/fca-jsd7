class Person {
    name;
    dob;
    hobbies;
    constructor(name, dob, hobbies) {
        this.name = name;
        this.dob = new Date(dob);
        this.hobbies = hobbies;
    }
    get age() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let birthYear = this.dob.getFullYear();
        let birthMonth = this.dob.getMonth();
        let age = year - birthYear;
        if (birthMonth > month) {
            age--
        } else if (birthMonth === month) {
            let birthDay = this.dob.getDate();
            let currentDay = date.getDate();
            if (birthDay > currentDay) {
                age--;
            }
        }
        return age;
    }
    hobbiesToStr() {
        let str = ""
        this.hobbies.slice(0, this.hobbies.length-1).forEach(e => str = str.concat(`${e}, `));
        str = str.concat(`and ${this.hobbies.at(-1)}`);
        return str;
    }
}

let aaron = new Person('Aaron', 'Jul 28, 1989', ['cooking', 'bird watching', 'reading']);
let root = document.getElementById('root');
root.innerHTML = `<h1>${aaron.name}</h1>`;
root.insertAdjacentHTML('afterend', `<p>Hi! I'm ${aaron.name}. I'm ${aaron.age}. I enjoy ${aaron.hobbiesToStr()}.</p>`);
