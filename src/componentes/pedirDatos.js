import data from "./data"

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(data)
        }, 500)
    })
}