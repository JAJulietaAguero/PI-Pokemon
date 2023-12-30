const validation = (form) => {
    let errors = {};
     const regex = new RegExp(/^[^\d\s]+$/u);
     const regex2 = new RegExp(/^\d+$/);

    if (!form.name) {
        errors.name = "Your Pokemon must have a name"
    };

    if (!regex.test(form.name)) {
        errors.name = "The name must not have any number"
    };

    if (form.name.length > 15) {
        errors.name = "The name must have less than 15 characters"
    };

    if (!form.life) {
        errors.life = "This field cannot be incomplete"
    };

    if (!regex2.test(form.life)) {
        errors.life = "Life must be a number"
    };

    if (form.life < 0 || form.life > 100) {
        errors.life = "Life must be between 0 and 100"
    };

    if (!form.attack) {
        errors.attack = "This field cannot be incomplete"
    };

    if (!regex2.test(form.attack)) {
        errors.attack = "Attack must be a number"
    };

    if (form.attack < 0 || form.attack > 100) {
        errors.attack = "Attack must be between 0 and 100"
    };

    if (!form.defense) {
        errors.defense = "This field cannot be incomplete"
    };

    if (!regex2.test(form.defense)) {
        errors.defense = "Defense must be a number"
    };

    if (form.defense < 0 || form.defense > 100) {
        errors.defense = "Defense must be between 0 and 100"
    };

    if (!form.speed) {
        errors.speed = "This field cannot be incomplete"
    };

    if (!regex2.test(form.speed)) {
        errors.speed = "Speed must be a number"
    };

    if (form.speed < 0 || form.speed > 100) {
        errors.speed = "Speed must be between 0 and 100"
    };

    if (!form.height) {
        errors.height = "This field cannot be incomplete"
    };

    if (!regex2.test(form.height)) {
        errors.height = "Height must be a number"
    };

    if (form.height < 0 || form.height > 100) {
        errors.height = "Height must be between 0 and 100"
    };

    if (!form.weight) {
        errors.weight = "This field cannot be incomplete"
    };

    if (!regex2.test(form.weight)) {
        errors.weight = "Weight must be a number"
    };

    if (form.weight < 0 || form.weight > 100) {
        errors.weight = "Weight must be between 0 and 100"
    };

    if (!form.image) {
        errors.image = "This field cannot be incomplete"
    };

    return errors;

};

export default validation;