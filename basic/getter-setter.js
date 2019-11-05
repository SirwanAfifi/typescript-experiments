let person = {
    name: "Sirwan",
    age: Math.floor(Math.abs(new Date() - new Date(1989, 07, 29)) / 31536000000),
    _skills: [],

    set skills(skill) {
        this._skills.push(skill);
    },

    get skills() {
        return this._skills;
    }
};

console.group(`${person.name}`);

person.skills = [..."C#", "Java"];



console.log(person.skills);

console.groupEnd();