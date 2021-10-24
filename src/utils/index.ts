export const getUserName = (id: any) => {
    let userName = "Admin"
    if (id === "2") {
        userName = "Ram"
    } if (id === "3") {
        userName = "Shyam"
    }
    return userName
};