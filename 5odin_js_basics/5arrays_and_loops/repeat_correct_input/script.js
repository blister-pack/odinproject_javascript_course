let right_number = false;

while (right_number == false) {
    let user_number = prompt("Gib number :D")
    if (parseInt(user_number) > 100 || user_number == "") {
        right_number = true
    } else {
        continue
    }
}